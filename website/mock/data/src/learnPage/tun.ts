import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const tun: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'tun',
        article: null,
        translation: 'to do',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To perform an action or activity.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'tun'?",
          options: [
            { text: 'to do', isCorrect: true },
            { text: 'to say something', isCorrect: false },
            { text: 'to think about something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Was {{tust}} du gerade?',
          'Ich {{tue}} mein Bestes.',
          'Er hat mir nichts {{getan}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'tuon', directly related to English 'do' — both descend from the same ancient root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'machen',
            article: null,
            translation: 'to do, make',
            similarityScore: 3,
            level: ["A1"],
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
              "'Tun' sounds like a short version of English 'do-n' — both are among the oldest, most basic verbs.",
          },
          {
            id: 2,
            content:
              "Picture rolling up your sleeves and getting to work — 'Ich tue etwas.'",
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
