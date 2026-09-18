import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const setzen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich setzen',
        article: null,
        translation: 'to sit down',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'reflexiv'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To move into a sitting position.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question:
            "What is the best guess for the meaning of 'sich setzen'?",
          options: [
            { text: 'to sit down', isCorrect: true },
            { text: 'to stand up', isCorrect: false },
            { text: 'to lie down', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Bitte {{setzen}} Sie sich.',
          'Ich {{setze}} mich auf den Stuhl.',
          'Er hat sich neben mich {{gesetzt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'sezzen', related to English 'set' and 'seat' — both from the same Germanic root.",
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
              "'Setzen' relates to English 'seat' and 'set' — 'sich setzen' means to set yourself down, i.e. sit.",
          },
          {
            id: 2,
            content:
              "Think of finding your 'seat' — 'setzen' is exactly that action.",
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
