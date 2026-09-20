import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const empfehlen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'empfehlen',
        article: null,
        translation: 'to recommend',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'irregular'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To suggest that something is good or suitable.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'empfehlen'?",
          options: [
            { text: 'to recommend', isCorrect: true },
            { text: 'to warn against', isCorrect: false },
            { text: 'to forbid', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Kannst du mir ein gutes Restaurant {{empfehlen}}?',
          'Der Arzt {{empfiehlt}} mehr Bewegung.',
          'Sie hat mir dieses Buch {{empfohlen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'emp-' (a variant of 'ent-') + 'befehlen' (to command) — originally meant to entrust something to someone's care.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'raten',
            article: null,
            translation: 'to advise',
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
              "Think of 'empfehlen' as handing over a trusted tip — you entrust someone with a good idea.",
          },
          {
            id: 2,
            content:
              "Think of a friend 'entrusting' you with a great recommendation — empfehlen.",
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
