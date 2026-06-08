import { Meta, StoryObj } from '@storybook/react';
import { WordShowcase } from './WordShowcase';

export default {
  title: 'Entities/WordShowcase',
  component: WordShowcase,
  args: {
    heading: { level: 'h2', text: 'Word Showcase' },
    showContent: true,
  },
} as Meta<typeof WordShowcase>;

export const WithUrl: StoryObj<typeof WordShowcase> = {
  args: {
    wordShowcaseUrl: 'https://example.com/showcase',
  },
};

export const NoUrl: StoryObj<typeof WordShowcase> = {
  args: {
    wordShowcaseUrl: undefined,
  },
};
