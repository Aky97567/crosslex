import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const entwicklung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Entwicklung',
        article: 'die',
        translation: 'development',
        partOfSpeech: 'noun',
        themes: ['daily_life', 'work'],
        level: ['B2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'The process of growing, changing, or improving over time.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Entwicklung'?",
          options: [
            { text: 'development', isCorrect: true },
            { text: 'a mistake', isCorrect: false },
            { text: 'an ending', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die technische {{Entwicklung}} geht sehr schnell.',
          'Wir beobachten die {{Entwicklung}} genau.',
          'Das Kind zeigt eine gute {{Entwicklung}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ent-' (unfolding) + 'wickeln' (to wind, wrap) — literally 'to unwind, unfold', like a plant unfurling.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Fortschritt',
            article: 'der',
            translation: 'progress',
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
              "'Entwicklung' contains 'wickeln' (to wind) — development is the unwinding of something over time.",
          },
          {
            id: 2,
            content:
              "Think of a plant slowly unfurling — Entwicklung.",
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
