import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const sehen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sehen',
        article: null,
        translation: 'to see',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'irregular'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To perceive something with the eyes.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sehen'?",
          options: [
            { text: 'to see', isCorrect: true },
            { text: 'to hear', isCorrect: false },
            { text: 'to touch', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich möchte dich bald {{sehen}}.',
          'Er {{sieht}} den Film im Kino.',
          'Wir haben das Konzert {{gesehen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'sehan', related to English 'see' — both from the same ancient Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'erblicken',
            article: null,
            translation: 'to catch sight of (literary)',
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
              "'Sehen' sounds close to 'see-hen' — picture a hen you suddenly 'see'.",
          },
          {
            id: 2,
            content:
              "Think of 'seh' as short for 'see' — 'sehen' is simply 'to see'.",
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
