import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const gehoeren: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'gehören',
        article: null,
        translation: 'to belong to',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To be owned by someone, or to be a part of a group or category.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'gehören'?",
          options: [
            { text: 'to belong to', isCorrect: true },
            { text: 'to be borrowed from someone', isCorrect: false },
            { text: 'to be sold to someone', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Dieses Auto {{gehört}} meinem Vater.',
          'Wem {{gehört}} diese Tasche?',
          'Das Haus hat früher meiner Familie {{gehört}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Built from 'hören' (to hear) with the prefix 'ge-' — an old sense of belonging to what one listens to broadened over time to simple ownership.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No clean single-word synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Gehören' contains 'hören' (to hear) — think of belonging to a family you 'listen to' and are part of.",
          },
          {
            id: 2,
            content:
              "Picture pointing at an object and saying 'Das gehört mir!' — 'That belongs to me!'",
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
