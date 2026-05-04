import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import {
  WordDefinitionQuestion,
  WordDefinitionQuestionData,
} from './WordDefinitionQuestion';

const EXERCISES: Record<string, WordDefinitionQuestionData> = {
  erfahrung: {
    word: 'Erfahrung',
    article: 'die',
    options: [
      {
        text: 'Knowledge or skill gained from doing, seeing, or feeling things.',
        isCorrect: true,
      },
      {
        text: 'An official document that proves something is true.',
        isCorrect: false,
      },
      {
        text: 'A period of time within which something must be done.',
        isCorrect: false,
      },
      {
        text: 'The authority or responsibility to deal with something.',
        isCorrect: false,
      },
    ],
  },
  frist: {
    word: 'Frist',
    article: 'die',
    options: [
      {
        text: 'A period of time within which something must be done.',
        isCorrect: true,
      },
      {
        text: 'Knowledge or skill gained from doing, seeing, or feeling things.',
        isCorrect: false,
      },
      {
        text: 'Official permission granted by an authority.',
        isCorrect: false,
      },
      {
        text: 'Papers or files required for an official process.',
        isCorrect: false,
      },
    ],
  },
  beantragen: {
    word: 'beantragen',
    article: null,
    options: [
      {
        text: 'To formally apply for something from an authority.',
        isCorrect: true,
      },
      {
        text: 'To prove or demonstrate something with evidence.',
        isCorrect: false,
      },
      {
        text: 'To transfer data or responsibility to another party.',
        isCorrect: false,
      },
      {
        text: 'A period of time within which something must be done.',
        isCorrect: false,
      },
    ],
  },
};

type WrapperProps = {
  word: string;
};

const Wrapper: React.FC<WrapperProps> = ({ word }) => (
  <div className="max-w-4xl mx-auto p-20">
    <WordDefinitionQuestion
      heading={{ level: 'h2', text: 'What does this word mean?' }}
      wordDefinitionQuestion={EXERCISES[word]}
    />
  </div>
);

export default {
  title: 'Entities/WordDefinitionQuestion',
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
