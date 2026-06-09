import { Meta, StoryObj } from '@storybook/react';
import { WordMetricsPanel } from './WordMetricsPanel';

export default {
  title: 'Widgets/WordMetricsPanel',
  component: WordMetricsPanel,
  parameters: { layout: 'padded' },
} as Meta<typeof WordMetricsPanel>;

export const Default: StoryObj<typeof WordMetricsPanel> = {
  args: {},
  name: 'Default (reads from localStorage)',
};
