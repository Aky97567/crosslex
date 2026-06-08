import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { TypeTheWordQuestion, TypeTheWordQuestionData } from './TypeTheWordQuestion';

const EXERCISES: Record<string, TypeTheWordQuestionData> = {
  wohnung: {
    word: 'Wohnung',
    article: 'die',
    translation: 'apartment, flat',
  },
  krankenversicherung: {
    word: 'Krankenversicherung',
    article: 'die',
    translation: 'health insurance',
  },
  arbeiten: {
    word: 'arbeiten',
    translation: 'to work',
  },
};

type WrapperProps = {
  word: string;
};

const Wrapper: React.FC<WrapperProps> = ({ word }) => {
  localStorage.removeItem('crosslex:hardcore_mode');
  return (
    <div className="max-w-4xl mx-auto p-20">
      <TypeTheWordQuestion
        key={word}
        heading={{ level: 'h2', text: 'Type the word' }}
        typeTheWordQuestion={EXERCISES[word]}
      />
    </div>
  );
};

const HardcoreWrapper: React.FC<WrapperProps> = ({ word }) => {
  localStorage.setItem('crosslex:hardcore_mode', 'true');
  return (
    <div className="max-w-4xl mx-auto p-20">
      <TypeTheWordQuestion
        key={word}
        heading={{ level: 'h2', text: 'Type the word' }}
        typeTheWordQuestion={EXERCISES[word]}
      />
    </div>
  );
};

export default {
  title: 'Entities/TypeTheWordQuestion',
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
  word: 'wohnung',
};

export const LongWord: StoryObj<typeof Wrapper> = Template.bind({});
LongWord.args = {
  word: 'krankenversicherung',
};

export const Verb: StoryObj<typeof Wrapper> = Template.bind({});
Verb.args = {
  word: 'arbeiten',
};

const HardcoreTemplate: StoryFn<typeof HardcoreWrapper> = (args) => <HardcoreWrapper {...args} />;

export const HardcoreMode: StoryObj<typeof HardcoreWrapper> = HardcoreTemplate.bind({});
HardcoreMode.args = {
  word: 'wohnung',
};
HardcoreMode.storyName = 'Hardcore mode (no hints)';
