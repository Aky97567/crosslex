import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const umsteigen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'umsteigen',
        article: null,
        translation: 'to change (trains/buses), to transfer',
        partOfSpeech: 'verb',
        themes: ['transport'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To get off one train, bus, or metro and board a different one to continue your journey; to change vehicles mid-trip.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'umsteigen'?",
          options: [
            { text: 'to buy a ticket', isCorrect: false },
            { text: 'to change to a different train or bus', isCorrect: true },
            { text: 'to get off at the final stop', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich muss in Frankfurt umsteigen. Wo muss ich umsteigen? Sie müssen in Hannover umsteigen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "A separable verb: 'um-' (around, over) + 'steigen' (to climb, to board). To climb over from one vehicle to another.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'wechseln',
            article: null,
            translation: 'to switch, to change',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'überwechseln',
            article: null,
            translation: 'to switch over, to transfer',
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
              "'Um' = over/around, 'steigen' = to climb. Umsteigen = climbing over to a new train. Picture stepping across the platform.",
          },
          {
            id: 2,
            content:
              "The announcement 'Bitte umsteigen!' means 'please change here' — the last stop before you switch trains.",
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
