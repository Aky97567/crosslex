import { Meta, StoryObj } from '@storybook/react';
import { WordShowcaseModule } from '@whitelotus/common-crosslex-view';
import { sampleLearnPageContentList } from '@whitelotus/mock-test';
import { WordShowcase } from './WordShowcase';

const getShowcase = (key: keyof typeof sampleLearnPageContentList) =>
  sampleLearnPageContentList[key].content.modules.find(
    (m) => m.moduleType === 'wordShowcase',
  ) as WordShowcaseModule;

export default {
  title: 'Entities/WordShowcase',
  component: WordShowcase,
  args: {
    heading: { level: 'h2', text: 'Word Showcase' },
    showContent: true,
  },
} as Meta<typeof WordShowcase>;

export const WithUrl: StoryObj<typeof WordShowcase> = {
  args: {
    wordShowcaseUrl: 'https://example.com/showcase',
  },
};

export const NoUrl: StoryObj<typeof WordShowcase> = {
  args: {
    wordShowcaseUrl: getShowcase('wohnung').wordShowcaseUrl,
  },
};
