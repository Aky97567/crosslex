import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { contextBlankStoryFixtures } from '@whitelotus/mock-test';
import { ContextBlankQuestion } from './ContextBlankQuestion';

const EXERCISES = contextBlankStoryFixtures;

type WrapperProps = {
  word: keyof typeof EXERCISES;
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
  title: 'Entities/exercises/ContextBlankQuestion',
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
Default.args = { word: 'beantragen' };

export const Perfekt: StoryObj<typeof Wrapper> = Template.bind({});
Perfekt.args = { word: 'kaufen' };

export const StrongVerb: StoryObj<typeof Wrapper> = Template.bind({});
StrongVerb.args = { word: 'schreiben' };
