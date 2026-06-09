import { Meta, StoryObj } from '@storybook/react';
import { SessionFooter } from './SessionFooter';

const noMark = { shown: false, dismiss: () => {} };
const shownMark = { shown: true, dismiss: () => {} };

const base = {
  wordKey: 'kuendigung',
  onAdvance: () => {},
  onReviewWord: () => {},
  onEndSession: () => {},
  onAlreadyKnow: () => {},
  wordIntroMark: noMark,
  exerciseMark: noMark,
  wrongMark: noMark,
};

export default {
  title: 'Widgets/SessionRunner/SessionFooter',
  component: SessionFooter,
  parameters: { layout: 'fullscreen' },
} as Meta<typeof SessionFooter>;

type Story = StoryObj<typeof SessionFooter>;

export const WordIntroCard: Story = {
  name: 'Word intro — "Got it →" + "Already know it"',
  args: { ...base, cardType: 'wordIntro', answered: null, isReviewing: false, isWordIntroCard: true, isExerciseCard: false },
};

export const WordIntroCoachMark: Story = {
  name: 'Word intro — with coach mark',
  args: { ...base, cardType: 'wordIntro', answered: null, isReviewing: false, isWordIntroCard: true, isExerciseCard: false, wordIntroMark: shownMark },
};

export const ExerciseWaiting: Story = {
  name: 'Exercise — waiting for answer (no button)',
  args: { ...base, cardType: 'meaningGuess', answered: null, isReviewing: false, isWordIntroCard: false, isExerciseCard: true },
};

export const ExerciseWaitingCoachMark: Story = {
  name: 'Exercise — waiting with coach mark',
  args: { ...base, cardType: 'meaningGuess', answered: null, isReviewing: false, isWordIntroCard: false, isExerciseCard: true, exerciseMark: shownMark },
};

export const AnsweredCorrect: Story = {
  name: 'Exercise — answered correctly ("Next →")',
  args: { ...base, cardType: 'meaningGuess', answered: true, isReviewing: false, isWordIntroCard: false, isExerciseCard: false },
};

export const AnsweredWrong: Story = {
  name: 'Exercise — answered wrong ("Review word →")',
  args: { ...base, cardType: 'meaningGuess', answered: false, isReviewing: false, isWordIntroCard: false, isExerciseCard: false, wrongMark: shownMark },
};

export const ReviewMode: Story = {
  name: 'Review mode — "Got it →", no "Already know it"',
  args: { ...base, cardType: 'meaningGuess', answered: null, isReviewing: true, isWordIntroCard: false, isExerciseCard: false },
};
