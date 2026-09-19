import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const leicht: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'leicht',
        article: null,
        translation: 'light, easy',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Not heavy in weight, or not difficult to do.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'leicht'?",
          options: [
            { text: 'light, easy', isCorrect: true },
            { text: 'heavy, hard', isCorrect: false },
            { text: 'dangerous', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Tasche ist sehr {{leicht}}.',
          'Das war eine {{leichte}} Prüfung.',
          'Diese Übung ist {{leicht}} zu verstehen.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'lihti', related to English 'light' (in weight) — both from the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'einfach',
            article: null,
            translation: 'simple, easy',
            similarityScore: 4,
            level: ['A2'],
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
              "'Leicht' sounds a bit like 'light' — both describe something not heavy.",
          },
          {
            id: 2,
            content: "Think of a feather — 'leicht' (light) as a feather.",
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
