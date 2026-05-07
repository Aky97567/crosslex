import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const ankunft: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Ankunft',
        article: 'die',
        translation: 'arrival',
        partOfSpeech: 'noun',
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The moment of reaching a destination; the scheduled arrival time shown on timetables at stations and airports.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Ankunft'?",
          options: [
            { text: 'departure', isCorrect: false },
            { text: 'arrival', isCorrect: true },
            { text: 'a connection', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Die Ankunft ist um 16 Uhr. Wir warten auf die Ankunft des Zuges. Nach der Ankunft hole ich mein Gepäck.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'an-' (toward, at) + 'Kunft' (coming, from 'kommen'). Ankunft = the coming-toward — the opposite of Abfahrt (departure).",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Abfahrt',
            article: 'die',
            translation: 'departure',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'ankommen',
            article: null,
            translation: 'to arrive',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Bahnhof',
            article: 'der',
            translation: 'train station',
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
              "'An' means toward. Ankunft = coming toward (you). Abfahrt = going away. Arrivals and departures — the two sides of every journey.",
          },
          {
            id: 2,
            content:
              "At airports the sign says 'Ankunft' for arrivals. Think: 'Ann comes' — Ann is arriving.",
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
