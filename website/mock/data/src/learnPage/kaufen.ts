import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const kaufen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'kaufen',
        article: null,
        translation: 'to buy',
        partOfSpeech: 'verb',
        theme: 'daily_life',
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To exchange money for something; to get something by paying for it in a shop or market.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'kaufen'?",
          options: [
            { text: 'to sell something to someone', isCorrect: false },
            { text: 'to buy something', isCorrect: true },
            { text: 'to borrow something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich möchte heute neue Schuhe kaufen. Wo kann man hier gute Schuhe kaufen? Ich habe gestern Brot und Milch gekauft.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'koufōn', related to Latin 'caupo' (innkeeper, trader). The English word 'cheap' shares the same root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'einkaufen',
            article: null,
            translation: 'to shop, to buy',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'erwerben',
            article: null,
            translation: 'to acquire, to purchase',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'anschaffen',
            article: null,
            translation: 'to get, to acquire',
            similarityScore: 3,
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
              "Think of 'kaufen' as 'cough-en' — you cough up money to buy something.",
          },
          {
            id: 2,
            content:
              "'Kaufen' sounds like 'coffer' — you open your coffer (money box) to pay.",
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
