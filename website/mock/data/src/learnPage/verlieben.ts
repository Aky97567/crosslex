import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const verlieben: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich verlieben',
        article: null,
        translation: 'to fall in love',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'reflexiv'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To begin to feel romantic love for someone.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sich verlieben'?",
          options: [
            { text: 'to fall in love', isCorrect: true },
            { text: 'to become angry with someone', isCorrect: false },
            { text: 'to forget someone', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich habe mich sofort in ihn {{verliebt}}.',
          'Sie {{verliebt}} sich schnell.',
          'Wir haben uns auf der Reise {{verliebt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Built from 'lieben' (to love) with the prefix 'ver-', which here marks a change of state — verlieben captures the shift into being in love.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No single-word synonym for this specific onset-of-love sense.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Verlieben' contains 'lieben' (to love) — sich verlieben is falling into love.",
          },
          {
            id: 2,
            content:
              "Picture a heart-shaped arrow (Amor) as you dich verliebst.",
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
