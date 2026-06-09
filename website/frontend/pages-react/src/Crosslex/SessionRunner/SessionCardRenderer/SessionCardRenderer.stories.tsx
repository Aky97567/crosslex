import { Meta, StoryObj } from '@storybook/react';
import { sampleLearnPageContentList, A2Words } from '@whitelotus/mock-test';
import { generateExerciseDataSafe } from '@whitelotus/front-features';
import { SessionCardRenderer } from './SessionCardRenderer';

const kuendigung = sampleLearnPageContentList['kuendigung'].content;
const konto = sampleLearnPageContentList['konto'].content;

export default {
  title: 'Widgets/SessionRunner/SessionCardRenderer',
  component: SessionCardRenderer,
  parameters: { layout: 'padded' },
  args: {
    reviewContent: null,
    reviewWordKey: null,
    onAnswer: () => {},
  },
} as Meta<typeof SessionCardRenderer>;

type Story = StoryObj<typeof SessionCardRenderer>;

export const WordIntro: Story = {
  name: 'Word intro',
  args: {
    runner: { cardKey: 0, wordKey: 'kuendigung', cardType: 'wordIntro', exerciseData: null, lastIntroducedWordKey: 'kuendigung', exercisesSinceLastIntro: 0, cardsDone: 0, correctCount: 0, wordsNew: 1, wordsReviewed: 0 },
    wordContent: kuendigung,
  },
};

export const ReviewMode: Story = {
  name: 'Review mode (learn page)',
  args: {
    runner: { cardKey: 1, wordKey: 'kuendigung', cardType: 'meaningGuess', exerciseData: null, lastIntroducedWordKey: 'kuendigung', exercisesSinceLastIntro: 1, cardsDone: 0, correctCount: 0, wordsNew: 1, wordsReviewed: 1 },
    wordContent: undefined,
    reviewContent: kuendigung,
    reviewWordKey: 'kuendigung',
  },
};

export const MeaningGuess: Story = {
  name: 'Meaning guess exercise',
  args: {
    runner: {
      cardKey: 1,
      wordKey: 'konto',
      cardType: 'meaningGuess',
      exerciseData: generateExerciseDataSafe('konto', 'meaningGuess', A2Words, sampleLearnPageContentList),
      lastIntroducedWordKey: 'konto',
      exercisesSinceLastIntro: 1,
      cardsDone: 0, correctCount: 0, wordsNew: 1, wordsReviewed: 1,
    },
    wordContent: konto,
  },
};

export const ContextBlank: Story = {
  name: 'Context blank exercise',
  args: {
    runner: {
      cardKey: 2,
      wordKey: 'konto',
      cardType: 'contextBlank',
      exerciseData: generateExerciseDataSafe('konto', 'contextBlank', A2Words, sampleLearnPageContentList),
      lastIntroducedWordKey: 'konto',
      exercisesSinceLastIntro: 1,
      cardsDone: 1, correctCount: 1, wordsNew: 1, wordsReviewed: 1,
    },
    wordContent: konto,
  },
};
