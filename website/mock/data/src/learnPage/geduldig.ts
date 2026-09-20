import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const geduldig: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'geduldig',
        article: null,
        translation: 'patient',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Able to wait calmly without getting annoyed.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'geduldig'?",
          options: [
            { text: 'patient', isCorrect: true },
            { text: 'impatient', isCorrect: false },
            { text: 'angry', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Lehrerin ist sehr {{geduldig}} mit den Kindern.',
          'Bitte sei {{geduldig}}, es dauert nicht mehr lange.',
          'Er hat {{geduldig}} auf seine Antwort gewartet.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Geduld' (patience) + '-ig' — literally 'having patience'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'gelassen',
            article: null,
            translation: 'calm, composed',
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
              "'Geduldig' contains 'Geduld' (patience) — geduldig means being full of patience.",
          },
          {
            id: 2,
            content:
              "Think of calmly waiting without complaint — geduldig.",
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
