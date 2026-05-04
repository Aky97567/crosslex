import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const nebenkosten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Nebenkosten',
        article: 'die',
        translation: 'additional costs / utilities',
        partOfSpeech: 'noun',
        level: ['B1'],
        representativeImageUrl: 'https://picsum.photos/seed/nebenkosten/300/200',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The additional living costs on top of the base rent, typically including heating, water, building maintenance, and sometimes internet. Billed monthly as an advance payment, with an annual statement.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What are 'Nebenkosten'?",
          options: [
            { text: 'Additional costs on top of rent, such as heating and water', isCorrect: true },
            { text: 'A one-time fee paid when signing a rental contract', isCorrect: false },
            { text: 'The deposit paid to the landlord at the start of tenancy', isCorrect: false },
            { text: 'Costs for renovating the apartment before moving in', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Die Kaltmiete beträgt 800 Euro, aber mit Nebenkosten zahlen Sie insgesamt 1.050 Euro pro Monat. Die Nebenkostenabrechnung kommt einmal im Jahr und kann zu Nachzahlungen führen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          'Compound of "neben" (beside/additional, from Old High German "neben") + "Kosten" (costs, plural of "Kosten" from Middle High German "koste"). Literally: beside-costs or side-costs.',
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Betriebskosten',
            article: 'die',
            translation: 'operating costs',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Heizkosten',
            article: 'die',
            translation: 'heating costs',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Kaltmiete',
            article: 'die',
            translation: 'base rent (without utilities)',
            similarityScore: 4,
            level: ['B1'],
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
              '"Neben" = beside, "Kosten" = costs. The costs that sit beside your rent and surprise you every month.',
            imageUrl: 'https://picsum.photos/seed/nebenkosten1/300/200',
          },
          {
            id: 2,
            content:
              'Always ask about Nebenkosten when viewing an apartment — the real monthly cost is Kaltmiete + Nebenkosten.',
            imageUrl: 'https://picsum.photos/seed/nebenkosten2/300/200',
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
