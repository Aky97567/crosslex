import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const ausreichend: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'ausreichend',
        article: null,
        translation: 'sufficient, enough',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'bureaucracy', 'adjective'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Enough for a particular purpose; adequate.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'ausreichend'?",
          options: [
            { text: 'sufficient, enough', isCorrect: true },
            { text: 'insufficient', isCorrect: false },
            { text: 'excessive', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ist Ihr Einkommen für den Kredit {{ausreichend}}?',
          'Wir haben {{ausreichend}} Zeit für die Aufgabe.',
          'Die Informationen waren leider nicht {{ausreichend}}.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Diese Menge ist {{ausreichend}}.',
        positivAttributiv: 'Das ist eine {{ausreichende}} Menge.',
        komparativPredicativ: 'Diese Menge ist {{ausreichender}} als die vorherige.',
        komparativAttributiv: 'Das ist die {{ausreichendere}} Menge.',
        superlativPredicativ: 'Diese Antwort war {{am ausreichendsten}}.',
        superlativAttributiv: 'Das war die {{ausreichendste}} Antwort von allen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'aus' (out) + 'reichen' (to reach, be enough) — literally 'reaching out' far enough to cover the need.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'genügend',
            article: null,
            translation: 'sufficient, enough',
            similarityScore: 5,
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
              "'Ausreichend' contains 'reichen' (to be enough) — ausreichend means it reaches far enough.",
          },
          {
            id: 2,
            content:
              "Think of a supply that 'reaches' exactly what's needed — ausreichend.",
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
