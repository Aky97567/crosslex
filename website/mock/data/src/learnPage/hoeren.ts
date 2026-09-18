import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const hoeren: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'hören',
        article: null,
        translation: 'to hear, listen',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To perceive sound with the ears; to listen to something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'hören'?",
          options: [
            { text: 'to hear, listen', isCorrect: true },
            { text: 'to see', isCorrect: false },
            { text: 'to speak', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{höre}} gern Musik.',
          '{{Hörst}} du das Radio?',
          'Wir haben die Nachrichten {{gehört}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'horen', related to English 'hear' and 'hark' — all from the same ancient Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'lauschen',
            article: null,
            translation: 'to listen (poetic, formal)',
            similarityScore: 3,
            level: ['B1'],
            register: 'formal',
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
              "'Hören' sounds like 'horn' — imagine hearing a horn honk to remember it.",
          },
          {
            id: 2,
            content:
              "Think of 'hear' — 'hören' and 'hear' share the same ancient root.",
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
