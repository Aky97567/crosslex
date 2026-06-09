import { Meta, StoryObj } from '@storybook/react';
import { KnownWordDialog } from './KnownWordDialog';

export default {
  title: 'Entities/KnownWordDialog',
  component: KnownWordDialog,
  parameters: { layout: 'fullscreen' },
  args: {
    onConfirm: () => {},
    onCancel: () => {},
  },
} as Meta<typeof KnownWordDialog>;

type Story = StoryObj<typeof KnownWordDialog>;

export const Default: Story = {
  name: 'Default',
};
