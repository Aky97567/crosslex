import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const auto: LearnPageContent = {
  type: 'learn',
  level: ['A1'],
  word: 'Auto',
  article: 'das',
  translation: 'car',
  partOfSpeech: 'noun',
  meaning: 'A road vehicle with four wheels powered by an engine.',
  meaningBestGuessQuestion: {
    question: "What is the best guess for the meaning of 'das Auto'?",
    options: [
      { text: 'A type of road vehicle', isCorrect: true },
      { text: 'A type of animal', isCorrect: false },
      { text: 'A piece of furniture', isCorrect: false },
    ],
  },
  paragraphWithUsage:
    'Das Auto fährt schnell. Sie haben ein neues Auto gekauft.',
  etymology: "From Latin 'auto-', meaning self and Greek 'autós'.",
  similarWords: [
    {
      word: 'Fahrzeug',
      article: 'das',
      translation: 'vehicle',
      similarityScore: 5,
    },
    {
      word: 'Personenkraftwagen (PKW)',
      article: 'der',
      translation: 'passenger car',
      similarityScore: 5,
    },
    {
      word: 'Wagen',
      article: 'der',
      translation: 'car',
      similarityScore: 4,
    },
  ],
  representativeImageUrl: 'https://picsum.photos/300/200',
  mnemonics: [
    {
      id: 1,
      content: "Think of 'Auto' as 'automobile' in English.",
      imageUrl: 'https://picsum.photos/300/200',
    },
  ],
  wordShowcaseUrl: 'https://example.com/word-car-video.mp4',
};
