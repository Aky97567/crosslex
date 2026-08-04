import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import cookieParser from 'cookie-parser';
import request from 'supertest';

import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import { getCorsOptions } from '../src/cors.config';
import { resetDatabase } from './reset-database';

// Same boot pattern as auth.e2e-spec.ts — real app, real GraphQL layer,
// real Postgres via the dedicated `test` schema. This is also the first
// place JwtAuthGuard/@CurrentUser() are ever exercised against a real
// request; nothing else in the app uses them yet.
describe('Progress (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.use(cookieParser());
    app.enableCors(getCorsOptions());
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    );
    await app.init();

    prisma = moduleRef.get(PrismaService);
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await app.close();
  });

  beforeEach(async () => {
    await resetDatabase(prisma);
  });

  function gql(query: string, variables?: Record<string, unknown>) {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({ query, variables });
  }

  function gqlWithAuth(
    query: string,
    accessToken: string,
    variables?: Record<string, unknown>,
  ) {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({ query, variables });
  }

  const SIGNUP = `
    mutation Signup($input: SignupInput!) {
      signup(input: $input) { accessToken }
    }
  `;
  const RECORD_EXERCISE_RESULT = `
    mutation RecordExerciseResult($input: RecordExerciseResultInput!) {
      recordExerciseResult(input: $input) {
        id
        wordId
        wordKey
        seenCount
        correctCount
      }
    }
  `;
  const MY_PROGRESS = `
    query MyProgress {
      myProgress {
        id
        wordId
        wordKey
        seenCount
        correctCount
      }
    }
  `;

  async function signupAndGetAccessToken(
    email: string,
    password = 'correct horse battery staple',
  ): Promise<string> {
    const res = await gql(SIGNUP, { input: { email, password } });
    return res.body.data.signup.accessToken;
  }

  // No content-authoring API exists yet — seed directly via Prisma, the
  // same way the content pipeline (mock/data) would eventually populate
  // these tables. Returns the exerciseId the tests actually need.
  async function seedWordAndExercise(wordKey: string): Promise<string> {
    const word = await prisma.word.create({ data: { wordKey } });
    const exercise = await prisma.exercise.create({
      data: {
        wordId: word.id,
        exerciseType: 'wordDefinition',
        content: {},
      },
    });
    return exercise.id;
  }

  describe('authorization', () => {
    it('rejects recordExerciseResult with no token', async () => {
      const exerciseId = await seedWordAndExercise('auto');

      const res = await gql(RECORD_EXERCISE_RESULT, {
        input: { exerciseId, correct: true },
      });

      expect(res.body.data?.recordExerciseResult ?? null).toBeNull();
      expect(res.body.errors).toBeDefined();
    });

    it('rejects myProgress with no token', async () => {
      const res = await gql(MY_PROGRESS);

      expect(res.body.data?.myProgress ?? null).toBeNull();
      expect(res.body.errors).toBeDefined();
    });
  });

  describe('recordExerciseResult', () => {
    it('rejects an unknown exerciseId', async () => {
      const accessToken = await signupAndGetAccessToken('unknown@user.com');

      const res = await gqlWithAuth(RECORD_EXERCISE_RESULT, accessToken, {
        input: { exerciseId: '00000000-0000-0000-0000-000000000000', correct: true },
      });

      expect(res.body.data?.recordExerciseResult ?? null).toBeNull();
      expect(res.body.errors[0].message).toBe('Exercise not found');
    });

    it('creates a WordProgress row on the first attempt', async () => {
      const accessToken = await signupAndGetAccessToken('first@user.com');
      const exerciseId = await seedWordAndExercise('auto');

      const res = await gqlWithAuth(RECORD_EXERCISE_RESULT, accessToken, {
        input: { exerciseId, correct: true },
      });

      expect(res.body.errors).toBeUndefined();
      expect(res.body.data.recordExerciseResult).toMatchObject({
        wordKey: 'auto',
        seenCount: 1,
        correctCount: 1,
      });
    });

    it('upserts idempotently: a second attempt increments the same row, not a duplicate', async () => {
      const accessToken = await signupAndGetAccessToken('second@user.com');
      const exerciseId = await seedWordAndExercise('auto');

      await gqlWithAuth(RECORD_EXERCISE_RESULT, accessToken, {
        input: { exerciseId, correct: true },
      });
      const secondRes = await gqlWithAuth(RECORD_EXERCISE_RESULT, accessToken, {
        input: { exerciseId, correct: false },
      });

      expect(secondRes.body.data.recordExerciseResult).toMatchObject({
        wordKey: 'auto',
        seenCount: 2,
        // Stayed at 1 — the wrong second attempt must not increment it.
        correctCount: 1,
      });

      const progressRes = await gqlWithAuth(MY_PROGRESS, accessToken);
      expect(progressRes.body.data.myProgress).toHaveLength(1);
    });
  });

  describe('myProgress — the negative test: user B cannot see user A data', () => {
    it('returns only the calling users own rows, never another users, even after that user has real data', async () => {
      const tokenA = await signupAndGetAccessToken('user-a@user.com');
      const tokenB = await signupAndGetAccessToken('user-b@user.com');
      const exerciseId = await seedWordAndExercise('auto');

      // A does real work. B has done nothing.
      await gqlWithAuth(RECORD_EXERCISE_RESULT, tokenA, {
        input: { exerciseId, correct: true },
      });

      const bProgress = await gqlWithAuth(MY_PROGRESS, tokenB);
      expect(bProgress.body.data.myProgress).toEqual([]);

      const aProgress = await gqlWithAuth(MY_PROGRESS, tokenA);
      expect(aProgress.body.data.myProgress).toHaveLength(1);
    });

    it('keeps each users progress on the same word fully independent', async () => {
      const tokenA = await signupAndGetAccessToken('indep-a@user.com');
      const tokenB = await signupAndGetAccessToken('indep-b@user.com');
      const exerciseId = await seedWordAndExercise('katze');

      // Both attempt the same word, different outcomes.
      await gqlWithAuth(RECORD_EXERCISE_RESULT, tokenA, {
        input: { exerciseId, correct: true },
      });
      await gqlWithAuth(RECORD_EXERCISE_RESULT, tokenB, {
        input: { exerciseId, correct: false },
      });
      await gqlWithAuth(RECORD_EXERCISE_RESULT, tokenB, {
        input: { exerciseId, correct: false },
      });

      const aProgress = await gqlWithAuth(MY_PROGRESS, tokenA);
      const bProgress = await gqlWithAuth(MY_PROGRESS, tokenB);

      expect(aProgress.body.data.myProgress).toEqual([
        expect.objectContaining({ wordKey: 'katze', seenCount: 1, correctCount: 1 }),
      ]);
      expect(bProgress.body.data.myProgress).toEqual([
        expect.objectContaining({ wordKey: 'katze', seenCount: 2, correctCount: 0 }),
      ]);
    });
  });
});
