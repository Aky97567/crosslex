import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const teilen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'teilen',
        article: null,
        translation: 'to share, divide',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To split something into parts, or to let someone else use or have part of what one has.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'teilen'?",
          options: [
            { text: 'to share, divide', isCorrect: true },
            { text: 'to keep everything for oneself', isCorrect: false },
            { text: 'to buy something new', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Wir {{teilen}} uns eine Pizza.',
          'Sie {{teilt}} ihr Zimmer mit ihrer Schwester.',
          'Wir haben den Gewinn gerecht {{geteilt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From the noun 'Teil' (part), related to English 'deal' (as in 'a great deal', originally about dividing shares) — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'aufteilen',
            article: null,
            translation: 'to divide up',
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
              "'Teilen' contains 'Teil' (part) — teilen means splitting something into Teile.",
          },
          {
            id: 2,
            content:
              "Picture cutting a cake into equal pieces while saying 'Wir teilen.'",
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
