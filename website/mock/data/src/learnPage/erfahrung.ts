import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const erfahrung: LearnPageContent = {
  type: 'learn',
  level: ['B1', 'B2'],
  word: 'Erfahrung',
  article: 'die',
  translation: 'experience',
  partOfSpeech: 'noun',
  meaning:
    'Knowledge or skill that one gets from doing, seeing, or feeling things.',
  meaningBestGuessQuestion: {
    question: "What is the best guess for the meaning of 'die Erfahrung'?",
    options: [
      { text: 'A place you visit', isCorrect: false },
      { text: 'An error or mistake', isCorrect: false },
      { text: 'Knowledge or skill gained from experience', isCorrect: true },
    ],
  },
  paragraphWithUsage:
    'Durch meine jahrelange Erfahrung habe ich gelernt, wie man effizient arbeitet. Erfahrung ist der beste Lehrer.',
  etymology:
    "From Middle High German 'ervarunge', from Old High German 'irfaran', meaning to travel or to undergo.",
  similarWords: [
    {
      word: 'Kenntnis',
      article: 'die',
      translation: 'knowledge',
      similarityScore: 4,
    },
    {
      word: 'Erlebnis',
      article: 'das',
      translation: 'experience (event)',
      similarityScore: 4,
    },
    {
      word: 'Praxis',
      article: 'die',
      translation: 'practice',
      similarityScore: 3,
    },
  ],
  // representativeImageUrl: 'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
  representativeImageUrl:
    'https://onecms-res.cloudinary.com/image/upload/s--kCDWxyX7--/c_fill,g_auto,h_676,w_1200/f_auto,q_auto/stella-modern-family-bulldog.jpg?itok=L4ZO6Xno',
  mnemonics: [
    {
      id: 1,
      content:
        "Think of 'Erfahrung' as gaining 'experience' from traveling far and wide.",
      // imageUrl: 'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
      imageUrl: 'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
    },
    {
      id: 2,
      content:
        "Erfahrung sounds like 'err' and 'far' – when you go far, you might make errors and learn from them.",
      imageUrl: 'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
    },
    {
      id: 3,
      content:
        "Imagine an 'experienced' traveler collecting 'far' away 'rings' from different places.",
      imageUrl: 'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
    },
  ],
  wordShowcaseUrl: 'https://example.com/word-theater-video.mp4',
};
