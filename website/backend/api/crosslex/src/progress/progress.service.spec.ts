import { NotFoundException } from '@nestjs/common';

import { ProgressService } from './progress.service';
import type { PrismaService } from '../prisma/prisma.service';

describe('ProgressService', () => {
  let prisma: {
    exercise: { findUnique: jest.Mock };
    exerciseEvent: { create: jest.Mock };
    wordProgress: { upsert: jest.Mock; findMany: jest.Mock };
    $transaction: jest.Mock;
  };
  let service: ProgressService;

  beforeEach(() => {
    prisma = {
      exercise: { findUnique: jest.fn() },
      exerciseEvent: { create: jest.fn() },
      wordProgress: { upsert: jest.fn(), findMany: jest.fn() },
      $transaction: jest.fn((ops: Promise<unknown>[]) => Promise.all(ops)),
    };

    service = new ProgressService(prisma as unknown as PrismaService);
  });

  describe('recordExerciseResult', () => {
    it('rejects an unknown exerciseId before touching the transaction', async () => {
      prisma.exercise.findUnique.mockResolvedValue(null);

      await expect(
        service.recordExerciseResult('user-1', {
          exerciseId: 'fake-id',
          correct: true,
        }),
      ).rejects.toThrow(NotFoundException);

      expect(prisma.$transaction).not.toHaveBeenCalled();
    });

    it('derives wordId and exerciseType from the Exercise row, not the input', async () => {
      prisma.exercise.findUnique.mockResolvedValue({
        id: 'exercise-1',
        wordId: 'word-1',
        exerciseType: 'wordDefinition',
      });
      prisma.exerciseEvent.create.mockResolvedValue({});
      prisma.wordProgress.upsert.mockResolvedValue({
        id: 'wp-1',
        wordId: 'word-1',
        seenCount: 1,
        correctCount: 1,
        lastSeenAt: new Date(),
        word: { wordKey: 'auto' },
      });

      await service.recordExerciseResult('user-1', {
        exerciseId: 'exercise-1',
        correct: true,
      });

      const eventData = prisma.exerciseEvent.create.mock.calls[0][0].data;
      expect(eventData).toMatchObject({
        userId: 'user-1',
        wordId: 'word-1',
        exerciseId: 'exercise-1',
        exerciseType: 'wordDefinition',
        correct: true,
      });
    });

    it('upserts WordProgress on the compound (userId, wordId) key, incrementing correctCount when correct', async () => {
      prisma.exercise.findUnique.mockResolvedValue({
        id: 'exercise-1',
        wordId: 'word-1',
        exerciseType: 'wordDefinition',
      });
      prisma.exerciseEvent.create.mockResolvedValue({});
      prisma.wordProgress.upsert.mockResolvedValue({
        id: 'wp-1',
        wordId: 'word-1',
        seenCount: 5,
        correctCount: 5,
        lastSeenAt: new Date(),
        word: { wordKey: 'auto' },
      });

      await service.recordExerciseResult('user-1', {
        exerciseId: 'exercise-1',
        correct: true,
      });

      const upsertArgs = prisma.wordProgress.upsert.mock.calls[0][0];
      expect(upsertArgs.where).toEqual({
        userId_wordId: { userId: 'user-1', wordId: 'word-1' },
      });
      expect(upsertArgs.create).toEqual({
        userId: 'user-1',
        wordId: 'word-1',
        seenCount: 1,
        correctCount: 1,
      });
      expect(upsertArgs.update.seenCount).toEqual({ increment: 1 });
      expect(upsertArgs.update.correctCount).toEqual({ increment: 1 });
    });

    it('omits correctCount from the update entirely on a wrong answer, rather than incrementing by zero', async () => {
      prisma.exercise.findUnique.mockResolvedValue({
        id: 'exercise-1',
        wordId: 'word-1',
        exerciseType: 'wordDefinition',
      });
      prisma.exerciseEvent.create.mockResolvedValue({});
      prisma.wordProgress.upsert.mockResolvedValue({
        id: 'wp-1',
        wordId: 'word-1',
        seenCount: 5,
        correctCount: 2,
        lastSeenAt: new Date(),
        word: { wordKey: 'auto' },
      });

      await service.recordExerciseResult('user-1', {
        exerciseId: 'exercise-1',
        correct: false,
      });

      const upsertArgs = prisma.wordProgress.upsert.mock.calls[0][0];
      expect(upsertArgs.create.correctCount).toBe(0);
      expect(upsertArgs.update.correctCount).toBeUndefined();
    });

    it('flattens word.wordKey onto the returned WordProgress, not a raw Prisma row', async () => {
      prisma.exercise.findUnique.mockResolvedValue({
        id: 'exercise-1',
        wordId: 'word-1',
        exerciseType: 'wordDefinition',
      });
      prisma.exerciseEvent.create.mockResolvedValue({});
      const lastSeenAt = new Date();
      prisma.wordProgress.upsert.mockResolvedValue({
        id: 'wp-1',
        wordId: 'word-1',
        seenCount: 1,
        correctCount: 1,
        lastSeenAt,
        word: { wordKey: 'auto' },
      });

      const result = await service.recordExerciseResult('user-1', {
        exerciseId: 'exercise-1',
        correct: true,
      });

      expect(result).toEqual({
        id: 'wp-1',
        wordId: 'word-1',
        wordKey: 'auto',
        seenCount: 1,
        correctCount: 1,
        lastSeenAt,
      });
    });
  });

  describe('getMyProgress', () => {
    it('scopes the query to the given userId and flattens wordKey for every row', async () => {
      const lastSeenAt = new Date();
      prisma.wordProgress.findMany.mockResolvedValue([
        {
          id: 'wp-1',
          wordId: 'word-1',
          seenCount: 3,
          correctCount: 2,
          lastSeenAt,
          word: { wordKey: 'auto' },
        },
        {
          id: 'wp-2',
          wordId: 'word-2',
          seenCount: 1,
          correctCount: 1,
          lastSeenAt,
          word: { wordKey: 'katze' },
        },
      ]);

      const result = await service.getMyProgress('user-1');

      expect(prisma.wordProgress.findMany).toHaveBeenCalledWith({
        where: { userId: 'user-1' },
        include: { word: true },
      });
      expect(result).toEqual([
        {
          id: 'wp-1',
          wordId: 'word-1',
          wordKey: 'auto',
          seenCount: 3,
          correctCount: 2,
          lastSeenAt,
        },
        {
          id: 'wp-2',
          wordId: 'word-2',
          wordKey: 'katze',
          seenCount: 1,
          correctCount: 1,
          lastSeenAt,
        },
      ]);
    });
  });
});
