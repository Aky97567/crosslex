import { Meta, StoryObj } from '@storybook/react';
import { WordReadinessStat } from './WordReadinessStat';

export default {
  title: 'Entities/WordReadinessStat',
  component: WordReadinessStat,
  parameters: { layout: 'centered' },
  args: {
    count: 4,
    label: 'Familiar',
    sublabel: '≥2 correct',
    active: false,
    onClick: () => {},
  },
} as Meta<typeof WordReadinessStat>;

type Story = StoryObj<typeof WordReadinessStat>;

export const Default: Story = {};

export const Active: Story = {
  args: { active: true },
};

export const SeedPlanted: Story = {
  name: 'Seed planted',
  args: { count: 6, label: 'Seed planted', sublabel: 'introduced', active: false },
};

export const TestReady: Story = {
  name: 'Test-ready',
  args: { count: 2, label: 'Test-ready', sublabel: '≥4 correct', active: false },
};

export const AllThree: Story = {
  name: 'All three tiers',
  render: () => (
    <div className="grid grid-cols-3 gap-10">
      <WordReadinessStat count={6} label="Seed planted" sublabel="introduced" active={false} onClick={() => {}} />
      <WordReadinessStat count={4} label="Familiar"     sublabel="≥2 correct" active={true}  onClick={() => {}} />
      <WordReadinessStat count={2} label="Test-ready"   sublabel="≥4 correct" active={false} onClick={() => {}} />
    </div>
  ),
};
