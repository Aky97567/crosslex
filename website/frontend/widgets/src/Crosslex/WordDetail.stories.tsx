import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { WordDetail } from './WordDetail';
import { HasContent } from '@whitelotus/common-crosslex-view';
import {
  SampleContentKey,
  sampleLearnPageContentList,
  Words,
} from '@whitelotus/mock-test';

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

  return <WordDetail {...learnPageProps} />;
};

export default {
  title: 'Pages/WordDetail',
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
