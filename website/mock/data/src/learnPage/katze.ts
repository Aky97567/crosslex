import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const katze: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Katze',
        article: 'die',
        translation: 'cat',
        partOfSpeech: 'noun',
        level: ['A1'],
        representativeImageUrl: 'https://picsum.photos/300/200',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'A small domesticated animal often kept as a pet.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Katze'?",
          options: [
            { text: 'A small animal kept as a pet', isCorrect: true },
            { text: 'A type of fruit', isCorrect: false },
            { text: 'A piece of furniture', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Die Katze schläft auf dem Sofa. Sie hat eine schwarze Katze.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Middle High German 'katze', from Old High German 'kazza'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Kater',
            article: 'der',
            translation: 'tomcat',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Mieze',
            article: 'die',
            translation: 'kitty',
            similarityScore: 4,
            register: 'colloquial',
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
            content: "Imagine a cat ('Katze') sitting on a mat.",
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
