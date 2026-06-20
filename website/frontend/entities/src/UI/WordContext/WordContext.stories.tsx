import { Meta, StoryObj } from '@storybook/react';
import { WordContextModule, WordIntroModule } from '@whitelotus/common-crosslex-view';
import { sampleLearnPageContentList } from '@whitelotus/mock-test';
import { WordContext } from './WordContext';

const getModules = (key: keyof typeof sampleLearnPageContentList) => {
  const modules = sampleLearnPageContentList[key].content.modules;
  const ctx = modules.find((m) => m.moduleType === 'wordContext') as WordContextModule;
  const intro = modules.find((m) => m.moduleType === 'wordIntro') as WordIntroModule;
  return { ctx, intro };
};

const buildHighlightTokens = (intro: WordIntroModule, ctx: WordContextModule) => [
  intro.word,
  ...(ctx.alternateForms ?? []),
  ...(ctx.trennbarTokens ?? []),
];

const { ctx: schreibenCtx } = getModules('schreiben');
const { ctx: anerkenungCtx } = getModules('anerkennung');
const { ctx: nachweisenCtx, intro: nachweisenIntro } = getModules('nachweisen');

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
    highlightTokens: buildHighlightTokens(nachweisenIntro, nachweisenCtx),
  },
};
