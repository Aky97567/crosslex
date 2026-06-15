import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const kasse: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Kasse',
        article: 'die',
        translation: 'checkout, cash register, cashier',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The place in a shop where you pay for your items. In Germany you queue at the Kasse and can pay by cash (bar) or card (Karte).',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Kasse'?",
          options: [
            { text: 'the checkout where you pay in a shop', isCorrect: true },
            { text: 'the entrance of a supermarket', isCorrect: false },
            { text: 'the bakery counter', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich stehe an der Kasse im Supermarkt. An der Kasse bezahle ich mit Karte. Die Kasse ist leider sehr voll.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Italian 'cassa' (box, chest), via French 'caisse'. The same root gives English 'cash' — originally the box where money was kept.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Kassenzone',
            article: 'die',
            translation: 'checkout area',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Zahlstelle',
            article: 'die',
            translation: 'payment point',
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
              "Think of 'cash' — Kasse shares its root with 'cash'. At the Kasse, you hand over your cash.",
          },
          {
            id: 2,
            content:
              "'Kasse' sounds like 'casa' (house in Italian/Spanish) — it's the little house of money at the end of your shopping trip.",
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
