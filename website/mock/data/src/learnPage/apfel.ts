import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const apfel: LearnPageContent = {
  type: 'learn',
  level: ['A1'],
  word: 'Apfel',
  article: 'der',
  translation: 'apple',
  partOfSpeech: 'noun',
  meaning: 'A round fruit with red or green skin and a sweet taste.',
  meaningBestGuessQuestion: {
    question: "What is the best guess for the meaning of 'der Apfel'?",
    options: [
      { text: 'A type of fruit', isCorrect: true },
      { text: 'A type of vehicle', isCorrect: false },
      { text: 'A type of tool', isCorrect: false },
    ],
  },
  paragraphWithUsage:
    'Der Apfel ist süß und saftig. Ich esse jeden Tag einen Apfel.',
  etymology: "From Middle High German 'apfel', from Old High German 'apful'.",
  similarWords: [
    {
      word: 'Obst',
      article: 'das',
      translation: 'fruit',
      similarityScore: 2,
    },
    {
      word: 'Frucht',
      article: 'die',
      translation: 'fruit',
      similarityScore: 3,
    },
  ],
  representativeImageUrl: 'https://picsum.photos/300/200',
  mnemonics: [
    {
      id: 1,
      content: "Think of 'Apfel' as the English word 'apple'.",
      imageUrl: 'https://picsum.photos/300/200',
    },
  ],
  wordShowcaseUrl: 'https://example.com/word-apple-video.mp4',
};
