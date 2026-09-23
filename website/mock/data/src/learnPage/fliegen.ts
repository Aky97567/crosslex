import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const fliegen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'fliegen',
        article: null,
        translation: 'to fly',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'transport'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To travel through the air, especially in an airplane, or to move through the air like a bird.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'fliegen'?",
          options: [
            { text: 'to fly', isCorrect: true },
            { text: 'to drive a car', isCorrect: false },
            { text: 'to walk far', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Wir {{fliegen}} nächste Woche nach Spanien.',
          'Der Vogel {{fliegt}} über das Haus.',
          'Ich bin noch nie mit dem Flugzeug {{geflogen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'fliogan', directly related to English 'fly' — both share the same Germanic root.",
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
              "'Fliegen' looks and sounds like English 'fly-en' — an easy direct match.",
          },
          {
            id: 2,
            content:
              "Picture a plane taking off into the sky — that's fliegen.",
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
