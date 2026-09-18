import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const lesen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'lesen',
        article: null,
        translation: 'to read',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'timetable'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To look at written words and understand their meaning.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'lesen'?",
          options: [
            { text: 'to read', isCorrect: true },
            { text: 'to write', isCorrect: false },
            { text: 'to speak', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{lese}} gern Bücher.',
          'Sie {{liest}} jeden Abend die Zeitung.',
          'Wir haben den Roman schon {{gelesen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'lesan', originally meaning 'to gather, pick out' — related to English 'lesson' via Latin.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No genuine single-word synonym found at this level.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Lesen' — think of a 'lesson' you read in order to learn something.",
          },
          {
            id: 2,
            content:
              "Picture picking out each word as you read — 'lesen' originally meant 'to gather'.",
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
