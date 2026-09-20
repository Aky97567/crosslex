import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const verfuegbar: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'verfügbar',
        article: null,
        translation: 'available',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Able to be used or obtained; ready for use.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'verfügbar'?",
          options: [
            { text: 'available', isCorrect: true },
            { text: 'unavailable', isCorrect: false },
            { text: 'expensive', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Der Termin ist leider nicht mehr {{verfügbar}}.',
          'Sind noch Plätze {{verfügbar}}?',
          'Das Produkt ist wieder {{verfügbar}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'verfügen' (to dispose of, have at one's disposal) + '-bar' (able to be) — literally 'able to be disposed of', i.e. at hand.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'erhältlich',
            article: null,
            translation: 'obtainable',
            similarityScore: 4,
            level: ['B1'],
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
              "'Verfügbar' contains 'verfügen' (to have at one's disposal) — if it's verfügbar, it's at your disposal.",
          },
          {
            id: 2,
            content:
              "Think of something 'figuring' into your available options — verfügbar.",
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
