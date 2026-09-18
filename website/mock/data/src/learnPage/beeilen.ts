import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const beeilen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich beeilen',
        article: null,
        translation: 'to hurry',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'transport', 'reflexiv'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To move or act quickly because time is short.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question:
            "What is the best guess for the meaning of 'sich beeilen'?",
          options: [
            { text: 'to hurry', isCorrect: true },
            { text: 'to relax', isCorrect: false },
            { text: 'to wait', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Wir müssen uns {{beeilen}}.',
          'Ich {{beeile}} mich, weil der Bus gleich kommt.',
          'Er hat sich sehr {{beeilt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'be-' + 'eilen' (to hurry, rush) — 'eilen' comes from Old High German 'ilen', meaning to hasten.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'hetzen',
            article: null,
            translation: 'to rush (informal)',
            similarityScore: 3,
            level: ['B1'],
            register: 'colloquial',
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
              "'Beeilen' contains 'eilen' (to hurry) — 'sich beeilen' means to hurry yourself up.",
          },
          {
            id: 2,
            content:
              "Think of an 'eel' swimming fast — 'eilen' inside 'beeilen' means to rush.",
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
