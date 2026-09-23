import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const bringen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'bringen',
        article: null,
        translation: 'to bring',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To carry or take something or someone to a place or person.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'bringen'?",
          options: [
            { text: 'to bring', isCorrect: true },
            { text: 'to take something away', isCorrect: false },
            { text: 'to hide something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Kannst du mir bitte ein Glas Wasser {{bringen}}?',
          'Er {{bringt}} die Kinder zur Schule.',
          'Sie hat mir Blumen {{gebracht}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'bringan', directly related to English 'bring' — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Holen' means fetching something (the opposite direction), not a true synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Bringen' looks and sounds like English 'bring-en' — an easy direct match.",
          },
          {
            id: 2,
            content:
              "Picture a waiter carrying your food to the table — 'Er bringt das Essen.'",
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
