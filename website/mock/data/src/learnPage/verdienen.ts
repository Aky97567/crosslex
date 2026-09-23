import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const verdienen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'verdienen',
        article: null,
        translation: 'to earn',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'work', 'finance'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To receive money in exchange for work, or to deserve something because of one's actions.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'verdienen'?",
          options: [
            { text: 'to earn', isCorrect: true },
            { text: 'to spend money', isCorrect: false },
            { text: 'to borrow money', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{verdiene}} gutes Geld in meinem Job.',
          'Wie viel {{verdient}} sie im Monat?',
          'Er hat sich eine Pause {{verdient}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Built from 'dienen' (to serve) with the prefix 'ver-' — verdienen originally meant 'to earn through service', later broadening to any kind of earning.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No clean single-word synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Verdienen' contains 'dienen' (to serve) — you verdienen money by serving/working for it.",
          },
          {
            id: 2,
            content:
              "Picture a paycheck landing in your bank account — that's verdienen.",
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
