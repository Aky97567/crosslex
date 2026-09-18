import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const fuehlen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich fühlen',
        article: null,
        translation: 'to feel (a state)',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'reflexiv'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To experience a particular physical or emotional state.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question:
            "What is the best guess for the meaning of 'sich fühlen'?",
          options: [
            { text: 'to feel (a state)', isCorrect: true },
            { text: 'to think', isCorrect: false },
            { text: 'to look', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich möchte mich heute gut {{fühlen}}.',
          'Wie {{fühlst}} du dich?',
          'Er hat sich krank {{gefühlt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'fuolen', related to English 'feel' — both from the same ancient Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No genuine single-word synonym found at this level.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Fühlen' sounds almost exactly like 'feel an' — 'fühlen' means to feel.",
          },
          {
            id: 2,
            content:
              "Think of 'feeling' your way through a dark room — 'fühlen' is about sensing.",
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
