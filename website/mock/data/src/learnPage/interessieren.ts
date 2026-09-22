import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const interessieren: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich interessieren',
        article: null,
        translation: 'to be interested (in)',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'reflexiv'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To have curiosity about or enthusiasm for something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question:
            "What is the best guess for the meaning of 'sich interessieren'?",
          options: [
            { text: 'to be interested (in)', isCorrect: true },
            { text: 'to be bored', isCorrect: false },
            { text: 'to be afraid', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{interessiere}} mich für Musik.',
          'Er {{interessiert}} sich sehr für Geschichte.',
          'Wir haben uns schon immer für Kunst {{interessiert}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Borrowed from French 'intéresser', ultimately from Latin 'interesse' (to matter, to be of importance) — the same root gives English 'interest'.",
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
              "'Interessieren' looks almost identical to English 'interest' — same Latin root.",
          },
          {
            id: 2,
            content:
              "Think of finding something 'interesting' — 'sich interessieren' is showing that interest.",
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
