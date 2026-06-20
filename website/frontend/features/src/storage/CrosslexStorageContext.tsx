import React, { createContext, useContext, useMemo, useState } from 'react';
import { computeWordMetrics, getMetricsSummary } from '../Session/sessionStorage';
import type { ExerciseEvent, WordsSeenStore, RecordStreakResult, ActiveLevel, LearningRate, WordTheme, MetricsSummary, WordReadiness } from '../Session/sessionStorage';
import type { StoragePort, StorageSnapshot } from './storagePort';

// ─── Context value ────────────────────────────────────────────────────────────

export type CrosslexStorageContextValue = StorageSnapshot & {
  // Derived
  practicedToday: boolean;
  metricsSummary: MetricsSummary;
  wordMetrics: Record<string, WordReadiness>;

  // Writes — update adapter + React state atomically
  writeActiveLevel(level: ActiveLevel): void;
  writeLearningRate(rate: LearningRate): void;
  writeActiveTheme(theme: WordTheme | null): void;
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
  refresh(): void;
};

const CrosslexStorageContext = createContext<CrosslexStorageContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

type Props = {
  adapter: StoragePort;
  children: React.ReactNode;
};

const CrosslexStorageProvider: React.FC<Props> = ({ adapter, children }) => {
  const [snapshot, setSnapshot] = useState<StorageSnapshot>(() => adapter.read());

  const today = new Date().toLocaleDateString('sv');

  const wordMetrics = useMemo(() => computeWordMetrics(snapshot.exerciseLog), [snapshot.exerciseLog]);
  const metricsSummary = useMemo(() => getMetricsSummary(snapshot.exerciseLog), [snapshot.exerciseLog]);
  const practicedToday = snapshot.streak?.lastSessionDate === today;

  // Wrap each write: call adapter, then sync React state
  const patch = (update: Partial<StorageSnapshot>) =>
    setSnapshot(prev => ({ ...prev, ...update }));

  const value = useMemo<CrosslexStorageContextValue>(() => ({
    ...snapshot,
    practicedToday,
    metricsSummary,
    wordMetrics,

    writeActiveLevel: (level) => { adapter.writeActiveLevel(level); patch({ activeLevel: level }); },
    writeLearningRate: (rate) => { adapter.writeLearningRate(rate); patch({ learningRate: rate }); },
    writeActiveTheme: (theme) => { adapter.writeActiveTheme(theme); patch({ activeTheme: theme }); },
    writeSessionTimeout: (m) => { adapter.writeSessionTimeout(m); patch({ sessionTimeout: m }); },
    writeFlipAnimation: (v) => { adapter.writeFlipAnimation(v); patch({ flipAnimation: v }); },
    writeHardcoreMode: (v) => { adapter.writeHardcoreMode(v); patch({ hardcoreMode: v }); },
    writeMobileFullView: (v) => { adapter.writeMobileFullView(v); patch({ mobileFullView: v }); },
    writeKnownWordConfirmed: () => { adapter.writeKnownWordConfirmed(); patch({ knownWordConfirmed: true }); },

    appendExerciseEvent: (event) => {
      adapter.appendExerciseEvent(event);
      patch({ exerciseLog: [...snapshot.exerciseLog, event] });
    },

    writeWordsSeen: (store) => {
      adapter.writeWordsSeen(store);
      patch({ wordsSeen: store });
    },

    addKnownWord: (key) => {
      adapter.addKnownWord(key);
      if (!snapshot.knownWords.includes(key)) {
        patch({ knownWords: [...snapshot.knownWords, key] });
      }
    },

    removeKnownWord: (key) => {
      adapter.removeKnownWord(key);
      patch({ knownWords: snapshot.knownWords.filter(k => k !== key) });
    },

    recordSessionForStreak: () => {
      const result = adapter.recordSessionForStreak();
      patch({ streak: result.data });
      return result;
    },

    refresh: () => setSnapshot(adapter.read()),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [snapshot, practicedToday, metricsSummary, wordMetrics]);

  return (
    <CrosslexStorageContext.Provider value={value}>
      {children}
    </CrosslexStorageContext.Provider>
  );
};

// ─── Hook ─────────────────────────────────────────────────────────────────────

const useCrosslexStorage = (): CrosslexStorageContextValue => {
  const ctx = useContext(CrosslexStorageContext);
  if (!ctx) throw new Error('useCrosslexStorage must be used inside <CrosslexStorageProvider>');
  return ctx;
};

export { CrosslexStorageProvider, useCrosslexStorage, CrosslexStorageContext };
