import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const zunehmen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'zunehmen',
        article: null,
        translation: 'to increase, gain weight',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'trennbar', 'irregular'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To become greater in amount, number, or (for weight) heavier.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'zunehmen'?",
          options: [
            { text: 'to increase, gain weight', isCorrect: true },
            { text: 'to decrease, lose weight', isCorrect: false },
            { text: 'to stay the same', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Preise werden im nächsten Jahr {{zunehmen}}.',
          'Ich {{nehme}} im Winter oft {{zu}}.',
          'Die Zahl der Bewerber hat stark {{zugenommen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'zu' (towards, more) + 'nehmen' (to take) — literally 'to take on more'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'steigen',
            article: null,
            translation: 'to rise, climb',
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
              "'Zu' + 'nehmen' — taking (nehmen) more 'towards' (zu) yourself: increasing.",
          },
          {
            id: 2,
            content: "Think of a scale needle moving up — zunehmen.",
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
