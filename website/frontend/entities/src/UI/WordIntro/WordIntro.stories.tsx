import { Meta, StoryObj } from '@storybook/react';
import { WordIntro } from './WordIntro';

export default {
  title: 'Entities/WordIntro',
  component: WordIntro,
} as Meta<typeof WordIntro>;

export const Noun: StoryObj<typeof WordIntro> = {
  args: {
    word: 'die Wohnung',
    translation: 'apartment, flat',
    partOfSpeech: 'noun',
  },
};

export const Verb: StoryObj<typeof WordIntro> = {
  args: {
    word: 'arbeiten',
    translation: 'to work',
    partOfSpeech: 'verb',
  },
};

export const Adjective: StoryObj<typeof WordIntro> = {
  args: {
    word: 'pünktlich',
    translation: 'punctual, on time',
    partOfSpeech: 'adjective',
  },
};
