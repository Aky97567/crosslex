import { Meta, StoryObj } from '@storybook/react';
import { BADGES, getEarnedBadges } from '@whitelotus/front-features';
import { StreakBadgeTrophyCase } from './StreakBadgeTrophyCase';

export default {
  title: 'Entities/StreakBadgeTrophyCase',
  component: StreakBadgeTrophyCase,
  parameters: { layout: 'padded' },
} as Meta<typeof StreakBadgeTrophyCase>;

type Story = StoryObj<typeof StreakBadgeTrophyCase>;

export const NoneEarned: Story = {
  name: 'No badges earned',
  args: { earnedBadges: [] },
};

export const SparkEarned: Story = {
  name: '3-day — Spark earned',
  args: { earnedBadges: getEarnedBadges(3) },
};

export const FlameEarned: Story = {
  name: '7-day — Flame earned',
  args: { earnedBadges: getEarnedBadges(7) },
};

export const InfernoEarned: Story = {
  name: '30-day — Inferno earned',
  args: { earnedBadges: getEarnedBadges(30) },
};

export const AllEarned: Story = {
  name: 'All badges earned',
  args: { earnedBadges: BADGES },
};
