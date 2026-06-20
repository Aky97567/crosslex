import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const bestellen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'bestellen',
        article: null,
        translation: 'to order',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To ask for food or drinks in a restaurant, or to order goods online or by phone. Also used for booking services: "einen Tisch bestellen" means to reserve a table.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'bestellen'?",
          options: [
            { text: 'to order food, goods, or services', isCorrect: true },
            { text: 'to pay for something at the checkout', isCorrect: false },
            { text: 'to pick up a parcel from a post office', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich bestelle ein Glas Wasser. Hast du schon bestellt? Im Restaurant bestelle ich immer das Tagesgericht.',
        alternateForms: ['bestelle', 'bestellt'],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'be-' (completive prefix) + 'stellen' (to place, to put). To bestellen is to place an order — to put your request in place.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'ordern',
            article: null,
            translation: 'to order (from English, used in business)',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'anfordern',
            article: null,
            translation: 'to request, to requisition',
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
              "'Be-STELLEN' contains 'stellen' (to place) — to bestellen is to place your order, put it in place.",
          },
          {
            id: 2,
            content:
              "Think of 'install' — to install means to place in position. Bestellen places your food order in position to be made.",
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
