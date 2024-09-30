import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const erfahrung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Erfahrung',
        article: 'die',
        translation: 'experience',
        partOfSpeech: 'noun',
        level: ['B1', 'B2'],
        representativeImageUrl:
          'https://onecms-res.cloudinary.com/image/upload/s--kCDWxyX7--/c_fill,g_auto,h_676,w_1200/f_auto,q_auto/stella-modern-family-bulldog.jpg?itok=L4ZO6Xno',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Knowledge or skill that one gets from doing, seeing, or feeling things.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question:
            "What is the best guess for the meaning of 'die Erfahrung'?",
          options: [
            { text: 'A place you visit', isCorrect: false },
            { text: 'An error or mistake', isCorrect: false },
            {
              text: 'Knowledge or skill gained from experience',
              isCorrect: true,
            },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Durch meine jahrelange Erfahrung habe ich gelernt, wie man effizient arbeitet. Erfahrung ist der beste Lehrer.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Middle High German 'ervarunge', from Old High German 'irfaran', meaning to travel or to undergo.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
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
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "Think of 'Erfahrung' as gaining 'experience' from traveling far and wide.",
            imageUrl:
              'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
          },
          {
            id: 2,
            content:
              "Erfahrung sounds like 'err' and 'far' – when you go far, you might make errors and learn from them.",
            imageUrl:
              'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
          },
          {
            id: 3,
            content:
              "Imagine an 'experienced' traveler collecting 'far' away 'rings' from different places.",
            imageUrl:
              'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
          },
        ],
      },
      {
        moduleType: 'wordShowcase',
        heading: { text: 'Word Showcase' },
        wordShowcaseUrl: 'https://example.com/word-theater-video.mp4',
      },
    ],
  },
};
