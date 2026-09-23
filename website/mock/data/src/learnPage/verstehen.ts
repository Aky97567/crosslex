import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const verstehen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'verstehen',
        article: null,
        translation: 'to understand',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To know the meaning of something, or to comprehend what someone is saying or explaining.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'verstehen'?",
          options: [
            { text: 'to understand', isCorrect: true },
            { text: 'to forget something', isCorrect: false },
            { text: 'to ignore something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{verstehe}} die Aufgabe nicht.',
          '{{Verstehst}} du, was ich meine?',
          'Er hat die Erklärung sofort {{verstanden}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Built from 'stehen' (to stand) with the prefix 'ver-' — verstehen literally means 'to stand amid' an idea, in the sense of grasping it fully.",
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
              "'Verstehen' contains 'stehen' (to stand) — to verstehen something is to firmly 'stand under' it, grasping it fully.",
          },
          {
            id: 2,
            content:
              "Picture a lightbulb switching on — 'Jetzt verstehe ich!'",
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
