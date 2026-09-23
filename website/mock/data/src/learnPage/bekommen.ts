import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const bekommen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'bekommen',
        article: null,
        translation: 'to get, receive',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To receive something that is given, sent, or offered to you.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'bekommen'?",
          options: [
            { text: 'to get, receive', isCorrect: true },
            { text: 'to lose something', isCorrect: false },
            { text: 'to buy something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{bekomme}} morgen ein Paket.',
          'Er {{bekommt}} jeden Monat Post von seiner Oma.',
          'Wir haben eine Einladung {{bekommen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'biqueman', related to English 'become' — the original sense of 'come to' shifted in German to 'receive'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'erhalten',
            article: null,
            translation: 'to receive (formal)',
            similarityScore: 3,
            level: ["A2"],
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
              "'Bekommen' looks like English 'become' — though it means 'to receive', not 'to become'! A classic false friend.",
          },
          {
            id: 2,
            content:
              "Picture opening your mailbox and finding a letter — 'Ich bekomme Post.'",
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
