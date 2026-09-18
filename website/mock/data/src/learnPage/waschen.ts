import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const waschen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich waschen',
        article: null,
        translation: 'to wash oneself',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'timetable', 'reflexiv'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: "To clean one's own body with water and soap.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question:
            "What is the best guess for the meaning of 'sich waschen'?",
          options: [
            { text: 'to wash oneself', isCorrect: true },
            { text: 'to get dressed', isCorrect: false },
            { text: "to comb one's hair", isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich muss mich noch {{waschen}}.',
          'Er {{wäscht}} sich jeden Morgen.',
          'Sie hat sich gründlich {{gewaschen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'wascan', related to English 'wash' — both from the same ancient Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'duschen' (to shower) names a narrower, specific method of
        // washing, not the same general concept — no entry is listed.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Waschen' sounds almost exactly like 'wash an' — 'waschen' means to wash.",
          },
          {
            id: 2,
            content:
              "Picture washing your hands at a sink — a simple sound-alike hook for 'waschen'.",
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
