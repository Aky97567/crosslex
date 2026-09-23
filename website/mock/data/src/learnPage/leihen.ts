import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const leihen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'leihen',
        article: null,
        translation: 'to lend, borrow',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To give something to someone for temporary use, or to receive something from someone for temporary use.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'leihen'?",
          options: [
            { text: 'to lend, borrow', isCorrect: true },
            { text: 'to sell something permanently', isCorrect: false },
            { text: 'to throw something away', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Kannst du mir dein Fahrrad {{leihen}}?',
          'Ich {{leihe}} mir oft Bücher aus der Bibliothek.',
          'Er hat mir sein Auto {{geliehen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'lihan', related to English 'loan' and 'lend' — all share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'ausleihen',
            article: null,
            translation: 'to borrow, check out',
            similarityScore: 4,
            level: ["A2"],
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
              "'Leihen' sounds like 'lion' — imagine a lion leihen (lending) you his roar for a day.",
          },
          {
            id: 2,
            content:
              "Think of a 'loan' — leihen is exactly that, giving or getting something on loan.",
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
