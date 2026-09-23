import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const sterben: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sterben',
        article: null,
        translation: 'to die',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'irregular'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To stop living; to reach the end of one's life.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sterben'?",
          options: [
            { text: 'to die', isCorrect: true },
            { text: 'to become sick', isCorrect: false },
            { text: 'to fall asleep', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Mein Großvater ist letztes Jahr {{gestorben}}.',
          'Ohne Wasser {{sterben}} Pflanzen schnell.',
          'Die alte Pflanze {{stirbt}} langsam.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'sterban', related to English 'starve' — both originally meant 'to die', and 'starve' later narrowed to mean dying of hunger.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'versterben',
            article: null,
            translation: 'to pass away (formal)',
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
              "'Sterben' is related to English 'starve' — both once simply meant 'to die'.",
          },
          {
            id: 2,
            content:
              "Picture wilting flowers to remember: without water, sie sterben.",
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
