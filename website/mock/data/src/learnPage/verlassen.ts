import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const verlassen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'verlassen',
        article: null,
        translation: 'to leave, abandon',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'irregular'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To go away from a place or person, often permanently.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'verlassen'?",
          options: [
            { text: 'to leave, abandon', isCorrect: true },
            { text: 'to arrive', isCorrect: false },
            { text: 'to visit', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Er möchte die Stadt {{verlassen}}.',
          'Sie {{verlässt}} das Haus jeden Morgen um acht.',
          'Sie hat ihre Heimat vor Jahren {{verlassen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ver-' (a prefix indicating departure or change) + 'lassen' (to let, leave) — literally 'to let go away from'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'aufgeben',
            article: null,
            translation: 'to give up, abandon',
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
              "'Verlassen' contains 'lassen' (to let, leave) — verlassen means to leave for good.",
          },
          {
            id: 2,
            content:
              "Think of leaving something behind and 'letting' it go — verlassen.",
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
