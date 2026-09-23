import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const trinken: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'trinken',
        article: null,
        translation: 'to drink',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To take liquid into the mouth and swallow it.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'trinken'?",
          options: [
            { text: 'to drink', isCorrect: true },
            { text: 'to eat something', isCorrect: false },
            { text: 'to cook something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{trinke}} morgens immer Kaffee.',
          'Was {{trinkst}} du am liebsten?',
          'Wir haben ein Glas Wein {{getrunken}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'trinkan', directly related to English 'drink' — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No clean single-word synonym at this level.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Trinken' looks and sounds like English 'drink-en' — an easy direct match.",
          },
          {
            id: 2,
            content:
              "Picture raising a glass of water to your lips — that's trinken.",
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
