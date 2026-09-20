import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const gelegenheit: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Gelegenheit',
        article: 'die',
        translation: 'opportunity',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['B2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'A favorable time or set of circumstances for doing something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Gelegenheit'?",
          options: [
            { text: 'an opportunity', isCorrect: true },
            { text: 'a mistake', isCorrect: false },
            { text: 'a problem', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Das ist eine einmalige {{Gelegenheit}}.',
          'Ich hatte noch keine {{Gelegenheit}}, ihn zu fragen.',
          'Nutzen Sie diese {{Gelegenheit}}!',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'gelegen' (situated, opportune) — literally 'something well-situated', i.e. a favorable moment.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Chance',
            article: 'die',
            translation: 'chance, opportunity (borrowed)',
            similarityScore: 4,
            level: ['B1'],
            register: 'borrowed',
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
              "'Gelegenheit' relates to 'gelegen' (well-situated) — an opportunity is a moment well-placed for you.",
          },
          {
            id: 2,
            content:
              "Think of a door opening at just the right moment — Gelegenheit.",
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
