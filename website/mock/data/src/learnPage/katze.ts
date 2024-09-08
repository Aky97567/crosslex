import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const katze: LearnPageContent = {
  type: 'learn',
  level: ['A1'],
  word: 'Katze',
  article: 'die',
  translation: 'cat',
  partOfSpeech: 'noun',
  meaning: 'A small animal that is kept as a pet.',
  meaningBestGuessQuestion: {
    question: "What is the best guess for the meaning of 'die Katze'?",
    options: [
      { text: 'A small animal kept as a pet', isCorrect: true },
      { text: 'A type of fruit', isCorrect: false },
      { text: 'A piece of furniture', isCorrect: false },
    ],
  },
  paragraphWithUsage:
    'Die Katze schläft auf dem Sofa. Sie hat eine schwarze Katze.',
  etymology: "From Middle High German 'katze', from Old High German 'kazza'.",
  similarWords: [
    {
      word: 'Kater',
      article: 'der',
      translation: 'tomcat',
      similarityScore: 5,
    },
    {
      word: 'Mieze',
      article: 'die',
      translation: 'kitty',
      similarityScore: 4,
    },
    {
      word: 'Feline',
      article: null,
      translation: 'feline',
      similarityScore: 3,
    },
  ],
  representativeImageUrl: 'https://picsum.photos/300/200',
  mnemonics: [
    {
      id: 1,
      content: "Imagine a cat ('Katze') sitting on a mat.",
      imageUrl: 'https://picsum.photos/300/200',
    },
  ],
  wordShowcaseUrl: 'https://example.com/word-cat-video.mp4',
};
