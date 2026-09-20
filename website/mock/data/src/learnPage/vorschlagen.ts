import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const vorschlagen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'vorschlagen',
        article: null,
        translation: 'to suggest, propose',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'trennbar', 'irregular'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To put forward an idea or plan for others to consider.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'vorschlagen'?",
          options: [
            { text: 'to suggest, propose', isCorrect: true },
            { text: 'to refuse', isCorrect: false },
            { text: 'to forget', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich möchte ein neues Restaurant {{vorschlagen}}.',
          'Sie {{schlägt}} einen anderen Termin {{vor}}.',
          'Er hat eine gute Lösung {{vorgeschlagen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'vor' (before, forward) + 'schlagen' (to hit, strike, propose) — literally 'to strike forward' an idea for others to consider.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'empfehlen',
            article: null,
            translation: 'to recommend',
            similarityScore: 3,
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
              "'Vor' + 'schlagen' — striking (schlagen) an idea 'forward' (vor) for others to see.",
          },
          {
            id: 2,
            content:
              "Think of putting an idea 'forward' on the table — vorschlagen.",
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
