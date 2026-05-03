import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const tisch: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Tisch',
        article: 'der',
        translation: 'table',
        partOfSpeech: 'noun',
        level: ['A1'],
        representativeImageUrl: 'https://picsum.photos/300/200',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'A piece of furniture with a flat top and legs.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Tisch'?",
          options: [
            { text: 'A type of vehicle', isCorrect: false },
            { text: 'A piece of furniture', isCorrect: true },
            { text: 'A type of food', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Der Tisch im Esszimmer ist aus Holz. Er stellt das Essen auf den Tisch.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Middle High German 'tisch', from Old High German 'tisc'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Schreibtisch',
            article: 'der',
            translation: 'desk',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Esstisch',
            article: 'der',
            translation: 'dining table',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: false,
          },
          {
            word: 'Beistelltisch',
            article: 'der',
            translation: 'side table',
            similarityScore: 3,
            level: ['B2'],
            cefrRelevant: false,
          },
        ],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content: "Think of 'Tisch' as a table with a 'dish' on it.",
            imageUrl: 'https://picsum.photos/300/200',
          },
        ],
      },
      {
        moduleType: 'wordShowcase',
        heading: { text: 'Word Showcase' },
        wordShowcaseUrl: 'https://example.com/word-table-video.mp4',
      },
    ],
  },
};
