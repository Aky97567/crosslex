import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const konsequenz: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Konsequenz',
        article: 'die',
        translation: 'consequence',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['B2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'A result or effect of an action or decision.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Konsequenz'?",
          options: [
            { text: 'a consequence', isCorrect: true },
            { text: 'a cause', isCorrect: false },
            { text: 'a plan', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Er muss die {{Konsequenzen}} seines Handelns tragen.',
          'Diese Entscheidung hat ernste {{Konsequenzen}}.',
          'Wir haben die möglichen {{Konsequenzen}} besprochen.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Latin 'consequentia' (that which follows), via French — the same root gives English 'consequence'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Folge',
            article: 'die',
            translation: 'consequence, result',
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
              "'Konsequenz' looks almost identical to English 'consequence' — same Latin root.",
          },
          {
            id: 2,
            content:
              "Think of one action following, or 'consequencing', from another — Konsequenz.",
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
