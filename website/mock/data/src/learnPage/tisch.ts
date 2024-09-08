import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const tisch: LearnPageContent = {
  type: 'learn',
  level: ['A1'],
  word: 'Tisch',
  article: 'der',
  translation: 'table',
  partOfSpeech: 'noun',
  meaning: 'A piece of furniture with a flat top and legs.',
  meaningBestGuessQuestion: {
    question: "What is the best guess for the meaning of 'der Tisch'?",
    options: [
      { text: 'A type of vehicle', isCorrect: false },
      { text: 'A piece of furniture', isCorrect: true },
      { text: 'A type of food', isCorrect: false },
    ],
  },
  paragraphWithUsage:
    'Der Tisch im Esszimmer ist aus Holz. Er stellt das Essen auf den Tisch.',
  etymology: "From Middle High German 'tisch', from Old High German 'tisc'.",
  similarWords: [
    {
      word: 'Schreibtisch',
      article: 'der',
      translation: 'desk',
      similarityScore: 5,
    },
    {
      word: 'Esstisch',
      article: 'der',
      translation: 'dining table',
      similarityScore: 4,
    },
    {
      word: 'Beistelltisch',
      article: 'der',
      translation: 'side table',
      similarityScore: 3,
    },
  ],
  representativeImageUrl: 'https://picsum.photos/300/200',
  mnemonics: [
    {
      id: 1,
      content: "Think of 'Tisch' as a table with 'dish' on it.",
      imageUrl: 'https://picsum.photos/300/200',
    },
  ],
  wordShowcaseUrl: 'https://example.com/word-table-video.mp4',
};
