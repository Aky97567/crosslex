import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const probieren: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'probieren',
        article: null,
        translation: 'to try, taste',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To try or test something, such as food, a new activity, or an idea, to see if it works or tastes good.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'probieren'?",
          options: [
            { text: 'to try, taste', isCorrect: true },
            { text: 'to refuse something', isCorrect: false },
            { text: 'to buy something expensive', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Möchtest du den Kuchen {{probieren}}?',
          'Ich {{probiere}} gern neue Rezepte aus.',
          'Wir haben den neuen Wein {{probiert}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Latin 'probare' (to test, approve) — the same root gives English 'probe' and 'prove'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'versuchen',
            article: null,
            translation: 'to try, attempt',
            similarityScore: 4,
            level: ["A2"],
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
              "'Probieren' looks like English 'probe' — you probe (try) something new.",
          },
          {
            id: 2,
            content:
              "Picture tasting a dish at a restaurant and saying 'Ich probiere das mal.'",
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
