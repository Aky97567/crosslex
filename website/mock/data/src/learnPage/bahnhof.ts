import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const bahnhof: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Bahnhof',
        article: 'der',
        translation: 'train station',
        partOfSpeech: 'noun',
        themes: ['transport'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A building where trains stop so passengers can get on and off. The Bahnhof is also where you buy tickets and find timetables.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Bahnhof'?",
          options: [
            { text: 'a train station', isCorrect: true },
            { text: 'an airport', isCorrect: false },
            { text: 'a bus stop', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich fahre zum Bahnhof. Am Bahnhof kaufe ich eine Fahrkarte. Der Bahnhof ist sehr groß und modern.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Bahn' (track, railway) + 'Hof' (yard, courtyard). A Bahnhof is literally a yard for the railway — where the tracks meet a courtyard for passengers.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Hauptbahnhof',
            article: 'der',
            translation: 'main train station',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Bahnstation',
            article: 'die',
            translation: 'train station, rail stop',
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
              "'Bahn' = railway, 'Hof' = yard. A Bahnhof is the yard where the railway ends and passengers begin.",
          },
          {
            id: 2,
            content:
              "Think of 'Bahn' like 'lane' — the train's lane ends at the Hof (yard): the station.",
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
