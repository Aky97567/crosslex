import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const angelegenheit: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Angelegenheit',
        article: 'die',
        translation: 'matter, affair',
        partOfSpeech: 'noun',
        themes: ['daily_life', 'bureaucracy'],
        level: ['B2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'A matter or issue that needs to be dealt with.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Angelegenheit'?",
          options: [
            { text: 'a matter, affair', isCorrect: true },
            { text: 'a solution', isCorrect: false },
            { text: 'a celebration', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Das ist eine sehr wichtige {{Angelegenheit}}.',
          'Ich möchte diese {{Angelegenheit}} so schnell wie möglich klären.',
          'Er kümmert sich um private {{Angelegenheiten}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'an-' + 'gelegen' (lying, situated) — literally 'something that lies before you', i.e. a matter at hand.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Sache',
            article: 'die',
            translation: 'matter, thing',
            similarityScore: 4,
            level: ['A2'],
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
              "'Angelegenheit' relates to 'gelegen' (lying) — a matter that lies before you, waiting to be handled.",
          },
          {
            id: 2,
            content:
              "Think of something 'laid before' you that needs attention — Angelegenheit.",
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
