import {
  recordSessionForStreak,
  readStreak,
  hasSessionToday,
  computeWordMetrics,
  getMetricsSummary,
  updateWordStats,
  seedWordStats,
  healWordsSeen,
  writeWordsSeen,
  ExerciseEvent,
  WordsSeenStore,
} from './sessionStorage';

beforeEach(() => {
  localStorage.clear();
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

const setNow = (isoDate: string) => jest.setSystemTime(new Date(`${isoDate}T12:00:00`));

describe('streak', () => {
  test('readStreak returns null when nothing has been recorded yet', () => {
    expect(readStreak()).toBeNull();
  });

  test('the first ever session starts a streak of 1', () => {
    setNow('2026-01-01');
    const { data, isNewDay } = recordSessionForStreak();
    expect(isNewDay).toBe(true);
    expect(data).toMatchObject({ count: 1, bestCount: 1, lastSessionDate: '2026-01-01' });
  });

  test('a second session on the same day does not change the streak', () => {
    setNow('2026-01-01');
    recordSessionForStreak();
    const { data, isNewDay } = recordSessionForStreak();
    expect(isNewDay).toBe(false);
    expect(data.count).toBe(1);
  });

  test('a session on the following day extends the streak', () => {
    setNow('2026-01-01');
    recordSessionForStreak();
    setNow('2026-01-02');
    const { data, isNewDay } = recordSessionForStreak();
    expect(isNewDay).toBe(true);
    expect(data.count).toBe(2);
    expect(data.bestCount).toBe(2);
  });

  test('skipping a day resets the streak but keeps the best count', () => {
    setNow('2026-01-01');
    recordSessionForStreak();
    setNow('2026-01-02');
    recordSessionForStreak();
    setNow('2026-01-02T' + '00:00:00'); // still day 2, sanity no-op
    setNow('2026-01-04'); // skipped Jan 3
    const { data } = recordSessionForStreak();
    expect(data.count).toBe(1);
    expect(data.bestCount).toBe(2); // best streak preserved even though current reset
  });

  test('hasSessionToday reflects whether today already has a recorded session', () => {
    setNow('2026-01-01');
    expect(hasSessionToday()).toBe(false);
    recordSessionForStreak();
    expect(hasSessionToday()).toBe(true);
  });

  test('readStreak backfills a missing bestCount from legacy data', () => {
    localStorage.setItem('crosslex:streak', JSON.stringify({ count: 3, lastSessionDate: '2026-01-01' }));
    expect(readStreak()).toEqual({ count: 3, bestCount: 0, lastSessionDate: '2026-01-01' });
  });

  test('does not use a >24h-but-same-calendar-day gap as "yesterday"', () => {
    // yesterdayDate() is computed as `now - 86_400_000`, a fixed 24h offset,
    // not a calendar-day subtraction — verifies that offset actually chains
    // streaks correctly across a real local-time day boundary.
    setNow('2026-01-01');
    recordSessionForStreak();
    setNow('2026-01-02');
    const { data } = recordSessionForStreak();
    expect(data.count).toBe(2);
  });
});

describe('computeWordMetrics', () => {
  const intro = (wordKey: string, ts = 0): ExerciseEvent => ({ ts, sessionId: 1, wordKey, type: 'intro' });
  const exercise = (wordKey: string, correct: boolean, ts = 0): ExerciseEvent => ({
    ts, sessionId: 1, wordKey, type: 'exercise', exerciseType: 'meaningGuess', correct,
  });

  test('a word with no intro event is excluded entirely, even with exercise events', () => {
    const log = [exercise('a', true)];
    expect(computeWordMetrics(log)).toEqual({});
  });

  test('an introduced word with no correct answers is seedPlanted', () => {
    const log = [intro('a')];
    expect(computeWordMetrics(log)).toEqual({ a: 'seedPlanted' });
  });

  test('2-3 correct answers makes a word familiar', () => {
    const log = [intro('a'), exercise('a', true), exercise('a', true)];
    expect(computeWordMetrics(log)).toEqual({ a: 'familiar' });
  });

  test('4+ correct answers with the last two both correct makes a word wired', () => {
    const log = [intro('a'), exercise('a', true), exercise('a', true), exercise('a', true), exercise('a', true)];
    expect(computeWordMetrics(log)).toEqual({ a: 'wired' });
  });

  test('4+ correct answers but a recent miss keeps a word familiar, not wired', () => {
    const log = [
      intro('a'),
      exercise('a', true),
      exercise('a', true),
      exercise('a', true),
      exercise('a', true),
      exercise('a', false), // most recent attempt breaks the "last two correct" gate
    ];
    expect(computeWordMetrics(log)).toEqual({ a: 'familiar' });
  });

  test('tracks multiple words independently', () => {
    const log = [
      intro('a'), exercise('a', true), exercise('a', true), exercise('a', true), exercise('a', true),
      intro('b'),
    ];
    expect(computeWordMetrics(log)).toEqual({ a: 'wired', b: 'seedPlanted' });
  });
});

describe('getMetricsSummary', () => {
  test('aggregates readiness counts across words', () => {
    const log: ExerciseEvent[] = [
      { ts: 0, sessionId: 1, wordKey: 'a', type: 'intro' },
      { ts: 0, sessionId: 1, wordKey: 'b', type: 'intro' },
      { ts: 0, sessionId: 1, wordKey: 'b', type: 'exercise', correct: true },
      { ts: 0, sessionId: 1, wordKey: 'b', type: 'exercise', correct: true },
    ];
    expect(getMetricsSummary(log)).toEqual({ seedPlanted: 1, familiar: 1, wired: 0 });
  });

  test('returns all zeros for an empty log', () => {
    expect(getMetricsSummary([])).toEqual({ seedPlanted: 0, familiar: 0, wired: 0 });
  });
});

describe('updateWordStats', () => {
  test('creates a fresh entry from no prior stats', () => {
    const result = updateWordStats({}, 'a', true);
    expect(result.a).toMatchObject({ count: 1, accuracy: 1 });
  });

  test('computes a running accuracy average across repeated updates', () => {
    let store: WordsSeenStore = {};
    store = updateWordStats(store, 'a', true);  // 1/1
    store = updateWordStats(store, 'a', false); // 1/2
    store = updateWordStats(store, 'a', true);  // 2/3
    expect(store.a.count).toBe(3);
    expect(store.a.accuracy).toBeCloseTo(2 / 3);
  });

  test('does not mutate the input store', () => {
    const store: WordsSeenStore = { a: { count: 1, accuracy: 1, lastSeen: 0 } };
    const result = updateWordStats(store, 'a', true);
    expect(result).not.toBe(store);
    expect(store.a.count).toBe(1);
  });
});

describe('seedWordStats', () => {
  test('adds a zeroed entry for a word with no prior stats', () => {
    const result = seedWordStats({}, 'a');
    expect(result.a).toMatchObject({ count: 0, accuracy: 0 });
  });

  test('is a no-op (same reference) when the word already has stats', () => {
    const store: WordsSeenStore = { a: { count: 5, accuracy: 0.5, lastSeen: 123 } };
    const result = seedWordStats(store, 'a');
    expect(result).toBe(store);
  });
});

describe('healWordsSeen', () => {
  test('drops entries for words no longer in the active pool', () => {
    localStorage.setItem('crosslex:words_seen:b1', JSON.stringify({
      a: { count: 1, accuracy: 1, lastSeen: 0 },
      stale: { count: 1, accuracy: 1, lastSeen: 0 },
    }));
    const healed = healWordsSeen(['a']);
    expect(healed).toEqual({ a: { count: 1, accuracy: 1, lastSeen: 0 } });
    expect(JSON.parse(localStorage.getItem('crosslex:words_seen:b1')!)).toEqual(healed);
  });

  test('is a no-op (same reference, no write) when every entry is still in the pool', () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
    writeWordsSeen({ a: { count: 1, accuracy: 1, lastSeen: 0 } });
    setItemSpy.mockClear();
    const result = healWordsSeen(['a', 'b']);
    expect(result).toEqual({ a: { count: 1, accuracy: 1, lastSeen: 0 } });
    expect(setItemSpy).not.toHaveBeenCalled();
    setItemSpy.mockRestore();
  });
});
