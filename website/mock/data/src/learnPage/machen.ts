import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const machen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'machen',
        article: null,
        translation: 'to do, make',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To do or create something; a very common, general-purpose verb.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'machen'?",
          options: [
            { text: 'to do, make', isCorrect: true },
            { text: 'to say', isCorrect: false },
            { text: 'to go', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Was {{machst}} du heute?',
          'Ich {{mache}} das Essen fertig.',
          'Er hat seine Hausaufgaben {{gemacht}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'mahhon', related to English 'make' — both share the same Germanic root meaning to fashion or produce.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'tun',
            article: null,
            translation: 'to do',
            similarityScore: 4,
            level: ['A2'],
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
              "'Machen' sounds like 'mach' as in 'Mach speed' — making things happen fast.",
          },
          {
            id: 2,
            content:
              "Think of a 'machine' that 'makes' things — same root idea as 'machen'.",
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
