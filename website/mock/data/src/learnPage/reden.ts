import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const reden: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'reden',
        article: null,
        translation: 'to talk',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To speak or talk with someone, usually about a specific topic.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'reden'?",
          options: [
            { text: 'to talk', isCorrect: true },
            { text: 'to listen quietly', isCorrect: false },
            { text: 'to write a letter', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Wir müssen {{reden}}.',
          'Er {{redet}} gern über Politik.',
          'Wir haben lange über das Problem {{geredet}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'redon', related to the archaic English word 'rede' (counsel, advice) — both share a Germanic root about speech.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'sprechen',
            article: null,
            translation: 'to speak',
            similarityScore: 4,
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
              "'Reden' sounds like 'read in' — reading aloud is a form of reden.",
          },
          {
            id: 2,
            content:
              "Picture two friends chatting non-stop, saying 'Wir reden viel!'",
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
