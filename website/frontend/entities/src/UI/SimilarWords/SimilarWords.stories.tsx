import { Meta, StoryObj } from '@storybook/react';
import { SimilarWordsModule } from '@whitelotus/common-crosslex-view';
import { sampleLearnPageContentList } from '@whitelotus/mock-test';
import { SimilarWords } from './SimilarWords';

const getSimilarWords = (key: keyof typeof sampleLearnPageContentList) =>
  (
    sampleLearnPageContentList[key].content.modules.find(
      (m) => m.moduleType === 'similarWords',
    ) as SimilarWordsModule
  ).similarWords;

export default {
  title: 'Entities/SimilarWords',
  component: SimilarWords,
  args: {
    heading: { level: 'h2', text: 'Similar Words' },
    showContent: true,
  },
} as Meta<typeof SimilarWords>;

export const Nouns: StoryObj<typeof SimilarWords> = {
  args: {
    similarWords: getSimilarWords('krankenhaus'),
  },
};

export const Verbs: StoryObj<typeof SimilarWords> = {
  args: {
    similarWords: getSimilarWords('sprechen'),
  },
};

export const MixedScores: StoryObj<typeof SimilarWords> = {
  args: {
    similarWords: getSimilarWords('gehalt'),
  },
};
