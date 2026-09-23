import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const wandern: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'wandern',
        article: null,
        translation: 'to hike',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To walk for a long time in the countryside or mountains, usually for pleasure or exercise.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'wandern'?",
          options: [
            { text: 'to hike', isCorrect: true },
            { text: 'to drive a car', isCorrect: false },
            { text: 'to sit and relax', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Wir {{wandern}} am Wochenende in den Bergen.',
          'Er {{wandert}} gern mit seinem Hund.',
          'Wir sind fünf Stunden {{gewandert}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'wandaron', related to English 'wander' — both share the same Germanic root.",
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
              "'Wandern' looks and sounds like English 'wander-n' — an easy direct match.",
          },
          {
            id: 2,
            content:
              "Picture a backpack and hiking boots on a mountain trail — that's wandern.",
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
