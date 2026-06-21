import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const haltestelle: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Haltestelle',
        displayName: 'Halte­stelle',
        article: 'die',
        translation: 'stop, bus stop, tram stop',
        partOfSpeech: 'noun',
        themes: ['transport'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A marked place where buses, trams, or other public transport stop to let passengers on and off. There is usually a sign with the route number and a timetable.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Haltestelle'?",
          options: [
            { text: 'a bus or tram stop', isCorrect: true },
            { text: 'a train station', isCorrect: false },
            { text: 'a taxi rank', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Die Haltestelle ist direkt vor meiner Wohnung. Ich warte an der Haltestelle auf den Bus. An der Haltestelle gibt es einen Fahrplan.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'halten' (to stop, to hold) + 'Stelle' (place, spot). A Haltestelle is simply the place where something stops.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Bushaltestelle',
            article: 'die',
            translation: 'bus stop',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Station',
            article: 'die',
            translation: 'station, stop',
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
              "'Halte-STELLE' — 'halten' means to stop, 'Stelle' means place. A Haltestelle is simply the place where the bus stops.",
          },
          {
            id: 2,
            content:
              "Think of 'halt!' — at the Haltestelle, the bus driver halts the vehicle.",
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
