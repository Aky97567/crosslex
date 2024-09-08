import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { LearnPage } from './LearnPage';
import {
  SampleContentKey,
  sampleLearnPageContentList,
  Words,
} from '@whitelotus/mock-test';

type LearnPageWrapperProps = {
  selectedWord: SampleContentKey;
};

const LearnPageWrapper = (props: LearnPageWrapperProps) => {
  const { selectedWord } = props;
  const content = { content: sampleLearnPageContentList[selectedWord] };

  return <LearnPage {...content} />;
};

export default {
  title: 'Pages/LearnPage',
  component: LearnPageWrapper,
  argTypes: {
    selectedWord: {
      control: {
        name: 'Selected Word',
        type: 'select',
      },
      defaultValue: 'erfahrung',
      options: Words,
      description: 'Select a word to display the corresponding content.',
    },
  },
} as Meta;

const Template: StoryFn<{ selectedWord: SampleContentKey }> = args => (
  <LearnPageWrapper {...args} />
);

export const Primary: StoryObj<{ selectedWord: SampleContentKey }> =
  Template.bind({});
Primary.args = {
  selectedWord: 'erfahrung',
};
