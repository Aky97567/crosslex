import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  ExerciseEvent,
  CrosslexStorageProvider,
  createMemoryAdapter,
} from '@whitelotus/front-features';
import { WordMetricsPanel } from './WordMetricsPanel';

// ─── Word pools ───────────────────────────────────────────────────────────────

const SEED_POOL = [
  'beantragen', 'unterlagen', 'frist', 'formular', 'bescheinigung',
  'genehmigung', 'nachweisen', 'anspruch', 'zustaendigkeit', 'vollmacht',
];
const FAMILIAR_POOL = [
  'behoerde', 'anmeldung', 'kuendigung', 'mietvertrag', 'anerkennung',
  'aufenthalt', 'beitrag', 'widerspruch', 'arbeitgeber', 'probezeit',
];
const TEST_READY_POOL = [
  'ueberweisung', 'gehalt', 'konto', 'steuer', 'ausweis',
  'termin', 'kindergeld', 'krankenversicherung',
];

// ─── Event builders ───────────────────────────────────────────────────────────

const intro = (wordKey: string): ExerciseEvent =>
  ({ ts: Date.now(), sessionId: 1, wordKey, type: 'intro' });

const ex = (wordKey: string, correct: boolean): ExerciseEvent =>
  ({ ts: Date.now(), sessionId: 1, wordKey, type: 'exercise', exerciseType: 'meaningGuess', correct });

const seedEvents      = (key: string): ExerciseEvent[] => [intro(key), ex(key, false)];
const familiarEvents  = (key: string): ExerciseEvent[] => [intro(key), ex(key, true), ex(key, true)];
const testReadyEvents = (key: string): ExerciseEvent[] =>
  [intro(key), ex(key, true), ex(key, true), ex(key, true), ex(key, true)];

// ─── State → MemoryAdapter ────────────────────────────────────────────────────

type State = {
  seedCount: number;
  familiarCount: number;
  testReadyCount: number;
  streakDays: number;
  bestStreakDays: number;
  practicedToday: boolean;
};

const buildAdapter = (s: State) => {
  const exerciseLog: ExerciseEvent[] = [
    ...SEED_POOL.slice(0, s.seedCount).flatMap(seedEvents),
    ...FAMILIAR_POOL.slice(0, s.familiarCount).flatMap(familiarEvents),
    ...TEST_READY_POOL.slice(0, s.testReadyCount).flatMap(testReadyEvents),
  ];
  const today = new Date().toLocaleDateString('sv');
  const yesterday = new Date(Date.now() - 86_400_000).toLocaleDateString('sv');
  const streak = (s.streakDays > 0 || s.bestStreakDays > 0)
    ? { count: s.streakDays, bestCount: s.bestStreakDays, lastSessionDate: s.practicedToday ? today : yesterday }
    : null;
  return createMemoryAdapter({ exerciseLog, streak, activeLevel: 'b1' });
};

// ─── Wrapper (Playground only) ────────────────────────────────────────────────

const Playground: React.FC<State> = (props) => (
  <CrosslexStorageProvider adapter={buildAdapter(props)}>
    <WordMetricsPanel />
  </CrosslexStorageProvider>
);

// ─── Fixed snapshot helper ────────────────────────────────────────────────────

const snapshot = (s: State): StoryObj<typeof Playground> => ({
  parameters: { controls: { disable: true } },
  render: () => (
    <CrosslexStorageProvider adapter={buildAdapter(s)}>
      <WordMetricsPanel />
    </CrosslexStorageProvider>
  ),
});

// ─── Meta ─────────────────────────────────────────────────────────────────────

export default {
  title: 'Widgets/WordMetricsPanel',
  component: Playground,
  parameters: { layout: 'padded' },
  argTypes: {
    seedCount:      { control: { type: 'range', min: 0, max: SEED_POOL.length },       name: 'Seed planted' },
    familiarCount:  { control: { type: 'range', min: 0, max: FAMILIAR_POOL.length },   name: 'Familiar' },
    testReadyCount: { control: { type: 'range', min: 0, max: TEST_READY_POOL.length }, name: 'Test-ready' },
    streakDays:     { control: { type: 'range', min: 0, max: 1000 },                   name: 'Current streak' },
    bestStreakDays:  { control: { type: 'range', min: 0, max: 1000 },                   name: 'Best streak (badges)' },
    practicedToday: { control: 'boolean', name: 'Practiced today' },
  },
  args: {
    seedCount: 3,
    familiarCount: 3,
    testReadyCount: 3,
    streakDays: 7,
    bestStreakDays: 7,
    practicedToday: true,
  },
} as Meta<typeof Playground>;

// ─── Interactive story ────────────────────────────────────────────────────────

export const PlaygroundStory: StoryObj<typeof Playground> = {
  name: 'Playground',
};

// ─── Fixed snapshots ──────────────────────────────────────────────────────────

export const NoStreak = snapshot({
  seedCount: 3, familiarCount: 3, testReadyCount: 3,
  streakDays: 0, bestStreakDays: 0, practicedToday: false,
});
NoStreak.name = 'No streak';

export const SparkBadge = snapshot({
  seedCount: 3, familiarCount: 3, testReadyCount: 2,
  streakDays: 3, bestStreakDays: 3, practicedToday: true,
});
SparkBadge.name = '3-day streak — Spark badge';

export const FlameBadge = snapshot({
  seedCount: 3, familiarCount: 3, testReadyCount: 3,
  streakDays: 7, bestStreakDays: 7, practicedToday: true,
});
FlameBadge.name = '7-day streak — Flame badge';

export const InfernoBadge = snapshot({
  seedCount: 4, familiarCount: 3, testReadyCount: 4,
  streakDays: 5, bestStreakDays: 30, practicedToday: false,
});
InfernoBadge.name = 'Best: 30 days (Inferno) — current streak broken';

export const CenturyBadge = snapshot({
  seedCount: 2, familiarCount: 5, testReadyCount: 5,
  streakDays: 100, bestStreakDays: 100, practicedToday: true,
});
CenturyBadge.name = '100-day streak — Century badge';
