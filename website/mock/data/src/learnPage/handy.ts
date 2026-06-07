import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const handy: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Handy',
        article: 'das',
        translation: 'mobile phone, cell phone',
        partOfSpeech: 'noun',
        theme: 'daily_life',
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A portable telephone you carry with you; in Germany this is the standard everyday word for a mobile or cell phone.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'das Handy'?",
          options: [
            { text: 'something useful or convenient', isCorrect: false },
            { text: 'a mobile phone', isCorrect: true },
            { text: 'a small bag or purse', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe mein Handy vergessen. Kannst du mich auf dem Handy anrufen? Das Handy ist nicht aufgeladen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Borrowed from English 'handy' (convenient to use). Germans adopted it to mean a mobile phone — a classic false friend, since English speakers say 'handy' to mean convenient, not a phone.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Mobiltelefon',
            article: 'das',
            translation: 'mobile phone',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Smartphone',
            article: 'das',
            translation: 'smartphone',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Mobilgerät',
            article: 'das',
            translation: 'mobile device',
            similarityScore: 4,
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
            content:
              "A Handy is handy — the Germans borrowed the English word 'handy' (convenient) to name the most convenient device ever made.",
          },
          {
            id: 2,
            content:
              "It fits in your hand — a hand-y device. Easy to remember once you know the story.",
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
