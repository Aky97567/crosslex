import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const helfen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'helfen',
        article: null,
        translation: 'to help',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'irregular'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To assist someone with a task or problem.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'helfen'?",
          options: [
            { text: 'to help', isCorrect: true },
            { text: 'to ask', isCorrect: false },
            { text: 'to refuse', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Kannst du mir {{helfen}}?',
          'Sie {{hilft}} ihrer Mutter im Haushalt.',
          'Er hat mir beim Umzug {{geholfen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'helfan', related to English 'help' — both from the same ancient Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'unterstützen',
            article: null,
            translation: 'to support',
            similarityScore: 4,
            level: ['B1'],
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
              "'Helfen' sounds almost exactly like 'help an' — 'helfen' means 'to help'.",
          },
          {
            id: 2,
            content:
              "Think of an elf helping out — 'helfen' sounds a little like 'elf'.",
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
