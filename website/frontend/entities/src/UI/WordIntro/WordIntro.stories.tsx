import { Meta, StoryObj } from '@storybook/react';
import { WordIntroModule } from '@whitelotus/common-crosslex-view';
import { sampleLearnPageContentList } from '@whitelotus/mock-test';
import { WordIntro } from './WordIntro';

const getIntro = (key: keyof typeof sampleLearnPageContentList) =>
  sampleLearnPageContentList[key].content.modules.find(
    (m) => m.moduleType === 'wordIntro',
  ) as WordIntroModule;

const wohnung = getIntro('wohnung');
const arbeiten = getIntro('arbeiten');
const puenktlich = getIntro('puenktlich');
const nachweisen = getIntro('nachweisen');

export default {
  title: 'Entities/WordIntro',
  component: WordIntro,
} as Meta<typeof WordIntro>;

export const Noun: StoryObj<typeof WordIntro> = {
  args: {
    word: wohnung.word,
    article: wohnung.article,
    translation: wohnung.translation,
    partOfSpeech: wohnung.partOfSpeech,
  },
};

export const Verb: StoryObj<typeof WordIntro> = {
  args: {
    word: arbeiten.word,
    article: arbeiten.article,
    translation: arbeiten.translation,
    partOfSpeech: arbeiten.partOfSpeech,
  },
};

export const Adjective: StoryObj<typeof WordIntro> = {
  args: {
    word: puenktlich.word,
    article: puenktlich.article,
    translation: puenktlich.translation,
    partOfSpeech: puenktlich.partOfSpeech,
  },
};

export const Trennbar: StoryObj<typeof WordIntro> = {
  args: {
    word: nachweisen.word,
    article: nachweisen.article,
    translation: nachweisen.translation,
    partOfSpeech: nachweisen.partOfSpeech,
    trennbar: true,
  },
};
