import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const einkaufen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'einkaufen',
        article: null,
        translation: 'to shop, buy groceries',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'trennbar', 'timetable'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To go and buy things, especially food and everyday items.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'einkaufen'?",
          options: [
            { text: 'to shop, buy groceries', isCorrect: true },
            { text: 'to sell', isCorrect: false },
            { text: 'to cook', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich muss heute noch {{einkaufen}}.',
          'Ich {{kaufe}} samstags immer {{ein}}.',
          'Wir haben gestern {{eingekauft}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ein-' (in) + 'kaufen' (to buy) — literally 'to buy in', i.e. to stock up.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'shoppen',
            article: null,
            translation: 'to shop (informal, borrowed from English)',
            similarityScore: 4,
            level: ['A2'],
            register: 'colloquial',
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
              "'Ein' + 'kaufen' — literally 'to buy in', i.e. to stock up on groceries.",
          },
          {
            id: 2,
            content:
              "Think of 'buying your way in' to a full fridge — that's 'einkaufen'.",
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
