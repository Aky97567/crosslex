import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const apfel: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Apfel',
        article: 'der',
        translation: 'apple',
        partOfSpeech: 'noun',
        level: ['A1'],
        representativeImageUrl: 'https://picsum.photos/300/200',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'A round fruit with red or green skin and a sweet taste.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Apfel'?",
          options: [
            { text: 'A type of fruit', isCorrect: true },
            { text: 'A type of vehicle', isCorrect: false },
            { text: 'A type of tool', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Der Apfel ist süß und saftig. Ich esse jeden Tag einen Apfel.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Middle High German 'apfel', from Old High German 'apful'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Obst',
            article: 'das',
            translation: 'fruit',
            similarityScore: 2,
            level: ['A1'],
            cefrRelevant: true,
          },
          {
            word: 'Frucht',
            article: 'die',
            translation: 'fruit',
            similarityScore: 3,
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
            content: "Think of 'Apfel' as the English word 'apple'.",
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
