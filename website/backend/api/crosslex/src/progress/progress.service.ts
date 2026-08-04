import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RecordExerciseResultInput } from './dto/record-exercise-result.input';
import { WordProgress } from './models/word-progress.model';

@Injectable()
export class ProgressService {
  constructor(private readonly prisma: PrismaService) {}

  async recordExerciseResult(
    userId: string,
    input: RecordExerciseResultInput,
  ): Promise<WordProgress> {
    const exercise = await this.prisma.exercise.findUnique({
      where: { id: input.exerciseId },
    });

    if (!exercise) {
      throw new NotFoundException('Exercise not found');
    }

    const [, wordProgress] = await this.prisma.$transaction([
      this.prisma.exerciseEvent.create({
        data: {
          userId,
          wordId: exercise.wordId,
          exerciseId: exercise.id,
          exerciseType: exercise.exerciseType,
          correct: input.correct,
        },
      }),
      this.prisma.wordProgress.upsert({
        where: { userId_wordId: { userId, wordId: exercise.wordId } },
        create: {
          userId,
          wordId: exercise.wordId,
          seenCount: 1,
          correctCount: input.correct ? 1 : 0,
        },
        update: {
          seenCount: { increment: 1 },
          correctCount: input.correct ? { increment: 1 } : undefined,
        },
        include: { word: true },
      }),
    ]);

    return {
      id: wordProgress.id,
      wordId: wordProgress.wordId,
      wordKey: wordProgress.word.wordKey,
      seenCount: wordProgress.seenCount,
      correctCount: wordProgress.correctCount,
      lastSeenAt: wordProgress.lastSeenAt,
    };
  }

  async getMyProgress(userId: string): Promise<Array<WordProgress>> {
    const rows = await this.prisma.wordProgress.findMany({
      where: { userId },
      include: { word: true },
    });

    return rows.map(row => ({
      id: row.id,
      wordId: row.wordId,
      wordKey: row.word.wordKey,
      seenCount: row.seenCount,
      correctCount: row.correctCount,
      lastSeenAt: row.lastSeenAt,
    }));
  }
}
