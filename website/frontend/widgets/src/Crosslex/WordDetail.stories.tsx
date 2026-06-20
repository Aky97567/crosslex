import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { WordDetail } from './WordDetail';
import { HasContent } from '@whitelotus/common-crosslex-view';
import {
  SampleContentKey,
  sampleLearnPageContentList,
  Words,
} from '@whitelotus/mock-test';
import {
  CrosslexStorageProvider,
  createMemoryAdapter,
} from '@whitelotus/front-features';

const emptyAdapter = createMemoryAdapter({
  exerciseLog: [],
  streak: null,
  activeLevel: 'b1',
});

type WordDetailWrapperProps = {
  selectedWord: SampleContentKey;
};

const WordDetailWrapper: React.FC<WordDetailWrapperProps> = ({
  selectedWord,
}) => {
  const content = sampleLearnPageContentList[selectedWord];

  const learnPageProps: HasContent = {
    content: content.content,
  };

  return (
    <CrosslexStorageProvider adapter={emptyAdapter}>
      <WordDetail {...learnPageProps} />
    </CrosslexStorageProvider>
  );
};

export default {
  title: 'Widgets/WordDetail',
  component: WordDetailWrapper,
  argTypes: {
    selectedWord: {
      control: {
        type: 'select',
      },
      options: Words,
      description: 'Select a word to display the corresponding content.',
    },
  },
} as Meta<typeof WordDetailWrapper>;

const Template: StoryFn<typeof WordDetailWrapper> = args => (
  <WordDetailWrapper {...args} />
);

export const Primary: StoryObj<typeof WordDetailWrapper> = Template.bind({});
Primary.args = {
  selectedWord: 'erfahrung',
};

export const LongWord: StoryObj<typeof WordDetailWrapper> = Template.bind({});
LongWord.args = {
  selectedWord: 'haftpflichtversicherung',
};
LongWord.storyName = 'Haftpflichtversicherung (longest word)';
