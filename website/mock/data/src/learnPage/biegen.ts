import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const biegen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'biegen',
        article: null,
        translation: 'to bend, turn',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To curve or turn something (or oneself) away from a straight line, such as a road or a piece of metal.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'biegen'?",
          options: [
            { text: 'to bend, turn', isCorrect: true },
            { text: 'to break something', isCorrect: false },
            { text: 'to lift something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Er {{biegt}} den Draht zu einem Kreis.',
          'Die Straße {{biegt}} hier nach rechts.',
          'Ich habe den Ast vorsichtig {{gebogen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'biogan', related to English 'bow' (to bend) — both share a common Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No clean single-word synonym at this level; 'krümmen' leans more toward bending one's own body than an object.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Biegen' sounds like 'bee gone' — imagine a bee bending a flower stem as it flies away.",
          },
          {
            id: 2,
            content:
              "Think of a 'bow' shape — biegen means bending something into a curve.",
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
