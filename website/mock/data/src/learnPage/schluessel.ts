import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const schluessel: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Schlüssel',
        article: 'der',
        translation: 'key',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A small metal object used to lock and unlock a door or other lock. In Germany, landlords give tenants a Schlüssel when they move in.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Schlüssel'?",
          options: [
            { text: 'a key for a lock or door', isCorrect: true },
            { text: 'a wallet for money and cards', isCorrect: false },
            { text: 'a ticket for public transport', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe meinen Schlüssel verloren. Der Schlüssel liegt auf dem Tisch. Ich brauche einen neuen Schlüssel für die Wohnung.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'sluzzil', related to 'schließen' (to close, to lock). A Schlüssel is the tool that closes and opens locks.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Hausschlüssel',
            article: 'der',
            translation: 'house key',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Wohnungsschlüssel',
            article: 'der',
            translation: 'apartment key',
            similarityScore: 5,
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
              "'Schlüssel' contains 'schließen' (to close) — the Schlüssel is the thing that closes and opens your door.",
          },
          {
            id: 2,
            content:
              "Think of 'sluice' — a sluice gate is locked and opened with a key-like mechanism. Schlüssel is the key to the sluice.",
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
