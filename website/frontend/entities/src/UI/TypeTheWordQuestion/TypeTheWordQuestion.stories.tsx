import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { WordIntroModule } from '@whitelotus/common-crosslex-view';
import { sampleLearnPageContentList } from '@whitelotus/mock-test';
import { TypeTheWordQuestion, TypeTheWordQuestionData } from './TypeTheWordQuestion';

const WORD_KEYS = ['wohnung', 'krankenversicherung', 'arbeiten'] as const;

const getTypeTheWord = (key: (typeof WORD_KEYS)[number]): TypeTheWordQuestionData => {
  const intro = sampleLearnPageContentList[key].content.modules.find(
    (m) => m.moduleType === 'wordIntro',
  ) as WordIntroModule;
  return { word: intro.word, article: intro.article ?? undefined, translation: intro.translation };
};

type WrapperProps = { word: (typeof WORD_KEYS)[number] };

const Wrapper: React.FC<WrapperProps> = ({ word }) => {
  localStorage.removeItem('crosslex:hardcore_mode');
  return (
    <div className="max-w-4xl mx-auto p-20">
      <TypeTheWordQuestion
        key={word}
        heading={{ level: 'h2', text: 'Type the word' }}
        typeTheWordQuestion={getTypeTheWord(word)}
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
        typeTheWordQuestion={getTypeTheWord(word)}
      />
    </div>
  );
};

export default {
  title: 'Entities/exercises/TypeTheWordQuestion',
  component: Wrapper,
  argTypes: {
    word: {
      control: { type: 'select' },
      options: WORD_KEYS,
      description: 'Select a word to display the corresponding exercise.',
    },
  },
} as Meta<typeof Wrapper>;

const Template: StoryFn<typeof Wrapper> = (args) => <Wrapper {...args} />;

export const Default: StoryObj<typeof Wrapper> = Template.bind({});
Default.args = { word: 'wohnung' };

export const LongWord: StoryObj<typeof Wrapper> = Template.bind({});
LongWord.args = { word: 'krankenversicherung' };

export const Verb: StoryObj<typeof Wrapper> = Template.bind({});
Verb.args = { word: 'arbeiten' };

const HardcoreTemplate: StoryFn<typeof HardcoreWrapper> = (args) => <HardcoreWrapper {...args} />;

export const HardcoreMode: StoryObj<typeof HardcoreWrapper> = HardcoreTemplate.bind({});
HardcoreMode.args = { word: 'wohnung' };
HardcoreMode.storyName = 'Hardcore mode (no hints)';
