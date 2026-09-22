import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const passen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'passen',
        article: null,
        translation: 'to fit, suit',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To be the right size, shape, or type for someone or something; to be suitable.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'passen'?",
          options: [
            { text: 'to fit, suit', isCorrect: true },
            { text: 'to be too expensive', isCorrect: false },
            { text: 'to be broken', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Hose {{passt}} mir nicht mehr.',
          'Dieser Termin {{passt}} mir gut.',
          'Die Schuhe haben mir sofort {{gepasst}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Borrowed from French 'passer' (to pass), which took on the sense 'to fit correctly' when it entered German.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Stimmen' (to be correct) overlaps colloquially but is really about factual correctness, not fit.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Passen' sounds like 'pass in' — if it fits, it passes right in.",
          },
          {
            id: 2,
            content:
              "Think of a puzzle piece that 'passt' — it fits perfectly.",
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
