import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const beginnen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'beginnen',
        article: null,
        translation: 'to begin',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To start something, such as an activity, event, or period of time.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'beginnen'?",
          options: [
            { text: 'to begin', isCorrect: true },
            { text: 'to finish something', isCorrect: false },
            { text: 'to stop something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Der Film {{beginnt}} um acht Uhr.',
          'Wir {{beginnen}} morgen mit dem neuen Kurs.',
          'Die Schule hat schon {{begonnen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'biginnan', related to English 'begin' — both descend from the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'anfangen',
            article: null,
            translation: 'to begin, start',
            similarityScore: 4,
            level: ["A1"],
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
              "'Beginnen' looks and sounds like English 'begin-en' — an easy direct match.",
          },
          {
            id: 2,
            content:
              "Picture a race starting gun — 'Los, wir beginnen!'",
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
