import { Meta, StoryObj } from '@storybook/react';
import { Etymology } from './Etymology';

export default {
  title: 'Entities/Etymology',
  component: Etymology,
  args: {
    heading: { level: 'h2', text: 'Etymology' },
    showContent: true,
  },
} as Meta<typeof Etymology>;

export const Default: StoryObj<typeof Etymology> = {
  args: {
    etymology:
      "From Old High German 'arabeiten' (to labour, to toil). Related to the English word 'effort' through a shared sense of strenuous activity.",
  },
};

export const LatinRoot: StoryObj<typeof Etymology> = {
  args: {
    etymology:
      "From Latin 'familia' (household, servants). The same root gives us 'family' in English and 'familia' in Spanish.",
  },
};
