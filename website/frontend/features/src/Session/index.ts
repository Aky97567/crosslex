export type {
  LearningRate,
  RateConfig,
  WordStats,
  WordsSeenStore,
  ExerciseEvent,
  WordReadiness,
  MetricsSummary,
  ActiveLevel,
  WordTheme,
  StreakData,
  RecordStreakResult,
} from './sessionStorage';
export {
  RATE_CONFIG,
  readActiveLevel,
  writeActiveLevel,
  readLevelSelected,
  writeLevelSelected,
  migrateStorage,
  readWordsSeen,
  writeWordsSeen,
  updateWordStats,
  seedWordStats,
  readLearningRate,
  writeLearningRate,
  appendExerciseEvent,
  readExerciseLog,
  computeWordMetrics,
  getMetricsSummary,
  readSessionTimeout,
  writeSessionTimeout,
  readStorageUsage,
  readKnownWords,
  addKnownWord,
  removeKnownWord,
  readKnownWordConfirmed,
  writeKnownWordConfirmed,
  readFlipAnimation,
  writeFlipAnimation,
  healWordsSeen,
  readActiveTheme,
  writeActiveTheme,
  readHardcoreMode,
  writeHardcoreMode,
  readStreak,
  recordSessionForStreak,
  hasSessionToday,
} from './sessionStorage';

export type { CardType, SessionSnapshot, ExerciseData } from './sessionAlgorithm';
export { pickNextCard, generateExerciseData, generateExerciseDataSafe } from './sessionAlgorithm';

export { hasSeenCoachMark, markCoachMarkSeen, useCoachMark } from './coachMarks';

export type { Badge } from './badges';
export { BADGES, getEarnedBadges, getNewlyEarnedBadge } from './badges';
