import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const duschen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'duschen',
        article: null,
        translation: 'to shower',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'timetable'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To wash oneself by standing under running water.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'duschen'?",
          options: [
            { text: 'to shower', isCorrect: true },
            { text: 'to sleep', isCorrect: false },
            { text: 'to cook', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{dusche}} jeden Morgen.',
          'Er {{duscht}} nach dem Sport.',
          'Wir haben kalt {{geduscht}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Borrowed from French 'douche' in the 19th century, itself from Italian 'doccia' — the same root gives English 'douche' and 'duct'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'sich waschen' (to wash oneself) is a broader concept —
        // duschen is one specific method of washing, not a plain
        // synonym of it — so no entry is listed here.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Duschen' comes from the same root as English 'douche' — say it and the sound connection is clear.",
          },
          {
            id: 2,
            content:
              "Picture stepping into the 'Dusche' (shower) fully clothed by mistake — a memorable image for 'duschen'.",
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
