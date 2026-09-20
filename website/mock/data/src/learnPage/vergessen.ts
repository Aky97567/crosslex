import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const vergessen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'vergessen',
        article: null,
        translation: 'to forget',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'irregular'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To fail to remember something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'vergessen'?",
          options: [
            { text: 'to forget', isCorrect: true },
            { text: 'to remember', isCorrect: false },
            { text: 'to learn', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich darf den Termin nicht {{vergessen}}.',
          'Er {{vergisst}} oft seinen Schlüssel.',
          'Sie hat den Namen komplett {{vergessen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'firgezzan', related to English 'forget' — both from the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No genuine single-word synonym found at this level.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Vergessen' sounds a bit like 'forgotten' if you squint — both mean the same thing.",
          },
          {
            id: 2,
            content: "Think of something slipping out of your memory — vergessen.",
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
