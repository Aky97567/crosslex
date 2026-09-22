import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const brauchen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'brauchen',
        article: null,
        translation: 'to need',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To require something because it is necessary.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'brauchen'?",
          options: [
            { text: 'to need', isCorrect: true },
            { text: 'to want', isCorrect: false },
            { text: 'to have', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{brauche}} mehr Zeit für die Aufgabe.',
          'Wie viel Geld {{brauchst}} du?',
          'Wir haben gestern Hilfe {{gebraucht}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'bruhhan', related to English 'brook' as in 'to brook no delay' — both come from a root meaning to use or make use of.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'benötigen',
            article: null,
            translation: 'to require, need (more formal)',
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
              "'Brauchen' sounds like 'broken' without it — if you 'brauchen' something, you can't do without it.",
          },
          {
            id: 2,
            content:
              "Think of something you must 'break into using' because you really need it — a stretch, but it sticks.",
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
