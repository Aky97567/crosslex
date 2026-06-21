import { Meta, StoryObj } from '@storybook/react';
import { BADGES } from '@whitelotus/front-shared';
import { BadgeIcon } from './BadgeIcon';

export default {
  title: 'Entities/BadgeIcon',
  component: BadgeIcon,
  parameters: { layout: 'centered' },
  argTypes: {
    days: {
      control: { type: 'select' },
      options: BADGES.map(b => b.days),
    },
  },
} as Meta<typeof BadgeIcon>;

type Story = StoryObj<typeof BadgeIcon>;

export const Earned: Story = {
  args: { earned: true, name: 'Flame', days: 7 },
};

export const Locked: Story = {
  args: { earned: false, name: 'Flame', days: 7 },
};

export const AllBadges: Story = {
  name: 'All badges — earned',
  render: () => (
    <div className="flex flex-wrap gap-20 justify-center">
      {BADGES.map(b => (
        <BadgeIcon key={b.days} earned days={b.days} name={b.name} />
      ))}
    </div>
  ),
};

export const AllBadgesLocked: Story = {
  name: 'All badges — locked',
  render: () => (
    <div className="flex flex-wrap gap-20 justify-center">
      {BADGES.map(b => (
        <BadgeIcon key={b.days} earned={false} days={b.days} name={b.name} />
      ))}
    </div>
  ),
};

export const MixedState: Story = {
  name: 'Mixed — first 3 earned',
  render: () => (
    <div className="flex flex-wrap gap-20 justify-center">
      {BADGES.map((b, i) => (
        <BadgeIcon key={b.days} earned={i < 3} days={b.days} name={b.name} />
      ))}
    </div>
  ),
};
