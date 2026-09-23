import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const entscheiden: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'entscheiden',
        article: null,
        translation: 'to decide',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To make a choice or decision, especially after considering different options.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'entscheiden'?",
          options: [
            { text: 'to decide', isCorrect: true },
            { text: 'to forget something', isCorrect: false },
            { text: 'to wait for someone', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich kann mich nicht {{entscheiden}}, welches Kleid ich kaufe.',
          'Er {{entscheidet}} immer sehr schnell.',
          'Wir haben uns für die günstigere Wohnung {{entschieden}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Built from 'scheiden' (to separate) with the prefix 'ent-' — entscheiden literally means to 'separate out' one option from the rest.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'bestimmen',
            article: null,
            translation: 'to determine, decide',
            similarityScore: 3,
            level: ["B1"],
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
              "'Entscheiden' contains 'scheiden' (to separate) — deciding means separating one option from the others.",
          },
          {
            id: 2,
            content:
              "Picture standing at a fork in the road, forced to entscheiden which way to go.",
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
