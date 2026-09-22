import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const erklaerung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Erklärung',
        article: 'die',
        translation: 'explanation, declaration',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'A statement that makes something clear or understandable.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Erklärung'?",
          options: [
            { text: 'an explanation, declaration', isCorrect: true },
            { text: 'a question', isCorrect: false },
            { text: 'a mistake', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Können Sie mir eine {{Erklärung}} geben?',
          'Seine {{Erklärung}} war nicht überzeugend.',
          'Die {{Erklärung}} des Vertrags war sehr detailliert.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'erklären' (to explain), built on 'klar' (clear) — the noun form of making something clear.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Begründung',
            article: 'die',
            translation: 'justification, reasoning',
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
            content:
              "'Erklärung' contains 'klar' (clear) — an Erklärung makes something clear.",
          },
          {
            id: 2,
            content: "Think of a teacher making a topic 'clear' — Erklärung.",
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
