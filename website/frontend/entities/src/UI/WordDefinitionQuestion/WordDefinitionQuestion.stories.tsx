import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { wordDefinitionStoryFixtures } from '@whitelotus/mock-test';
import { WordDefinitionQuestion } from './WordDefinitionQuestion';

const EXERCISES = wordDefinitionStoryFixtures;

type WrapperProps = {
  word: keyof typeof EXERCISES;
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
  title: 'Entities/exercises/WordDefinitionQuestion',
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
Default.args = { word: 'erfahrung' };

export const ShortDeadline: StoryObj<typeof Wrapper> = Template.bind({});
ShortDeadline.args = { word: 'frist' };

export const Verb: StoryObj<typeof Wrapper> = Template.bind({});
Verb.args = { word: 'beantragen' };
