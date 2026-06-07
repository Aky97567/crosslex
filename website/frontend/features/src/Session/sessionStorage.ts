export type LearningRate = 'review' | 'easy' | 'balanced' | 'intensive';

export type WordTheme = 'transport' | 'health' | 'daily_life' | 'work' | 'bureaucracy' | 'finance';

const THEME_KEY = 'crosslex:theme';

export const readActiveTheme = (): WordTheme | null => {
  try {
    const raw = localStorage.getItem(THEME_KEY);
    const valid: WordTheme[] = ['transport', 'health', 'daily_life', 'work', 'bureaucracy', 'finance'];
    return valid.includes(raw as WordTheme) ? (raw as WordTheme) : null;
  } catch {
    return null;
  }
};

export const writeActiveTheme = (theme: WordTheme | null): void => {
  try {
    if (theme === null) {
      localStorage.removeItem(THEME_KEY);
    } else {
      localStorage.setItem(THEME_KEY, theme);
    }
  } catch {}
};

export type RateConfig = {
  newWordProbability: number;
};

export const RATE_CONFIG: Record<LearningRate, RateConfig> = {
  review:    { newWordProbability: 0 },
  easy:      { newWordProbability: 0.1 },
  balanced:  { newWordProbability: 0.25 },
  intensive: { newWordProbability: 0.5 },
};

// ─── Level ───────────────────────────────────────────────────────────────────

export type ActiveLevel = 'a2' | 'b1';

const LEVEL_KEY = 'crosslex:level';
const LEVEL_SELECTED_KEY = 'crosslex:level_selected';

export const readActiveLevel = (): ActiveLevel => {
  try {
    return localStorage.getItem(LEVEL_KEY) === 'a2' ? 'a2' : 'b1';
  } catch {
    return 'b1';
  }
};

export const writeActiveLevel = (level: ActiveLevel): void => {
  try {
    localStorage.setItem(LEVEL_KEY, level);
  } catch {}
};

export const readLevelSelected = (): boolean => {
  try {
    return localStorage.getItem(LEVEL_SELECTED_KEY) === 'true';
  } catch {
    return false;
  }
};

export const writeLevelSelected = (): void => {
  try {
    localStorage.setItem(LEVEL_SELECTED_KEY, 'true');
  } catch {}
};

// ─── Storage migration ────────────────────────────────────────────────────────

export const migrateStorage = (): void => {
  const migrations: [string, string][] = [
    ['crosslex:words_seen',  'crosslex:words_seen:b1'],
    ['crosslex:exercise_log', 'crosslex:exercise_log:b1'],
    ['crosslex:known_words',  'crosslex:known_words:b1'],
  ];

  let hadLegacyData = false;
  try {
    for (const [legacy, namespaced] of migrations) {
      const legacyData = localStorage.getItem(legacy);
      if (legacyData && !localStorage.getItem(namespaced)) {
        localStorage.setItem(namespaced, legacyData);
        hadLegacyData = true;
      }
    }
    // Set default level; skip wizard for users who already had B1 data
    if (!localStorage.getItem(LEVEL_KEY)) {
      localStorage.setItem(LEVEL_KEY, 'b1');
      if (hadLegacyData) {
        localStorage.setItem(LEVEL_SELECTED_KEY, 'true');
      }
    }
  } catch {}
};

// ─── Level-namespaced key helper ──────────────────────────────────────────────

const leveledKey = (base: string): string => `${base}:${readActiveLevel()}`;

// ─── Words seen ───────────────────────────────────────────────────────────────

export type WordStats = {
  count: number;
  accuracy: number;
  lastSeen: number;
};

export type WordsSeenStore = Record<string, WordStats>;

export const readWordsSeen = (): WordsSeenStore => {
  try {
    const raw = localStorage.getItem(leveledKey('crosslex:words_seen'));
    return raw ? (JSON.parse(raw) as WordsSeenStore) : {};
  } catch {
    return {};
  }
};

export const writeWordsSeen = (store: WordsSeenStore): void => {
  try {
    localStorage.setItem(leveledKey('crosslex:words_seen'), JSON.stringify(store));
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

// ─── Learning rate ────────────────────────────────────────────────────────────

export const readLearningRate = (): LearningRate => {
  try {
    const raw = localStorage.getItem('crosslex:learning_rate');
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
    localStorage.setItem('crosslex:learning_rate', rate);
  } catch {}
};

// ─── Exercise log ─────────────────────────────────────────────────────────────

export type ExerciseEvent = {
  ts: number;
  sessionId: number;
  wordKey: string;
  type: 'intro' | 'exercise';
  exerciseType?: 'meaningGuess' | 'contextBlank' | 'wordDefinition' | 'typeTheWord';
  correct?: boolean;
};

export const appendExerciseEvent = (event: ExerciseEvent): void => {
  try {
    const key = leveledKey('crosslex:exercise_log');
    const raw = localStorage.getItem(key);
    const log: ExerciseEvent[] = raw ? (JSON.parse(raw) as ExerciseEvent[]) : [];
    log.push(event);
    localStorage.setItem(key, JSON.stringify(log));
  } catch {}
};

export const readExerciseLog = (): ExerciseEvent[] => {
  try {
    const raw = localStorage.getItem(leveledKey('crosslex:exercise_log'));
    return raw ? (JSON.parse(raw) as ExerciseEvent[]) : [];
  } catch {
    return [];
  }
};

// ─── Word readiness ───────────────────────────────────────────────────────────

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
  for (const wordKey of Array.from(introduced)) {
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

export const getMetricsSummary = (log: ExerciseEvent[]): MetricsSummary => {
  const metrics = computeWordMetrics(log);
  const summary: MetricsSummary = { seedPlanted: 0, familiar: 0, testReady: 0 };
  for (const level of Object.values(metrics)) {
    summary[level] += 1;
  }
  return summary;
};

// ─── Session timeout ──────────────────────────────────────────────────────────

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

// ─── Heal words seen ──────────────────────────────────────────────────────────

export const healWordsSeen = (activePool: string[]): WordsSeenStore => {
  const pool = new Set(activePool);
  const store = readWordsSeen();
  const healed: WordsSeenStore = {};
  let changed = false;
  for (const [key, stats] of Object.entries(store)) {
    if (pool.has(key)) {
      healed[key] = stats;
    } else {
      changed = true;
    }
  }
  if (changed) writeWordsSeen(healed);
  return changed ? healed : store;
};

// ─── Known words ──────────────────────────────────────────────────────────────

export const readKnownWords = (): string[] => {
  try {
    const raw = localStorage.getItem(leveledKey('crosslex:known_words'));
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
};

export const addKnownWord = (wordKey: string): void => {
  try {
    const current = readKnownWords();
    if (!current.includes(wordKey)) {
      localStorage.setItem(leveledKey('crosslex:known_words'), JSON.stringify([...current, wordKey]));
    }
  } catch {}
};

export const removeKnownWord = (wordKey: string): void => {
  try {
    const current = readKnownWords();
    localStorage.setItem(leveledKey('crosslex:known_words'), JSON.stringify(current.filter((k) => k !== wordKey)));
  } catch {}
};

// ─── Flip animation ───────────────────────────────────────────────────────────

export const readFlipAnimation = (): boolean => {
  try {
    return localStorage.getItem('crosslex:flip_animation') === 'true';
  } catch {
    return false;
  }
};

export const writeFlipAnimation = (enabled: boolean): void => {
  try {
    localStorage.setItem('crosslex:flip_animation', String(enabled));
  } catch {}
};

// ─── Known word confirmed ─────────────────────────────────────────────────────

export const readKnownWordConfirmed = (): boolean => {
  try {
    return localStorage.getItem('crosslex:known_word_confirmed') === 'true';
  } catch {
    return false;
  }
};

export const writeKnownWordConfirmed = (): void => {
  try {
    localStorage.setItem('crosslex:known_word_confirmed', 'true');
  } catch {}
};

// ─── Storage usage ────────────────────────────────────────────────────────────

export const readStorageUsage = (): { key: string; bytes: number }[] => {
  const level = readActiveLevel();
  const keys = [
    `crosslex:words_seen:${level}`,
    `crosslex:exercise_log:${level}`,
    `crosslex:known_words:${level}`,
    'crosslex:learning_rate',
    'crosslex:session_timeout',
    'crosslex:known_word_confirmed',
    'crosslex:seen_build',
    LEVEL_KEY,
  ];
  return keys.map((key) => ({
    key,
    bytes: new Blob([localStorage.getItem(key) ?? '']).size,
  }));
};
