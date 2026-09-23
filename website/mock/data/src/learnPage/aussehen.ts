import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const aussehen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'aussehen',
        article: null,
        translation: 'to look, appear',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To have a particular appearance; to look a certain way.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'aussehen'?",
          options: [
            { text: 'to look, appear', isCorrect: true },
            { text: 'to feel a certain way', isCorrect: false },
            { text: 'to sound a certain way', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Du musst nicht immer perfekt {{aussehen}}.',
          'Er {{sieht}} heute müde {{aus}}.',
          'Sie hat gestern glücklich {{ausgesehen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Built from 'sehen' (to see) with the separable prefix 'aus-' — aussehen is literally 'to look out', in the sense of how something appears to an outside viewer.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No clean single-word synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Aussehen' contains 'sehen' (to see) — how someone looks is what you sehen from the outside (aus).",
          },
          {
            id: 2,
            content:
              "Picture checking yourself in the mirror to see how you aussehen.",
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
