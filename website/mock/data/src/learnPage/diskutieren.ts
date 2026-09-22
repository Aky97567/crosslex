import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const diskutieren: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'diskutieren',
        article: null,
        translation: 'to discuss',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To talk about a topic with others, often to exchange opinions.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'diskutieren'?",
          options: [
            { text: 'To talk about a topic with others', isCorrect: true },
            { text: 'To ignore a topic', isCorrect: false },
            { text: 'To write a letter', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Wir {{diskutieren}} oft über Politik.',
          'Er {{diskutiert}} gern mit seinen Kollegen.',
          'Sie haben das Problem lange {{diskutiert}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Latin 'discutere' (to shake apart, examine), via French 'discuter' — the same root gives English 'discuss'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'besprechen',
            article: null,
            translation: 'to discuss, talk over',
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
              "'Diskutieren' looks just like English 'discuss' — same Latin root.",
          },
          {
            id: 2,
            content:
              "Think of a 'discussion' panel — diskutieren is exactly that activity.",
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
