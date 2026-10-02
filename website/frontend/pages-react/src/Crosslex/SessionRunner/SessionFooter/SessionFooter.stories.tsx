import { Meta, StoryObj } from '@storybook/react';
import { AUTO_ADVANCE_MAX_SECONDS } from '@whitelotus/front-features';
import { SessionFooter } from './SessionFooter';

const noMark = { hasBeenDismissed: true, dismiss: () => {} };
const shownMark = { hasBeenDismissed: false, dismiss: () => {} };

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
  argTypes: {
    autoAdvanceCorrectSeconds: {
      control: { type: 'number', min: 0, max: AUTO_ADVANCE_MAX_SECONDS, step: 1 },
      description: 'Seconds before the auto-advance dialog fires on a correct answer. 0 = off.',
    },
    autoAdvanceWrongSeconds: {
      control: { type: 'number', min: 0, max: AUTO_ADVANCE_MAX_SECONDS, step: 1 },
      description: 'Seconds before the auto-advance dialog fires on a wrong answer. 0 = off.',
    },
  },
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

export const AnsweredCorrectWithAutoAdvanceDialog: Story = {
  name: 'Exercise — answered correctly, auto-advance dialog showing',
  args: {
    ...base,
    cardType: 'meaningGuess',
    answered: true,
    isReviewing: false,
    isWordIntroCard: false,
    isExerciseCard: false,
    autoAdvanceCorrectSeconds: 4,
    autoAdvanceWrongSeconds: 8,
  },
};

export const AnsweredWrongWithAutoAdvanceDialog: Story = {
  name: 'Exercise — answered wrong, auto-advance dialog showing',
  args: {
    ...base,
    cardType: 'meaningGuess',
    answered: false,
    isReviewing: false,
    isWordIntroCard: false,
    isExerciseCard: false,
    autoAdvanceCorrectSeconds: 4,
    autoAdvanceWrongSeconds: 8,
  },
};

export const AnsweredWrongAutoAdvanceSuppressedByCoachMark: Story = {
  name: 'Exercise — answered wrong, auto-advance dialog suppressed by coach mark',
  args: {
    ...base,
    cardType: 'meaningGuess',
    answered: false,
    isReviewing: false,
    isWordIntroCard: false,
    isExerciseCard: false,
    autoAdvanceCorrectSeconds: 4,
    autoAdvanceWrongSeconds: 8,
    wrongMark: shownMark,
  },
};
