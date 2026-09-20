import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const abnehmen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'abnehmen',
        article: null,
        translation: 'to decrease, lose weight',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'trennbar', 'irregular'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To become smaller in amount, number, or (for weight) lighter.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'abnehmen'?",
          options: [
            { text: 'to decrease, lose weight', isCorrect: true },
            { text: 'to increase, gain weight', isCorrect: false },
            { text: 'to stay the same', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Temperaturen werden bald {{abnehmen}}.',
          'Er {{nimmt}} durch Sport langsam {{ab}}.',
          'Die Nachfrage hat deutlich {{abgenommen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ab' (off, away) + 'nehmen' (to take) — literally 'to take away from'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'sinken',
            article: null,
            translation: 'to fall, sink',
            similarityScore: 3,
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
              "'Ab' + 'nehmen' — taking (nehmen) something 'away/off' (ab): decreasing.",
          },
          {
            id: 2,
            content: "Think of a scale needle moving down — abnehmen.",
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
