import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const behalten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'behalten',
        article: null,
        translation: 'to keep',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'irregular'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To continue to have or hold onto something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'behalten'?",
          options: [
            { text: 'to keep', isCorrect: true },
            { text: 'to give away', isCorrect: false },
            { text: 'to lose', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Du darfst das Buch {{behalten}}.',
          'Er {{behält}} immer den Überblick.',
          'Sie hat die Quittung {{behalten}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'be-' (a prefix intensifying the verb) + 'halten' (to hold) — literally 'to hold onto' something.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'aufbewahren',
            article: null,
            translation: 'to store, keep safe',
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
              "'Behalten' contains 'halten' (to hold) — behalten means to keep holding onto something.",
          },
          {
            id: 2,
            content: "Think of holding tight and refusing to let go — behalten.",
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
