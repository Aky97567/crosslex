import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import {
  ContextBlankQuestion,
  ContextBlankQuestionData,
} from './ContextBlankQuestion';

const EXERCISES: Record<string, ContextBlankQuestionData> = {
  erfahrung: {
    sentence:
      'Durch meine jahrelange ___ habe ich gelernt, wie man effizient arbeitet.',
    options: [
      { text: 'Erfahrung', isCorrect: true },
      { text: 'Unterlagen', isCorrect: false },
      { text: 'Frist', isCorrect: false },
    ],
  },
  beantragen: {
    sentence: 'Er muss den Führerschein bei der Behörde ___.',
    options: [
      { text: 'nachweisen', isCorrect: false },
      { text: 'beantragen', isCorrect: true },
      { text: 'uebertragen', isCorrect: false },
    ],
  },
  frist: {
    sentence:
      'Die ___ für die Abgabe der Steuererklärung läuft Ende des Monats ab.',
    options: [
      { text: 'Genehmigung', isCorrect: false },
      { text: 'Bescheinigung', isCorrect: false },
      { text: 'Frist', isCorrect: true },
    ],
  },
};

type WrapperProps = {
  word: string;
};

const Wrapper: React.FC<WrapperProps> = ({ word }) => (
  <div className="max-w-4xl mx-auto p-20">
    <ContextBlankQuestion
      heading={{ level: 'h2', text: 'Fill in the blank' }}
      contextBlankQuestion={EXERCISES[word]}
    />
  </div>
);

export default {
  title: 'Entities/ContextBlankQuestion',
  component: Wrapper,
  argTypes: {
    word: {
      control: { type: 'select' },
      options: Object.keys(EXERCISES),
      description: 'Select a word to display the corresponding exercise.',
    },
  },
} as Meta<typeof Wrapper>;

const Template: StoryFn<typeof Wrapper> = (args) => <Wrapper {...args} />;

export const Default: StoryObj<typeof Wrapper> = Template.bind({});
Default.args = {
  word: 'erfahrung',
};
