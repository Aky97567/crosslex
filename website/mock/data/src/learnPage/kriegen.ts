import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const kriegen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'kriegen',
        article: null,
        translation: 'to get, receive (colloquial)',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To receive or obtain something — an everyday, colloquial word for 'bekommen'.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'kriegen'?",
          options: [
            { text: 'to get, receive (colloquial)', isCorrect: true },
            { text: 'to give something away', isCorrect: false },
            { text: 'to sell something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{kriege}} morgen mein Zeugnis.',
          'Er {{kriegt}} immer alles, was er will.',
          'Wir haben eine Einladung {{gekriegt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Middle Low German 'krigen' (to strive, obtain), related to 'Krieg' (war) — the sense softened over centuries to simply 'to get'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'bekommen',
            article: null,
            translation: 'to get, receive',
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
              "'Kriegen' contains a hidden 'Krieg' (war/struggle) — originally, kriegen meant 'to obtain by struggle'.",
          },
          {
            id: 2,
            content:
              "Picture reaching out and grabbing what you want — that's kriegen, casually.",
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
