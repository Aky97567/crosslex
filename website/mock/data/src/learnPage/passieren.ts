import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const passieren: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'passieren',
        article: null,
        translation: 'to happen',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To occur or take place, usually referring to an event or something that happens by chance.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'passieren'?",
          options: [
            { text: 'to happen', isCorrect: true },
            { text: 'to plan something carefully', isCorrect: false },
            { text: 'to finish something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Was {{passiert}} hier?',
          'Ich hoffe, dass nichts Schlimmes {{passiert}}.',
          'Der Unfall ist gestern Abend {{passiert}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Borrowed from French 'passer' (to pass) — in German it came to mean 'to happen', as in something passing or occurring.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'geschehen',
            article: null,
            translation: 'to happen, occur (formal)',
            similarityScore: 4,
            level: ["B1"],
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
              "'Passieren' sounds like 'pass here' — something passes by and happens.",
          },
          {
            id: 2,
            content:
              "Picture a news reporter asking 'Was ist passiert?' — 'What happened?'",
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
