import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const verspaeten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich verspäten',
        article: null,
        translation: 'to be late',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'transport', 'reflexiv'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To arrive or happen later than planned.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sich verspäten'?",
          options: [
            { text: 'to be late', isCorrect: true },
            { text: 'to be early', isCorrect: false },
            { text: 'to be on time', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Der Zug wird sich heute {{verspäten}}.',
          'Ich {{verspäte}} mich leider um zehn Minuten.',
          'Er hat sich wegen des Staus {{verspätet}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ver-' + 'spät' (late) — literally 'to become late'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No genuine single-word synonym found — "zu spät kommen" is a
        // phrase, not a single-word alternative.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Verspäten' contains 'spät' (late) — sich verspäten means to become late.",
          },
          {
            id: 2,
            content:
              "Think of the clock ticking past the time you meant to arrive — sich verspäten.",
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
