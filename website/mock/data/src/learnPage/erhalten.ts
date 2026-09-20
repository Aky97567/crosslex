import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const erhalten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'erhalten',
        article: null,
        translation: 'to receive, obtain',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'bureaucracy', 'irregular'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To be given or to obtain something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'erhalten'?",
          options: [
            { text: 'to receive, obtain', isCorrect: true },
            { text: 'to send', isCorrect: false },
            { text: 'to lose', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Sie werden in Kürze einen Bescheid {{erhalten}}.',
          'Er {{erhält}} jeden Monat eine Rechnung.',
          'Wir haben die Bestätigung schon {{erhalten}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'er-' (a prefix indicating achievement) + 'halten' (to hold) — literally 'to come to hold' something.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'bekommen',
            article: null,
            translation: 'to get, receive',
            similarityScore: 5,
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
              "'Erhalten' contains 'halten' (to hold) — erhalten means to come into holding something: receiving it.",
          },
          {
            id: 2,
            content:
              "Think of finally 'holding' the letter you were waiting for — erhalten.",
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
