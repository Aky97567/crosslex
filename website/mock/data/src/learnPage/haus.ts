import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const haus: LearnPageContent = {
  type: 'learn',
  level: ['A1'],
  word: 'Haus',
  article: 'das',
  translation: 'house',
  partOfSpeech: 'noun',
  meaning: 'A building where people live.',
  meaningBestGuessQuestion: {
    question: "What is the best guess for the meaning of 'das Haus'?",
    options: [
      { text: 'A type of food', isCorrect: false },
      { text: 'A building where people live', isCorrect: true },
      { text: 'A type of vehicle', isCorrect: false },
    ],
  },
  paragraphWithUsage:
    'Das Haus ist groß und hat einen Garten. Sie wohnt in einem roten Haus.',
  etymology:
    "From Middle High German 'hus', from Old High German 'hus', meaning house.",
  similarWords: [
    {
      word: 'Gebäude',
      article: 'das',
      translation: 'building',
      similarityScore: 4,
    },
    {
      word: 'Wohnung',
      article: 'die',
      translation: 'apartment',
      similarityScore: 3,
    },
    {
      word: 'Heim',
      article: 'das',
      translation: 'home',
      similarityScore: 5,
    },
  ],
  representativeImageUrl: 'https://picsum.photos/300/200',
  mnemonics: [
    {
      id: 1,
      content: "Think of 'Haus' like 'house' in English.",
      imageUrl: 'https://picsum.photos/300/200',
    },
  ],
  wordShowcaseUrl: 'https://example.com/word-house-video.mp4',
};
