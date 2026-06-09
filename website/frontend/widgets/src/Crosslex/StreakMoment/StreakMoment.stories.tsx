import { Meta, StoryObj } from '@storybook/react';
import { StreakMoment } from './StreakMoment';
import { BADGES } from '@whitelotus/front-features';

export default {
  title: 'Widgets/StreakMoment',
  component: StreakMoment,
  parameters: { layout: 'fullscreen' },
  args: { onContinue: () => {} },
} as Meta<typeof StreakMoment>;

export const DayOne: StoryObj<typeof StreakMoment> = {
  args: { streakCount: 1 },
  storyName: 'Day 1 — new streak',
};

export const MultiDay: StoryObj<typeof StreakMoment> = {
  args: { streakCount: 5 },
  storyName: '5-day streak',
};

export const LongStreak: StoryObj<typeof StreakMoment> = {
  args: { streakCount: 30 },
  storyName: '30-day streak',
};

export const WithBadge: StoryObj<typeof StreakMoment> = {
  args: { streakCount: 7, newBadge: BADGES.find(b => b.days === 7) },
  storyName: 'With new badge (7-day Flame)',
};

export const WithRareBadge: StoryObj<typeof StreakMoment> = {
  args: { streakCount: 100, newBadge: BADGES.find(b => b.days === 100) },
  storyName: 'With rare badge (100-day Century)',
};
