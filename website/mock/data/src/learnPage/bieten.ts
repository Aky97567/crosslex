import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const bieten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'bieten',
        article: null,
        translation: 'to offer',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To make something available to someone, such as a service, opportunity, or price.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'bieten'?",
          options: [
            { text: 'to offer', isCorrect: true },
            { text: 'to request something', isCorrect: false },
            { text: 'to hide something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Firma {{bietet}} ihren Mitarbeitern flexible Arbeitszeiten.',
          'Dieses Hotel {{bietet}} einen tollen Blick aufs Meer.',
          'Er hat mir einen fairen Preis {{geboten}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'biotan', directly related to English 'bid' (as in 'to bid on an item') — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'anbieten',
            article: null,
            translation: 'to offer, provide',
            similarityScore: 4,
            level: ["B1"],
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
              "'Bieten' sounds like English 'bid in' — you bid (bieten) an offer into a deal.",
          },
          {
            id: 2,
            content:
              "Picture an auctioneer calling 'Bieten Sie!' — 'Make your offer!'",
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
