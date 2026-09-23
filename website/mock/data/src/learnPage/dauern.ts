import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const dauern: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'dauern',
        article: null,
        translation: 'to last, take time',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To continue for a certain period of time.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'dauern'?",
          options: [
            { text: 'to last, take time', isCorrect: true },
            { text: 'to start suddenly', isCorrect: false },
            { text: 'to happen quickly', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Der Film {{dauert}} zwei Stunden.',
          'Wie lange {{dauert}} die Reise?',
          'Das Meeting hat viel zu lange {{gedauert}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Borrowed from Latin 'durare' (to last, harden) — the same root gives English 'durable' and 'during'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No clean single-word synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Dauern' sounds like English 'during' — something that dauert happens during a period of time.",
          },
          {
            id: 2,
            content:
              "Picture watching a clock tick slowly — 'Das dauert so lange!'",
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
