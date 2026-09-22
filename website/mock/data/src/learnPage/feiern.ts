import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const feiern: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'feiern',
        article: null,
        translation: 'to celebrate',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To mark a special occasion, such as a birthday or holiday, with enjoyment and often with other people.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'feiern'?",
          options: [
            { text: 'to celebrate', isCorrect: true },
            { text: 'to work hard', isCorrect: false },
            { text: 'to clean the house', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Wir {{feiern}} morgen meinen Geburtstag.',
          'Sie {{feiert}} gern mit ihren Freunden.',
          'Wir haben bis Mitternacht {{gefeiert}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From the noun 'Feier' (celebration), from Latin 'feriae' (holidays) — the same root as English 'ferial' and 'fair'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'zelebrieren',
            article: null,
            translation: 'to celebrate (formal)',
            similarityScore: 3,
            level: ["B1"],
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
              "'Feiern' sounds like 'fire in' — imagine fireworks going off at a celebration.",
          },
          {
            id: 2,
            content:
              "Think of a 'fair' — festivals and fairs are all about feiern.",
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
