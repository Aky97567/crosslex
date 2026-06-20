import { Meta, StoryObj } from '@storybook/react';
import { WordMeaningModule } from '@whitelotus/common-crosslex-view';
import { sampleLearnPageContentList } from '@whitelotus/mock-test';
import { WordMeaning } from './WordMeaning';

const getMeaning = (key: keyof typeof sampleLearnPageContentList) =>
  (
    sampleLearnPageContentList[key].content.modules.find(
      (m) => m.moduleType === 'wordMeaning',
    ) as WordMeaningModule
  ).meaning;

export default {
  title: 'Entities/WordMeaning',
  component: WordMeaning,
  args: {
    heading: { level: 'h2', text: 'Meaning' },
    showContent: true,
  },
} as Meta<typeof WordMeaning>;

export const Default: StoryObj<typeof WordMeaning> = {
  args: {
    meaning: getMeaning('anmeldung'),
  },
};

export const Short: StoryObj<typeof WordMeaning> = {
  args: {
    meaning: getMeaning('auto'),
  },
};
