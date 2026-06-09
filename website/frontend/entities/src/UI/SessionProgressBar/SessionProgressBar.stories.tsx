import { Meta, StoryObj } from '@storybook/react';
import { SessionProgressBar } from './SessionProgressBar';

export default {
  title: 'Entities/SessionProgressBar',
  component: SessionProgressBar,
  parameters: { layout: 'padded' },
  args: {
    elapsed: 0,
    durationMs: 30 * 60 * 1000,
  },
  argTypes: {
    elapsed:     { control: { type: 'range', min: 0, max: 30 * 60 * 1000, step: 1000 }, name: 'Elapsed (ms)' },
    durationMs:  { control: { type: 'select' }, options: [5, 10, 15, 30].map(m => m * 60 * 1000), name: 'Duration' },
  },
} as Meta<typeof SessionProgressBar>;

type Story = StoryObj<typeof SessionProgressBar>;

export const Start: Story = {
  name: 'Session start',
  args: { elapsed: 0, durationMs: 30 * 60 * 1000 },
};

export const Midway: Story = {
  name: 'Halfway through',
  args: { elapsed: 15 * 60 * 1000, durationMs: 30 * 60 * 1000 },
};

export const NearEnd: Story = {
  name: 'Near end',
  args: { elapsed: 28 * 60 * 1000, durationMs: 30 * 60 * 1000 },
};

export const ShortSession: Story = {
  name: '5-min session, 3 min in',
  args: { elapsed: 3 * 60 * 1000, durationMs: 5 * 60 * 1000 },
};
