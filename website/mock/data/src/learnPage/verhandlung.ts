import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const verhandlung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Verhandlung',
        article: 'die',
        translation: 'negotiation',
        partOfSpeech: 'noun',
        themes: ['work', 'bureaucracy'],
        level: ['B2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'A formal discussion aimed at reaching an agreement.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Verhandlung'?",
          options: [
            { text: 'negotiation', isCorrect: true },
            { text: 'a celebration', isCorrect: false },
            { text: 'a complaint', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die {{Verhandlung}} dauerte mehrere Stunden.',
          'Beide Seiten sind zu {{Verhandlungen}} bereit.',
          'Die Gewerkschaft führt harte {{Verhandlungen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ver-' + 'handeln' (to trade, act) — literally 'to trade back and forth' until a deal is reached.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Gespräch',
            article: 'das',
            translation: 'talk, conversation',
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
              "'Verhandlung' contains 'handeln' (to trade) — a negotiation is trading positions until you meet in the middle.",
          },
          {
            id: 2,
            content:
              "Think of two sides trading offers back and forth — Verhandlung.",
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
