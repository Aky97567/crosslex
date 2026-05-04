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
        level: ['A1'],
        representativeImageUrl: 'https://picsum.photos/300/200',
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
            word: 'Gebäude',
            article: 'das',
            translation: 'building',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Wohnung',
            article: 'die',
            translation: 'apartment',
            similarityScore: 3,
            level: ['A1'],
            cefrRelevant: true,
          },
          {
            word: 'Heim',
            article: 'das',
            translation: 'home',
            similarityScore: 5,
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
            imageUrl: 'https://picsum.photos/300/200',
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
