import { Meta, StoryObj } from '@storybook/react';
import { MeaningGuessQuestion } from './MeaningGuessQuestion';

export default {
  title: 'Entities/MeaningGuessQuestion',
  component: MeaningGuessQuestion,
  args: {
    heading: { level: 'h2', text: 'Guess the Meaning' },
    showContent: true,
  },
} as Meta<typeof MeaningGuessQuestion>;

export const Default: StoryObj<typeof MeaningGuessQuestion> = {
  args: {
    meaningBestGuessQuestion: {
      question: "What is the best guess for the meaning of 'die Abmeldung'?",
      options: [
        { text: 'Registering a new address at the local office', isCorrect: false },
        { text: 'Formally deregistering your address when leaving', isCorrect: true },
        { text: 'Cancelling a gym or streaming subscription', isCorrect: false },
      ],
    },
  },
};

export const Verb: StoryObj<typeof MeaningGuessQuestion> = {
  args: {
    meaningBestGuessQuestion: {
      question: "What is the best guess for the meaning of 'beantragen'?",
      options: [
        { text: 'To refuse a request', isCorrect: false },
        { text: 'To submit a formal application for something', isCorrect: true },
        { text: 'To pay a fee', isCorrect: false },
      ],
    },
  },
};
