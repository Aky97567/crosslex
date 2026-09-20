import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const versprechen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'versprechen',
        article: null,
        translation: 'to promise',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'irregular'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To say firmly that you will definitely do something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'versprechen'?",
          options: [
            { text: 'to promise', isCorrect: true },
            { text: 'to refuse', isCorrect: false },
            { text: 'to forget', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{verspreche}} dir, pünktlich zu sein.',
          'Er {{verspricht}} immer viel und hält wenig.',
          'Sie hat mir ihre Hilfe {{versprochen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ver-' (a prefix indicating a formal act) + 'sprechen' (to speak) — literally 'to speak formally' and commit to it.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'zusichern',
            article: null,
            translation: 'to assure, guarantee (formal)',
            similarityScore: 3,
            level: ['B1'],
            register: 'formal',
            cefrRelevant: true,
          },
        ],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Versprechen' contains 'sprechen' (to speak) — a promise is a formal thing you speak.",
          },
          {
            id: 2,
            content: "Think of speaking words you must keep — versprechen.",
          },
        ],
      },
      {
        moduleType: 'wordShowcase',
        heading: { text: 'Word Showcase' },
      },
    ],
  },
};
