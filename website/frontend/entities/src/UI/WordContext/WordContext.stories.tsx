import { Meta, StoryObj } from '@storybook/react';
import { WordContextModule } from '@whitelotus/common-crosslex-view';
import { sampleLearnPageContentList } from '@whitelotus/mock-test';
import { WordContext } from './WordContext';

const getCtx = (key: keyof typeof sampleLearnPageContentList) => {
  const modules = sampleLearnPageContentList[key].content.modules;
  return modules.find((m) => m.moduleType === 'wordContext') as WordContextModule;
};

const schreibenCtx = getCtx('schreiben');
const anerkenungCtx = getCtx('anerkennung');
const nachweisenCtx = getCtx('nachweisen');

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
    paragraphWithUsage: schreibenCtx.paragraphWithUsage,
  },
};

export const LongerParagraph: StoryObj<typeof WordContext> = {
  args: {
    paragraphWithUsage: anerkenungCtx.paragraphWithUsage,
  },
};

export const Trennbar: StoryObj<typeof WordContext> = {
  args: {
    paragraphWithUsage: nachweisenCtx.paragraphWithUsage,
  },
};
