import { ProgressResolver } from './progress.resolver';
import { ProgressService } from './progress.service';
import { WordProgress } from './models/word-progress.model';

describe('ProgressResolver', () => {
  let progressService: {
    recordExerciseResult: jest.Mock;
    getMyProgress: jest.Mock;
  };
  let resolver: ProgressResolver;

  const FAKE_WORD_PROGRESS: WordProgress = {
    id: 'wp-1',
    wordId: 'word-1',
    wordKey: 'auto',
    seenCount: 1,
    correctCount: 1,
    lastSeenAt: new Date(),
  };

  beforeEach(() => {
    progressService = {
      recordExerciseResult: jest.fn().mockResolvedValue(FAKE_WORD_PROGRESS),
      getMyProgress: jest.fn().mockResolvedValue([FAKE_WORD_PROGRESS]),
    };

    resolver = new ProgressResolver(
      progressService as unknown as ProgressService,
    );
  });

  describe('recordExerciseResult', () => {
    it('forwards the callers userId from @CurrentUser(), never a client-supplied value, plus the input', async () => {
      const input = { exerciseId: 'exercise-1', correct: true };

      const result = await resolver.recordExerciseResult(input, {
        userId: 'user-1',
      });

      expect(progressService.recordExerciseResult).toHaveBeenCalledWith(
        'user-1',
        input,
      );
      expect(result).toBe(FAKE_WORD_PROGRESS);
    });
  });

  describe('myProgress', () => {
    it('forwards the callers userId from @CurrentUser() with no other arguments', async () => {
      const result = await resolver.myProgress({ userId: 'user-1' });

      expect(progressService.getMyProgress).toHaveBeenCalledWith('user-1');
      expect(result).toEqual([FAKE_WORD_PROGRESS]);
    });
  });
});
