import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const fahrplan: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Fahrplan',
        article: 'der',
        translation: 'timetable, schedule',
        partOfSpeech: 'noun',
        themes: ['transport'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A printed or digital list showing when buses, trains, or trams depart and arrive. You check the Fahrplan to know which connection to take.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Fahrplan'?",
          options: [
            { text: 'a timetable showing departure and arrival times', isCorrect: true },
            { text: 'a map of the bus and train routes', isCorrect: false },
            { text: 'a ticket for public transport', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich schaue in den Fahrplan. Der Fahrplan hängt an der Haltestelle. Im Fahrplan steht, wann der nächste Zug kommt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'fahren' (to travel, to drive) + 'Plan' (plan, schedule). A Fahrplan is literally the plan for when and where vehicles travel.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Abfahrtsplan',
            article: 'der',
            translation: 'departure schedule',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Zugplan',
            article: 'der',
            translation: 'train schedule',
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
              "'Fahr-PLAN' — 'fahren' = to travel, 'Plan' = plan. The Fahrplan is the travel plan: when everything departs and arrives.",
          },
          {
            id: 2,
            content:
              "Think of 'far-plan' — a plan for how far things travel and at what time.",
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
