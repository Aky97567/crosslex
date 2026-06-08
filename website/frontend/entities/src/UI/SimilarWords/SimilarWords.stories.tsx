import { Meta, StoryObj } from '@storybook/react';
import { SimilarWords } from './SimilarWords';

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
    similarWords: [
      { word: 'Klinik',   article: 'die', translation: 'clinic, hospital',              similarityScore: 5, level: ['B1'], cefrRelevant: true },
      { word: 'Spital',   article: 'das', translation: 'hospital (Austria/Switzerland)', similarityScore: 4, level: ['B1'], cefrRelevant: true },
    ],
  },
};

export const Verbs: StoryObj<typeof SimilarWords> = {
  args: {
    similarWords: [
      { word: 'reden',          article: null, translation: 'to talk',           similarityScore: 5, level: ['A2'], cefrRelevant: true },
      { word: 'sich unterhalten', article: null, translation: 'to converse',      similarityScore: 4, level: ['A2'], cefrRelevant: true },
      { word: 'plaudern',       article: null, translation: 'to chat',           similarityScore: 3, level: ['A2'], cefrRelevant: true },
    ],
  },
};

export const MixedScores: StoryObj<typeof SimilarWords> = {
  args: {
    similarWords: [
      { word: 'Vergütung',      article: 'die', translation: 'remuneration, pay', similarityScore: 4, level: ['B1'], cefrRelevant: true },
      { word: 'Lohn',           article: 'der', translation: 'wage',              similarityScore: 4, level: ['B1'], cefrRelevant: true },
      { word: 'Einkommen',      article: 'das', translation: 'income',            similarityScore: 3, level: ['B1'], cefrRelevant: true },
    ],
  },
};
