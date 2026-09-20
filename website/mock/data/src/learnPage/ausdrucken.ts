import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const ausdrucken: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'ausdrucken',
        article: null,
        translation: 'to print out',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'trennbar'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To produce a paper copy of a document using a printer.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'ausdrucken'?",
          options: [
            { text: 'to print out', isCorrect: true },
            { text: 'to scan', isCorrect: false },
            { text: 'to delete', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich muss das Formular {{ausdrucken}}.',
          'Sie {{druckt}} die Unterlagen {{aus}}.',
          'Er hat den Vertrag schon {{ausgedruckt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'aus' (out) + 'drucken' (to print) — literally 'to print out' onto paper.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No genuine single-word synonym found — 'drucken' is the base
        // verb ausdrucken is built from, not a plain synonym of it.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Aus' + 'drucken' — printing (drucken) something 'out' (aus) onto paper.",
          },
          {
            id: 2,
            content:
              "Think of hitting 'print' and watching the page come 'out' — ausdrucken.",
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
