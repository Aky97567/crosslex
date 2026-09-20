import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const gefallen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'gefallen',
        article: null,
        translation: 'to please, be liked',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'irregular'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To be pleasing or agreeable to someone.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'gefallen'?",
          options: [
            { text: 'to please, be liked', isCorrect: true },
            { text: 'to annoy', isCorrect: false },
            { text: 'to bore', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich hoffe, das Geschenk wird dir {{gefallen}}.',
          'Das Kleid {{gefällt}} mir sehr.',
          'Der Film hat uns allen {{gefallen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ge-' (a collective prefix) + 'fallen' (to fall) — the sense shifted to mean something that 'falls' favorably in someone's estimation.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'zusagen',
            article: null,
            translation: 'to appeal to, suit',
            similarityScore: 3,
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
              "'Gefallen' contains 'fallen' — a thing that 'falls' well with you is something you like.",
          },
          {
            id: 2,
            content:
              "Think of something 'falling' into your good graces — gefallen.",
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
