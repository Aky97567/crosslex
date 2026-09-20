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
    positivPredicativ: altComparison.positivPredicativ,
    positivAttributiv: altComparison.positivAttributiv,
    komparativPredicativ: altComparison.komparativPredicativ,
    komparativAttributiv: altComparison.komparativAttributiv,
    superlativPredicativ: altComparison.superlativPredicativ,
    superlativAttributiv: altComparison.superlativAttributiv,
  },
};

// Fully suppletive comparative/superlative (gut -> besser -> am
// besten / der beste).
export const Suppletive: StoryObj<typeof Comparison> = {
  args: {
    positivPredicativ: gutComparison.positivPredicativ,
    positivAttributiv: gutComparison.positivAttributiv,
    komparativPredicativ: gutComparison.komparativPredicativ,
    komparativAttributiv: gutComparison.komparativAttributiv,
    superlativPredicativ: gutComparison.superlativPredicativ,
    superlativAttributiv: gutComparison.superlativAttributiv,
  },
};

// Regular -er / -(e)sten comparison (einfach -> einfacher -> am
// einfachsten / die einfachste).
export const Regular: StoryObj<typeof Comparison> = {
  args: {
    positivPredicativ: einfachComparison.positivPredicativ,
    positivAttributiv: einfachComparison.positivAttributiv,
    komparativPredicativ: einfachComparison.komparativPredicativ,
    komparativAttributiv: einfachComparison.komparativAttributiv,
    superlativPredicativ: einfachComparison.superlativPredicativ,
    superlativAttributiv: einfachComparison.superlativAttributiv,
  },
};
