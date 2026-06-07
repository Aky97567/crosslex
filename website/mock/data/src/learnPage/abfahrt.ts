import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const abfahrt: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Abfahrt',
        article: 'die',
        translation: 'departure',
        partOfSpeech: 'noun',
        themes: ['transport'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The moment a train, bus, or other vehicle leaves; the scheduled departure time shown on timetables.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Abfahrt'?",
          options: [
            { text: 'arrival', isCorrect: false },
            { text: 'departure', isCorrect: true },
            { text: 'platform number', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Die Abfahrt ist um 14:30 Uhr. Ich habe die Abfahrt verpasst. Wann ist die nächste Abfahrt?',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ab-' (away, off) + 'fahren' (to travel, to drive). Abfahrt is the act of driving away — the departure. Its opposite is 'Ankunft' (arrival).",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Abreise',
            article: 'die',
            translation: 'departure (on a journey)',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Aufbruch',
            article: 'der',
            translation: 'departure, setting off',
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
              "'Ab' means 'off' or 'away'. Abfahrt = the driving-away. Think: 'off it goes!'",
          },
          {
            id: 2,
            content:
              "At every German station, 'Abfahrt' is on the departures board. Ankunft is arrivals — Ab = away, An = toward.",
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
