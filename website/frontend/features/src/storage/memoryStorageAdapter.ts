import type { ExerciseEvent, WordsSeenStore, RecordStreakResult, ActiveLevel, LearningRate, WordTheme } from '../Session/sessionStorage';
import type { StoragePort, StorageSnapshot } from './storagePort';

const DEFAULT_SNAPSHOT: StorageSnapshot = {
  exerciseLog:        [],
  wordsSeen:          {},
  streak:             null,
  activeLevel:        'b1',
  learningRate:       'balanced',
  activeTheme:        null,
  knownWords:         [],
  sessionTimeout:     5,
  flipAnimation:      false,
  hardcoreMode:       false,
  knownWordConfirmed: false,
};

export class MemoryStorageAdapter implements StoragePort {
  private snapshot: StorageSnapshot;

  constructor(initial: Partial<StorageSnapshot> = {}) {
    this.snapshot = { ...DEFAULT_SNAPSHOT, ...initial };
  }

  read(): StorageSnapshot {
    return { ...this.snapshot };
  }

  writeActiveLevel(level: ActiveLevel): void          { this.snapshot = { ...this.snapshot, activeLevel: level }; }
  writeLearningRate(rate: LearningRate): void          { this.snapshot = { ...this.snapshot, learningRate: rate }; }
  writeActiveTheme(theme: WordTheme | null): void      { this.snapshot = { ...this.snapshot, activeTheme: theme }; }
  writeSessionTimeout(minutes: number): void           { this.snapshot = { ...this.snapshot, sessionTimeout: minutes }; }
  writeFlipAnimation(enabled: boolean): void           { this.snapshot = { ...this.snapshot, flipAnimation: enabled }; }
  writeHardcoreMode(enabled: boolean): void            { this.snapshot = { ...this.snapshot, hardcoreMode: enabled }; }
  writeWordsSeen(store: WordsSeenStore): void          { this.snapshot = { ...this.snapshot, wordsSeen: store }; }
  writeKnownWordConfirmed(): void                      { this.snapshot = { ...this.snapshot, knownWordConfirmed: true }; }

  addKnownWord(key: string): void {
    if (!this.snapshot.knownWords.includes(key)) {
      this.snapshot = { ...this.snapshot, knownWords: [...this.snapshot.knownWords, key] };
    }
  }

  removeKnownWord(key: string): void {
    this.snapshot = { ...this.snapshot, knownWords: this.snapshot.knownWords.filter(k => k !== key) };
  }

  appendExerciseEvent(event: ExerciseEvent): void {
    this.snapshot = { ...this.snapshot, exerciseLog: [...this.snapshot.exerciseLog, event] };
  }

  recordSessionForStreak(): RecordStreakResult {
    const today = new Date().toLocaleDateString('sv');
    const prev = this.snapshot.streak;
    if (prev?.lastSessionDate === today) return { data: prev, isNewDay: false };
    const yesterday = new Date(Date.now() - 86_400_000).toLocaleDateString('sv');
    const count = prev?.lastSessionDate === yesterday ? (prev.count + 1) : 1;
    const bestCount = Math.max(prev?.bestCount ?? 0, count);
    const next = { count, bestCount, lastSessionDate: today };
    this.snapshot = { ...this.snapshot, streak: next };
    return { data: next, isNewDay: true };
  }
}

export const createMemoryAdapter = (initial: Partial<StorageSnapshot> = {}): MemoryStorageAdapter =>
  new MemoryStorageAdapter(initial);
