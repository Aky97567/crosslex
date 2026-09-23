import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const gratulieren: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'gratulieren',
        article: null,
        translation: 'to congratulate',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To express happiness and praise to someone for a success or special occasion.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'gratulieren'?",
          options: [
            { text: 'to congratulate', isCorrect: true },
            { text: 'to apologize to someone', isCorrect: false },
            { text: 'to warn someone', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{gratuliere}} dir zum Geburtstag!',
          'Alle {{gratulieren}} dem Brautpaar.',
          'Wir haben ihm zur bestandenen Prüfung {{gratuliert}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Borrowed from Latin 'gratulari' (to show joy, thank) — the same root gives English 'grateful' and 'congratulate'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No clean single-word synonym at this level.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Gratulieren' looks like English 'congratulate' in Latin disguise — both share the same Latin root.",
          },
          {
            id: 2,
            content:
              "Picture shaking hands and saying 'Herzlichen Glückwunsch!' — that's gratulieren.",
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
