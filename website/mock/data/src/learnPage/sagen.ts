import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const sagen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sagen',
        article: null,
        translation: 'to say',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To express something in words; to speak or state something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sagen'?",
          options: [
            { text: 'to say', isCorrect: true },
            { text: 'to ask', isCorrect: false },
            { text: 'to write', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Was {{sagst}} du dazu?',
          'Ich {{sage}} immer die Wahrheit.',
          'Er hat nichts {{gesagt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'sagen', related to English 'say' and 'saga' — both trace back to the same Germanic root for speaking or telling.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'äußern',
            article: null,
            translation: 'to express, state (formal)',
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
              "'Sagen' sounds like 'saga' — a saga is a long story someone once 'sagte' (said).",
          },
          {
            id: 2,
            content: "Think of 'say again' — 'sagen' is simply 'to say'.",
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
