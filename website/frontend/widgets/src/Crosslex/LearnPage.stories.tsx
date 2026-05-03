import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { LearnPage } from './LearnPage';
import { HasContent } from '@whitelotus/common-crosslex-view';
import {
  SampleContentKey,
  sampleLearnPageContentList,
  Words,
} from '@whitelotus/mock-test';

type LearnPageWrapperProps = {
  selectedWord: SampleContentKey;
};

const LearnPageWrapper: React.FC<LearnPageWrapperProps> = ({
  selectedWord,
}) => {
  const content = sampleLearnPageContentList[selectedWord];

  const learnPageProps: HasContent = {
    content: content.content,
  };

  return <LearnPage {...learnPageProps} />;
};

export default {
  title: 'Pages/LearnPage',
  component: LearnPageWrapper,
  argTypes: {
    selectedWord: {
      control: {
        type: 'select',
      },
      options: Words,
      description: 'Select a word to display the corresponding content.',
    },
  },
} as Meta<typeof LearnPageWrapper>;

const Template: StoryFn<typeof LearnPageWrapper> = args => (
  <LearnPageWrapper {...args} />
);

export const Primary: StoryObj<typeof LearnPageWrapper> = Template.bind({});
Primary.args = {
  selectedWord: 'erfahrung',
};
