export { TabbedCarousel } from './Carousel';
export { ExpandableSectionCard } from './ExpandableSectionCard';

export { renderContentModule } from './ContentModules';

export { PaletteSwitcher, PALETTES, getInitialPalette } from './PaletteSwitcher';
export type { Palette } from './PaletteSwitcher';

export type {
  RunnerStats,
  RunnerState,
  LearningRate,
  RateConfig,
  WordStats,
  WordsSeenStore,
  ExerciseEvent,
  WordReadiness,
  MetricsSummary,
  CardType,
  SessionSnapshot,
  ExerciseData,
  ActiveLevel,
  WordTheme,
  StreakData,
  RecordStreakResult,
  Badge,
} from './Session';
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
  BADGES,
  getEarnedBadges,
  getNewlyEarnedBadge,
  pickNextCard,
  generateExerciseData,
  generateExerciseDataSafe,
  hasSeenCoachMark,
  markCoachMarkSeen,
  useCoachMark,
  useSessionTimer,
  useInactivityTimer,
  useSessionState,
} from './Session';

export type { StoragePort, StorageSnapshot, CrosslexStorageContextValue } from './storage';
export { LocalStorageAdapter, MemoryStorageAdapter, createMemoryAdapter, CrosslexStorageProvider, useCrosslexStorage } from './storage';
