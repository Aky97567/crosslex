import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const auswirkung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Auswirkung',
        article: 'die',
        translation: 'effect, impact',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['B2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A result or consequence that something has on someone or something else.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Auswirkung'?",
          options: [
            { text: 'an effect, impact', isCorrect: true },
            { text: 'a cause', isCorrect: false },
            { text: 'a plan', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die {{Auswirkungen}} der Entscheidung sind noch unklar.',
          'Das hat direkte {{Auswirkungen}} auf unser Budget.',
          'Wir müssen die {{Auswirkung}} genau prüfen.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'aus' (out) + 'wirken' (to act, have an effect) — literally 'an effect that plays out'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Folge',
            article: 'die',
            translation: 'consequence',
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
              "'Auswirkung' contains 'wirken' (to have an effect) — an Auswirkung is an effect playing out.",
          },
          {
            id: 2,
            content:
              "Think of ripples spreading out from a single action — Auswirkung.",
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
