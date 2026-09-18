import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const freuen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich freuen',
        article: null,
        translation: 'to be happy, look forward to',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'reflexiv'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To feel happy or pleased about something, or to look forward to it.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question:
            "What is the best guess for the meaning of 'sich freuen'?",
          options: [
            { text: 'to be happy, look forward to', isCorrect: true },
            { text: 'to be angry', isCorrect: false },
            { text: 'to be tired', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{freue}} mich sehr über das Geschenk.',
          'Er {{freut}} sich auf den Urlaub.',
          'Wir haben uns über die Nachricht {{gefreut}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'frewen', related to English 'frolic' — both trace back to a shared Germanic root about joy and lively movement.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'jubeln',
            article: null,
            translation: 'to cheer, rejoice',
            similarityScore: 3,
            level: ['B1'],
            register: 'colloquial',
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
              "'Freuen' sounds like 'Freud' — the mind and its joys, though the connection is only in sound.",
          },
          {
            id: 2,
            content:
              "Think of a 'free' feeling of joy — 'sich freuen' is being happy and free.",
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
