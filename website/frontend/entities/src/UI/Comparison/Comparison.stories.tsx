import { Meta, StoryObj } from '@storybook/react';
import { ComparisonModule } from '@whitelotus/common-crosslex-view';
import { sampleLearnPageContentList } from '@whitelotus/mock-test';
import { Comparison } from './Comparison';

const getComparison = (key: keyof typeof sampleLearnPageContentList) => {
  const modules = sampleLearnPageContentList[key].content.modules;
  return modules.find((m) => m.moduleType === 'comparison') as ComparisonModule;
};

const altComparison = getComparison('alt');
const gutComparison = getComparison('gut');
const einfachComparison = getComparison('einfach');

export default {
  title: 'Entities/Comparison',
  component: Comparison,
  args: {
    heading: { level: 'h2', text: 'Comparison' },
    showContent: true,
  },
} as Meta<typeof Comparison>;

// Umlaut-adding irregular comparative/superlative (alt -> älter -> am
// ältesten / der älteste).
export const Irregular: StoryObj<typeof Comparison> = {
  args: {
    comparativeSentence: altComparison.comparativeSentence,
    superlativeSentence: altComparison.superlativeSentence,
    superlativeAttributiveSentence: altComparison.superlativeAttributiveSentence,
  },
};

// Fully suppletive comparative/superlative (gut -> besser -> am
// besten / der beste).
export const Suppletive: StoryObj<typeof Comparison> = {
  args: {
    comparativeSentence: gutComparison.comparativeSentence,
    superlativeSentence: gutComparison.superlativeSentence,
    superlativeAttributiveSentence: gutComparison.superlativeAttributiveSentence,
  },
};

// Regular -er / -(e)sten comparison (einfach -> einfacher -> am
// einfachsten / die einfachste).
export const Regular: StoryObj<typeof Comparison> = {
  args: {
    comparativeSentence: einfachComparison.comparativeSentence,
    superlativeSentence: einfachComparison.superlativeSentence,
    superlativeAttributiveSentence: einfachComparison.superlativeAttributiveSentence,
  },
};
