import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const planen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'planen',
        article: null,
        translation: 'to plan',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To decide in advance what to do or how to do something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'planen'?",
          options: [
            { text: 'To decide in advance what to do', isCorrect: true },
            { text: 'To do something without thinking', isCorrect: false },
            { text: 'To forget an appointment', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Wir {{planen}} eine Reise nach Italien.',
          'Sie {{plant}} ihre Zukunft sehr genau.',
          'Habt ihr das Projekt schon {{geplant}}?',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From French 'plan', ultimately from Latin 'planus' (flat) — a 'plan' was originally a flat drawing or map.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'vorhaben',
            article: null,
            translation: 'to intend, plan to',
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
            content: "'Planen' looks just like English 'plan' — same root.",
          },
          {
            id: 2,
            content: "Think of drawing up a 'plan' — planen is making one.",
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
