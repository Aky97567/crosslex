import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const aufmachen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'aufmachen',
        article: null,
        translation: 'to open',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'trennbar'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To open something — a door, window, bottle, package, or shop. Also used for a business opening its doors.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'aufmachen'?",
          options: [
            { text: 'to close', isCorrect: false },
            { text: 'to open', isCorrect: true },
            { text: 'to carry', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Kannst du bitte das Fenster aufmachen? Ich mache die Tür für dich auf. Er hat das Paket noch nicht aufgemacht.',
        alternateForms: ['aufgemacht'],
        trennbarTokens: ['mache', 'auf'] as [string, string],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'auf-' (up, open) + 'machen' (to make, do). To make something open — the 'auf' signals the direction of movement.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'öffnen',
            article: null,
            translation: 'to open',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'zumachen',
            article: null,
            translation: 'to close, shut',
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
              "'Auf' means up or open, 'machen' means to make. Make it open = aufmachen.",
          },
          {
            id: 2,
            content:
              "In shops you see 'Wir machen um 9 auf' — we open at 9. The prefix 'auf' flies to the end.",
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
