import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const haus: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Haus',
        article: 'das',
        translation: 'house',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'A building where people live.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'das Haus'?",
          options: [
            { text: 'A type of food', isCorrect: false },
            { text: 'A building where people live', isCorrect: true },
            { text: 'A type of vehicle', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Das Haus ist groß und hat einen Garten. Sie wohnt in einem roten Haus.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Middle High German 'hus', from Old High German 'hus', meaning house.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Heim',
            article: 'das',
            translation: 'home',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Eigenheim',
            article: 'das',
            translation: 'owner-occupied home',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Domizil',
            article: 'das',
            translation: 'domicile, abode',
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
            content: "Think of 'Haus' like 'house' in English.",
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
