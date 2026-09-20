import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const bekannt: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'bekannt',
        article: null,
        translation: 'well-known, known',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Known or recognized by many people.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'bekannt'?",
          options: [
            { text: 'well-known, known', isCorrect: true },
            { text: 'unknown', isCorrect: false },
            { text: 'forgotten', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Dieser Sänger ist international {{bekannt}}.',
          'Das Problem ist mir schon {{bekannt}}.',
          'Sie ist für ihre Pünktlichkeit {{bekannt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'kennen' (to know) — bekannt is the past participle used as an adjective: 'known'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'berühmt',
            article: null,
            translation: 'famous',
            similarityScore: 3,
            level: ['A2'],
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
              "'Bekannt' relates to 'kennen' (to know) — bekannt means already known.",
          },
          {
            id: 2,
            content: "Think of a familiar face — jemand, den man kennt — bekannt.",
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
