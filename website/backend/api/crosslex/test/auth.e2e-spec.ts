import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import cookieParser from 'cookie-parser';
import * as argon2 from 'argon2';
import request from 'supertest';

import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';

// Boots the real app (real GraphQL layer, real JwtService/argon2/cookie
// logic) against the dedicated `test` Postgres schema — see
// test/jest-e2e-setup.ts for how DATABASE_URL gets pointed there before
// AppModule/ConfigModule ever load.
describe('Auth (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    // Mirrors main.ts exactly — these tests would be meaningless if they
    // exercised different middleware/pipes than what actually runs.
    app.use(cookieParser());
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
    // FK order: RefreshToken references User.
    await prisma.refreshToken.deleteMany();
    await prisma.user.deleteMany();
  });

  function gql(query: string, variables?: Record<string, unknown>) {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({ query, variables });
  }

  function gqlWithCookie(
    query: string,
    cookie: string,
    variables?: Record<string, unknown>,
  ) {
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Cookie', cookie)
      .send({ query, variables });
  }

  function extractRefreshTokenCookie(res: request.Response): string {
    const setCookie = res.headers['set-cookie'] as unknown as
      | string[]
      | undefined;
    const cookieHeader = setCookie?.find((c) =>
      c.startsWith('refreshToken='),
    );
    if (!cookieHeader) {
      throw new Error(
        `Expected a refreshToken Set-Cookie header, got: ${JSON.stringify(setCookie)}`,
      );
    }
    return cookieHeader.split(';')[0];
  }

  const SIGNUP = `
    mutation Signup($input: SignupInput!) {
      signup(input: $input) { accessToken }
    }
  `;
  const LOGIN = `
    mutation Login($input: LoginInput!) {
      login(input: $input) { accessToken }
    }
  `;
  const REFRESH = `mutation { refresh { accessToken } }`;
  const LOGOUT = `mutation { logout }`;

  async function signup(email: string, password: string) {
    return gql(SIGNUP, { input: { email, password } });
  }

  describe('signup', () => {
    it('creates a user, hashes the password, and delivers a refresh cookie', async () => {
      const res = await signup('new@user.com', 'correct horse battery staple');

      expect(res.status).toBe(200);
      expect(res.body.errors).toBeUndefined();
      const accessToken = res.body.data.signup.accessToken;
      expect(accessToken.split('.')).toHaveLength(3); // header.payload.signature

      const cookieHeader = (res.headers['set-cookie'] as unknown as string[]).find(
        (c) => c.startsWith('refreshToken='),
      );
      expect(cookieHeader).toContain('HttpOnly');
      expect(cookieHeader).toContain('SameSite=Lax');
      expect(cookieHeader).toContain('Max-Age=');
      // JWT_KEY_SOURCE=file locally — secure is only forced on once that's
      // secrets-manager (a real deployed, HTTPS-only context).
      expect(cookieHeader).not.toContain('Secure');
      // Pinned unset in jest-e2e-setup.ts for exactly this determinism.
      expect(cookieHeader).not.toContain('Domain=');

      const user = await prisma.user.findUnique({
        where: { email: 'new@user.com' },
      });
      expect(user).not.toBeNull();
      expect(user!.passwordHash).not.toBe('correct horse battery staple');
      expect(
        await argon2.verify(user!.passwordHash, 'correct horse battery staple'),
      ).toBe(true);
    });

    it('normalizes email casing/whitespace before storing and comparing', async () => {
      await signup(' User@Example.com ', 'correct horse battery staple');

      const user = await prisma.user.findUnique({
        where: { email: 'user@example.com' },
      });
      expect(user).not.toBeNull();
    });

    it('rejects a duplicate (post-normalization) email with a clean GraphQL error', async () => {
      await signup('dup@user.com', 'correct horse battery staple');
      const res = await signup('DUP@user.com  '.trim(), 'another password entirely');

      expect(res.body.data?.signup ?? null).toBeNull();
      expect(res.body.errors[0].message).toBe(
        'An account with this email already exists',
      );
      // Never leak raw Prisma/SQL detail to the client.
      expect(res.body.errors[0].message).not.toMatch(/prisma|sql|constraint/i);
    });

    it('rejects a password under the 12-character minimum', async () => {
      const res = await signup('short@user.com', 'short1');

      expect(res.body.data?.signup ?? null).toBeNull();
      expect(res.body.errors).toBeDefined();

      const user = await prisma.user.findUnique({
        where: { email: 'short@user.com' },
      });
      expect(user).toBeNull();
    });

    it('rejects a password equal to the email', async () => {
      const res = await signup('same@user.com', 'same@user.com');

      expect(res.body.data?.signup ?? null).toBeNull();
      expect(res.body.errors[0].message).toBe(
        'Password must not be the same as your email',
      );
    });
  });

  describe('login', () => {
    it('issues a fresh token pair for correct credentials', async () => {
      await signup('login@user.com', 'correct horse battery staple');

      const res = await gql(LOGIN, {
        input: { email: 'login@user.com', password: 'correct horse battery staple' },
      });

      expect(res.body.errors).toBeUndefined();
      expect(res.body.data.login.accessToken.split('.')).toHaveLength(3);
    });

    it('rejects a wrong password and an unknown email with the identical message (no account enumeration)', async () => {
      await signup('known@user.com', 'correct horse battery staple');

      const wrongPassword = await gql(LOGIN, {
        input: { email: 'known@user.com', password: 'totally wrong password' },
      });
      const unknownEmail = await gql(LOGIN, {
        input: { email: 'nobody@user.com', password: 'totally wrong password' },
      });

      expect(wrongPassword.body.errors[0].message).toBe('Invalid credentials');
      expect(unknownEmail.body.errors[0].message).toBe('Invalid credentials');
    });
  });

  describe('refresh (rotation + reuse detection)', () => {
    it('rejects a refresh call with no cookie presented', async () => {
      const res = await gql(REFRESH);
      expect(res.body.data?.refresh ?? null).toBeNull();
      expect(res.body.errors[0].message).toBe('No refresh token presented');
    });

    it('rotates: a valid refresh token yields a new pair and a new cookie', async () => {
      const signupRes = await signup('rotate@user.com', 'correct horse battery staple');
      const firstCookie = extractRefreshTokenCookie(signupRes);

      const refreshRes = await gqlWithCookie(REFRESH, firstCookie);

      expect(refreshRes.body.errors).toBeUndefined();
      expect(refreshRes.body.data.refresh.accessToken.split('.')).toHaveLength(3);
      const secondCookie = extractRefreshTokenCookie(refreshRes);
      expect(secondCookie).not.toBe(firstCookie);
    });

    it('treats reuse of an already-rotated token as theft: revokes the whole family', async () => {
      const signupRes = await signup('reuse@user.com', 'correct horse battery staple');
      const firstCookie = extractRefreshTokenCookie(signupRes);

      const refreshRes = await gqlWithCookie(REFRESH, firstCookie);
      const secondCookie = extractRefreshTokenCookie(refreshRes);

      // Replay the original (now-rotated, stale) cookie.
      const reuseRes = await gqlWithCookie(REFRESH, firstCookie);
      expect(reuseRes.body.data?.refresh ?? null).toBeNull();
      expect(reuseRes.body.errors[0].message).toBe(
        'Refresh token reuse detected',
      );

      // The legitimately-rotated "new" token must also be dead now — the
      // whole family was revoked, not just the reused row.
      const secondCallRes = await gqlWithCookie(REFRESH, secondCookie);
      expect(secondCallRes.body.data?.refresh ?? null).toBeNull();
      expect(secondCallRes.body.errors).toBeDefined();
    });

    it('rejects an unrecognized refresh token', async () => {
      const res = await gqlWithCookie(REFRESH, 'refreshToken=not-a-real-token');
      expect(res.body.errors[0].message).toBe('Invalid refresh token');
    });
  });

  describe('logout', () => {
    it('revokes the refresh token family server-side, not just the client cookie', async () => {
      const signupRes = await signup('logout@user.com', 'correct horse battery staple');
      const cookie = extractRefreshTokenCookie(signupRes);

      const logoutRes = await gqlWithCookie(LOGOUT, cookie);
      expect(logoutRes.body.data.logout).toBe(true);

      // Refresh no longer works even though the access token issued at
      // signup is still technically unexpired — logout only invalidates
      // the refresh chain, by design (see AGENTS.md Phase 3 checklist).
      const refreshAfterLogout = await gqlWithCookie(REFRESH, cookie);
      expect(refreshAfterLogout.body.data?.refresh ?? null).toBeNull();
      expect(refreshAfterLogout.body.errors).toBeDefined();
    });

    it('is a no-op (not an error) when no cookie is presented', async () => {
      const res = await gql(LOGOUT);
      expect(res.body.errors).toBeUndefined();
      expect(res.body.data.logout).toBe(true);
    });
  });
});
