export type LearningRate = 'review' | 'easy' | 'balanced' | 'intensive';

export type RateConfig = {
  newWordProbability: number;
};

export const RATE_CONFIG: Record<LearningRate, RateConfig> = {
  review:    { newWordProbability: 0 },
  easy:      { newWordProbability: 0.1 },
  balanced:  { newWordProbability: 0.25 },
  intensive: { newWordProbability: 0.5 },
};

export type WordStats = {
  count: number;
  accuracy: number;
  lastSeen: number;
};

export type WordsSeenStore = Record<string, WordStats>;

export type ExerciseEvent = {
  ts: number;
  sessionId: number;
  wordKey: string;
  type: 'intro' | 'exercise';
  exerciseType?: 'meaningGuess' | 'contextBlank' | 'wordDefinition';
  correct?: boolean;
};

const KEYS = {
  wordsSeen: 'crosslex:words_seen',
  exerciseLog: 'crosslex:exercise_log',
  learningRate: 'crosslex:learning_rate',
} as const;

export const readWordsSeen = (): WordsSeenStore => {
  try {
    const raw = localStorage.getItem(KEYS.wordsSeen);
    return raw ? (JSON.parse(raw) as WordsSeenStore) : {};
  } catch {
    return {};
  }
};

export const writeWordsSeen = (store: WordsSeenStore): void => {
  try {
    localStorage.setItem(KEYS.wordsSeen, JSON.stringify(store));
  } catch {}
};

export const updateWordStats = (
  store: WordsSeenStore,
  wordKey: string,
  correct: boolean,
): WordsSeenStore => {
  const prev = store[wordKey] ?? { count: 0, accuracy: 0, lastSeen: 0 };
  const newCount = prev.count + 1;
  const newAccuracy = (prev.accuracy * prev.count + (correct ? 1 : 0)) / newCount;
  return {
    ...store,
    [wordKey]: { count: newCount, accuracy: newAccuracy, lastSeen: Date.now() },
  };
};

export const seedWordStats = (store: WordsSeenStore, wordKey: string): WordsSeenStore => {
  if (store[wordKey]) return store;
  return { ...store, [wordKey]: { count: 0, accuracy: 0, lastSeen: Date.now() } };
};

export const readLearningRate = (): LearningRate => {
  try {
    const raw = localStorage.getItem(KEYS.learningRate);
    if (raw === 'review') return 'review';
    if (raw === 'easy') return 'easy';
    if (raw === 'intensive') return 'intensive';
    return 'balanced';
  } catch {
    return 'balanced';
  }
};

export const writeLearningRate = (rate: LearningRate): void => {
  try {
    localStorage.setItem(KEYS.learningRate, rate);
  } catch {}
};

export const appendExerciseEvent = (event: ExerciseEvent): void => {
  try {
    const raw = localStorage.getItem(KEYS.exerciseLog);
    const log: ExerciseEvent[] = raw ? (JSON.parse(raw) as ExerciseEvent[]) : [];
    log.push(event);
    localStorage.setItem(KEYS.exerciseLog, JSON.stringify(log));
  } catch {}
};

export const readExerciseLog = (): ExerciseEvent[] => {
  try {
    const raw = localStorage.getItem(KEYS.exerciseLog);
    return raw ? (JSON.parse(raw) as ExerciseEvent[]) : [];
  } catch {
    return [];
  }
};

export type WordReadiness = 'testReady' | 'familiar' | 'seedPlanted';

export type MetricsSummary = {
  seedPlanted: number;
  familiar: number;
  testReady: number;
};

export const computeWordMetrics = (
  log: ExerciseEvent[],
): Record<string, WordReadiness> => {
  const introduced = new Set<string>();
  const exercisesByWord: Record<string, ExerciseEvent[]> = {};

  for (const event of log) {
    if (event.type === 'intro') {
      introduced.add(event.wordKey);
    } else {
      (exercisesByWord[event.wordKey] ??= []).push(event);
    }
  }

  const result: Record<string, WordReadiness> = {};
  for (const wordKey of introduced) {
    const exercises = exercisesByWord[wordKey] ?? [];
    const correctCount = exercises.filter((e) => e.correct).length;
    const lastTwo = exercises.slice(-2);
    const lastTwoCorrect = lastTwo.length === 2 && lastTwo.every((e) => e.correct);

    if (correctCount >= 4 && lastTwoCorrect) {
      result[wordKey] = 'testReady';
    } else if (correctCount >= 2) {
      result[wordKey] = 'familiar';
    } else {
      result[wordKey] = 'seedPlanted';
    }
  }
  return result;
};

export const readSessionTimeout = (): number => {
  try {
    const raw = localStorage.getItem('crosslex:session_timeout');
    const parsed = raw ? parseInt(raw, 10) : NaN;
    return isNaN(parsed) || parsed < 1 ? 5 : parsed;
  } catch {
    return 5;
  }
};

export const writeSessionTimeout = (minutes: number): void => {
  try {
    localStorage.setItem('crosslex:session_timeout', String(minutes));
  } catch {}
};

export const readStorageUsage = (): { key: string; bytes: number }[] => {
  const crosslexKeys = [
    'crosslex:words_seen',
    'crosslex:exercise_log',
    'crosslex:learning_rate',
    'crosslex:session_timeout',
    'crosslex:seen_build',
  ];
  return crosslexKeys.map((key) => ({
    key,
    bytes: new Blob([localStorage.getItem(key) ?? '']).size,
  }));
};

export const getMetricsSummary = (log: ExerciseEvent[]): MetricsSummary => {
  const metrics = computeWordMetrics(log);
  const summary: MetricsSummary = { seedPlanted: 0, familiar: 0, testReady: 0 };
  for (const level of Object.values(metrics)) {
    summary[level] += 1;
  }
  return summary;
};
