import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const zug: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Zug',
        article: 'der',
        translation: 'train',
        partOfSpeech: 'noun',
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A series of connected railway carriages pulled by an engine; used for travel between cities and towns.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Zug'?",
          options: [
            { text: 'a bus', isCorrect: false },
            { text: 'a train', isCorrect: true },
            { text: 'an aeroplane', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Der Zug fährt um 10 Uhr ab. Ich nehme den Zug nach Hamburg. Der Zug hat Verspätung.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From the verb 'ziehen' (to pull). A Zug is literally something that pulls — referring to the locomotive pulling the carriages.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Bahnhof',
            article: 'der',
            translation: 'train station',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Bus',
            article: 'der',
            translation: 'bus',
            similarityScore: 3,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Ticket',
            article: 'das',
            translation: 'ticket',
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
              "Think of 'Zug' as 'zoom' — a train zooms along the tracks.",
          },
          {
            id: 2,
            content:
              "'Zug' means 'pull' — a train pulls its carriages along the rail.",
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
