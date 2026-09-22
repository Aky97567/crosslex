import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const zusammenhang: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Zusammenhang',
        article: 'der',
        translation: 'context, connection',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'The way two or more things are connected or related.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Zusammenhang'?",
          options: [
            { text: 'context, connection', isCorrect: true },
            { text: 'a coincidence', isCorrect: false },
            { text: 'a difference', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich verstehe den {{Zusammenhang}} nicht ganz.',
          'Es gibt einen klaren {{Zusammenhang}} zwischen den beiden Ereignissen.',
          'Bitte erklären Sie das im {{Zusammenhang}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'zusammen' (together) + 'Hang' (hanging, connection) — literally 'things hanging together'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Verbindung',
            article: 'die',
            translation: 'connection, link',
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
              "'Zusammenhang' — 'zusammen' (together) + 'Hang' (hang) — things that hang together are connected.",
          },
          {
            id: 2,
            content:
              "Think of puzzle pieces hanging together to form the full picture — Zusammenhang.",
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
