import { Meta, StoryObj } from '@storybook/react';
import { StreakMoment, FLAME_FILES } from './StreakMoment';
import { BADGES } from '@whitelotus/front-features';

export default {
  title: 'Widgets/StreakMoment',
  component: StreakMoment,
  parameters: { layout: 'fullscreen' },
  args: { onContinue: () => {}, streakCount: 7 },
} as Meta<typeof StreakMoment>;

export const Flame1: StoryObj<typeof StreakMoment> = {
  args: { flameVariant: FLAME_FILES[0] },
  storyName: 'Flame variant 1',
};

export const Flame2: StoryObj<typeof StreakMoment> = {
  args: { flameVariant: FLAME_FILES[1] },
  storyName: 'Flame variant 2',
};

export const Flame3: StoryObj<typeof StreakMoment> = {
  args: { flameVariant: FLAME_FILES[2] },
  storyName: 'Flame variant 3',
};

export const Flame4: StoryObj<typeof StreakMoment> = {
  args: { flameVariant: FLAME_FILES[3] },
  storyName: 'Flame variant 4',
};

export const Flame5: StoryObj<typeof StreakMoment> = {
  args: { flameVariant: FLAME_FILES[4] },
  storyName: 'Flame variant 5',
};

export const DayOne: StoryObj<typeof StreakMoment> = {
  args: { flameVariant: FLAME_FILES[0], streakCount: 1 },
  storyName: 'Day 1 — new streak',
};

export const WithBadge: StoryObj<typeof StreakMoment> = {
  args: { flameVariant: FLAME_FILES[1], streakCount: 7, newBadge: BADGES.find(b => b.days === 7) },
  storyName: 'With badge unlock (7-day Flame)',
};

export const WithRareBadge: StoryObj<typeof StreakMoment> = {
  args: { flameVariant: FLAME_FILES[4], streakCount: 100, newBadge: BADGES.find(b => b.days === 100) },
  storyName: 'With rare badge (100-day Century)',
};
