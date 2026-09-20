import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const einfach: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'einfach',
        article: null,
        translation: 'simple, easy',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Easy to understand or do; not complicated.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'einfach'?",
          options: [
            { text: 'simple, easy', isCorrect: true },
            { text: 'complicated', isCorrect: false },
            { text: 'expensive', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Aufgabe ist wirklich {{einfach}}.',
          'Das lässt sich {{einfach}} erklären.',
          'Es gibt eine {{einfache}} Lösung für das Problem.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Diese Aufgabe ist {{einfach}}.',
        positivAttributiv: 'Das ist eine {{einfache}} Aufgabe.',
        komparativPredicativ: 'Diese Aufgabe ist {{einfacher}} als die andere.',
        komparativAttributiv: 'Das ist die {{einfachere}} Aufgabe.',
        superlativPredicativ: 'Diese Lösung ist {{am einfachsten}}.',
        superlativAttributiv: 'Das ist die {{einfachste}} Lösung.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ein' (one) + 'fach' (fold, category) — literally 'one-fold', i.e. not complex or layered.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'unkompliziert',
            article: null,
            translation: 'uncomplicated',
            similarityScore: 4,
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
              "'Einfach' — 'ein' (one) + 'fach' (fold) — something with just one fold is simple.",
          },
          {
            id: 2,
            content: "Think of a single, uncomplicated layer — einfach.",
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
