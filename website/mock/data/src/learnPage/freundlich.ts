import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const freundlich: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'freundlich',
        article: null,
        translation: 'friendly, kind',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Behaving in a kind and pleasant way toward others.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'freundlich'?",
          options: [
            { text: 'friendly, kind', isCorrect: true },
            { text: 'unfriendly', isCorrect: false },
            { text: 'shy', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Verkäuferin war sehr {{freundlich}}.',
          'Er hat ein {{freundliches}} Gesicht.',
          'Bitte antworte {{freundlich}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Freund' (friend) + the adjective suffix '-lich' — literally 'friend-like'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'nett',
            article: null,
            translation: 'nice',
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
              "'Freundlich' contains 'Freund' (friend) — being friendly means acting like a friend.",
          },
          {
            id: 2,
            content:
              "Think of a friendly smile — 'freundlich' describes exactly that.",
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
