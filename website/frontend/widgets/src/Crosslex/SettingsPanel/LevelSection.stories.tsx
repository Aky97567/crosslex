import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { LevelSection } from './LevelSection';

const withLevel = (level: 'a2' | 'b1') => (Story: React.FC) => {
  localStorage.setItem('crosslex:level', level);
  return <Story />;
};

export default {
  title: 'Widgets/SettingsPanel/LevelSection',
  component: LevelSection,
  parameters: { layout: 'padded' },
} as Meta<typeof LevelSection>;

type Story = StoryObj<typeof LevelSection>;

export const B1Active: Story = {
  name: 'B1 active',
  decorators: [withLevel('b1')],
};

export const A2Active: Story = {
  name: 'A2 active',
  decorators: [withLevel('a2')],
};

export const Confirming: Story = {
  name: 'Confirming switch (click the inactive level to trigger)',
  decorators: [withLevel('b1')],
};
