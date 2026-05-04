export type LearningRate = 'aggressive' | 'conservative';

export type WordStats = {
  count: number;
  accuracy: number;
  lastSeen: number;
};

export type WordsSeenStore = Record<string, WordStats>;

export type SessionRecord = {
  date: number;
  durationMinutes: number;
  wordsNew: number;
  wordsReviewed: number;
  accuracy: number;
};

const KEYS = {
  wordsSeen: 'crosslex:words_seen',
  sessionHistory: 'crosslex:session_history',
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

export const readLearningRate = (): LearningRate => {
  try {
    const raw = localStorage.getItem(KEYS.learningRate);
    return raw === 'conservative' ? 'conservative' : 'aggressive';
  } catch {
    return 'aggressive';
  }
};

export const writeLearningRate = (rate: LearningRate): void => {
  try {
    localStorage.setItem(KEYS.learningRate, rate);
  } catch {}
};

export const appendSessionRecord = (record: SessionRecord): void => {
  try {
    const raw = localStorage.getItem(KEYS.sessionHistory);
    const history: SessionRecord[] = raw ? (JSON.parse(raw) as SessionRecord[]) : [];
    history.push(record);
    localStorage.setItem(KEYS.sessionHistory, JSON.stringify(history));
  } catch {}
};
