import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const geben: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'geben',
        article: null,
        translation: 'to give',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'irregular'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To hand something to someone, or to provide something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'geben'?",
          options: [
            { text: 'to give', isCorrect: true },
            { text: 'to take', isCorrect: false },
            { text: 'to keep', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Kannst du mir bitte das Buch {{geben}}?',
          'Er {{gibt}} mir seine Nummer.',
          'Sie hat mir gute Ratschläge {{gegeben}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'geban', related to English 'give' — both from the same ancient Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'reichen',
            article: null,
            translation: 'to hand, pass',
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
              "'Geben' sounds like 'give an' — 'geben' means exactly 'to give'.",
          },
          {
            id: 2,
            content:
              "Think of giving someone a gift — same root idea as 'geben'.",
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
