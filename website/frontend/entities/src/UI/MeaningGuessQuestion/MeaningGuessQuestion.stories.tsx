import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { MeaningGuessQuestionModule } from '@whitelotus/common-crosslex-view';
import { sampleLearnPageContentList } from '@whitelotus/mock-test';
import { MeaningGuessQuestion } from './MeaningGuessQuestion';

const WORD_KEYS = ['abmeldung', 'beantragen'] as const;

const getMeaningGuess = (key: (typeof WORD_KEYS)[number]) =>
  (
    sampleLearnPageContentList[key].content.modules.find(
      (m) => m.moduleType === 'meaningGuessQuestion',
    ) as MeaningGuessQuestionModule
  ).meaningBestGuessQuestion;

type WrapperProps = { word: (typeof WORD_KEYS)[number] };

const Wrapper: React.FC<WrapperProps> = ({ word }) => (
  <div className="max-w-4xl mx-auto p-20">
    <MeaningGuessQuestion
      key={word}
      heading={{ level: 'h2', text: 'Guess the Meaning' }}
      meaningBestGuessQuestion={getMeaningGuess(word)}
    />
  </div>
);

export default {
  title: 'Entities/exercises/MeaningGuessQuestion',
  component: Wrapper,
  argTypes: {
    word: {
      control: { type: 'select' },
      options: WORD_KEYS,
    },
  },
} as Meta<typeof Wrapper>;

const Template: StoryFn<typeof Wrapper> = (args) => <Wrapper {...args} />;

export const Default: StoryObj<typeof Wrapper> = Template.bind({});
Default.args = { word: 'abmeldung' };

export const Verb: StoryObj<typeof Wrapper> = Template.bind({});
Verb.args = { word: 'beantragen' };
