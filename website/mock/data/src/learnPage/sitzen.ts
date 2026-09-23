import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const sitzen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sitzen',
        article: null,
        translation: 'to sit',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To be in a position where one's body rests on a chair or similar surface.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sitzen'?",
          options: [
            { text: 'to sit', isCorrect: true },
            { text: 'to stand up', isCorrect: false },
            { text: 'to walk around', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{sitze}} den ganzen Tag im Büro.',
          'Er {{sitzt}} gern in der ersten Reihe.',
          'Wir haben lange im Café {{gesessen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'sizzen', directly related to English 'sit' — both share the same Germanic root.",
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
              "'Sitzen' looks and sounds like English 'sit-en' — an easy direct match.",
          },
          {
            id: 2,
            content:
              "Picture relaxing in a comfortable chair — that's sitzen.",
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
