import { Meta, StoryObj } from '@storybook/react';
import { WordMeaning } from './WordMeaning';

export default {
  title: 'Entities/WordMeaning',
  component: WordMeaning,
  args: {
    heading: { level: 'h2', text: 'Meaning' },
    showContent: true,
  },
} as Meta<typeof WordMeaning>;

export const Default: StoryObj<typeof WordMeaning> = {
  args: {
    meaning:
      'The official registration of your address with the local authorities (Einwohnermeldeamt). In Germany, all residents must register within two weeks of moving to a new address.',
  },
};

export const Short: StoryObj<typeof WordMeaning> = {
  args: {
    meaning: 'A road vehicle with four wheels powered by an engine.',
  },
};
