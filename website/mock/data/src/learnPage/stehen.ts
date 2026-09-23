import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const stehen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'stehen',
        article: null,
        translation: 'to stand',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To be in an upright position on one's feet, or to be located somewhere.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'stehen'?",
          options: [
            { text: 'to stand', isCorrect: true },
            { text: 'to sit down', isCorrect: false },
            { text: 'to lie down', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{stehe}} seit einer Stunde an der Bushaltestelle.',
          'Der Schrank {{steht}} im Wohnzimmer.',
          'Wir haben lange in der Schlange {{gestanden}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'stān', directly related to English 'stand' — both share the same Germanic root.",
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
              "'Stehen' looks and sounds like English 'stand-en' — an easy direct match.",
          },
          {
            id: 2,
            content:
              "Picture waiting patiently in line — that's stehen.",
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
