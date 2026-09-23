import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const toeten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'töten',
        article: null,
        translation: 'to kill',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To cause the death of a person, animal, or other living thing.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'töten'?",
          options: [
            { text: 'to kill', isCorrect: true },
            { text: 'to injure someone slightly', isCorrect: false },
            { text: 'to frighten someone', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Der Jäger hat das Tier {{getötet}}.',
          'Diese Krankheit {{tötet}} jedes Jahr viele Menschen.',
          'Man darf kein Lebewesen ohne Grund {{töten}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From the adjective 'tot' (dead) — töten is the verb formed directly from it, meaning 'to make dead'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'umbringen',
            article: null,
            translation: 'to kill (colloquial)',
            similarityScore: 4,
            level: ["B1"],
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
              "'Töten' contains 'tot' (dead) — töten means making something tot.",
          },
          {
            id: 2,
            content:
              "Picture a skull-and-crossbones warning sign — a grim reminder of töten.",
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
