import { Meta, StoryObj } from '@storybook/react';
import { WordContextModule } from '@whitelotus/common-crosslex-view';
import { sampleLearnPageContentList } from '@whitelotus/mock-test';
import { WordContext } from './WordContext';

const getParagraph = (key: keyof typeof sampleLearnPageContentList) =>
  (
    sampleLearnPageContentList[key].content.modules.find(
      (m) => m.moduleType === 'wordContext',
    ) as WordContextModule
  ).paragraphWithUsage;

export default {
  title: 'Entities/WordContext',
  component: WordContext,
  args: {
    heading: { level: 'h2', text: 'Context' },
    showContent: true,
  },
} as Meta<typeof WordContext>;

export const Default: StoryObj<typeof WordContext> = {
  args: {
    paragraphWithUsage: getParagraph('schreiben'),
  },
};

export const LongerParagraph: StoryObj<typeof WordContext> = {
  args: {
    paragraphWithUsage: getParagraph('anerkennung'),
  },
};
