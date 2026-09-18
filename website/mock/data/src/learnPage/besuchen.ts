import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const besuchen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'besuchen',
        article: null,
        translation: 'to visit',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'timetable'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To go to see a person or place for a period of time.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'besuchen'?",
          options: [
            { text: 'to visit', isCorrect: true },
            { text: 'to leave', isCorrect: false },
            { text: 'to call', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Wir {{besuchen}} unsere Großeltern am Wochenende.',
          'Sie {{besucht}} einen Deutschkurs.',
          'Ich habe meine Freundin in München {{besucht}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'be-' (a common verb prefix) + 'suchen' (to seek) — historically, 'besuchen' meant to seek someone out, which became simply 'to visit'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'aufsuchen',
            article: null,
            translation: 'to visit, seek out (formal, e.g. a doctor)',
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
              "'Besuchen' — 'be-' + 'suchen' (to seek) — visiting is literally 'seeking someone out'.",
          },
          {
            id: 2,
            content:
              "Think of 'besuchen' as a friendly search: you go 'besuchen' (visit) a friend as if seeking them out.",
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
