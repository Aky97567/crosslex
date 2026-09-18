import type {
  ExerciseEvent,
  WordsSeenStore,
  StreakData,
  RecordStreakResult,
  ActiveLevel,
  LearningRate,
  SessionFilter,
} from '../Session/sessionStorage';

export interface StorageSnapshot {
  exerciseLog: ExerciseEvent[];
  wordsSeen: WordsSeenStore;
  streak: StreakData | null;
  activeLevel: ActiveLevel;
  learningRate: LearningRate;
  sessionFilter: SessionFilter;
  knownWords: string[];
  sessionTimeout: number;
  flipAnimation: boolean;
  hardcoreMode: boolean;
  mobileFullView: boolean;
  knownWordConfirmed: boolean;
}

export interface StoragePort {
  read(): StorageSnapshot;

  writeActiveLevel(level: ActiveLevel): void;
  writeLearningRate(rate: LearningRate): void;
  writeSessionFilter(filter: SessionFilter): void;
  writeSessionTimeout(minutes: number): void;
  writeFlipAnimation(enabled: boolean): void;
  writeHardcoreMode(enabled: boolean): void;
  writeMobileFullView(enabled: boolean): void;

  appendExerciseEvent(event: ExerciseEvent): void;
  writeWordsSeen(store: WordsSeenStore): void;
  addKnownWord(key: string): void;
  removeKnownWord(key: string): void;
  writeKnownWordConfirmed(): void;

  recordSessionForStreak(): RecordStreakResult;
}
