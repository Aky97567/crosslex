import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const entschuldigung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Entschuldigung',
        article: 'die',
        translation: 'apology, excuse',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'A statement expressing regret for something done wrong.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Entschuldigung'?",
          options: [
            { text: 'an apology, excuse', isCorrect: true },
            { text: 'a compliment', isCorrect: false },
            { text: 'a celebration', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Er hat sich mit einer {{Entschuldigung}} gemeldet.',
          '{{Entschuldigung}}, können Sie mir helfen?',
          'Eine ehrliche {{Entschuldigung}} reicht mir.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'sich entschuldigen' (to apologize), built on 'Schuld' (guilt) — literally 'the removal of guilt' through a spoken apology.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Verzeihung',
            article: 'die',
            translation: 'pardon, forgiveness',
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
              "'Entschuldigung' contains 'Schuld' (guilt) — an apology removes (ent-) the guilt.",
          },
          {
            id: 2,
            content:
              "Think of the everyday word you say to get someone's attention politely — Entschuldigung.",
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
