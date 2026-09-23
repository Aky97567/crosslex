import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const konzentrieren: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich konzentrieren',
        article: null,
        translation: 'to concentrate',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'reflexiv'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To focus one's full attention on a single task or thought.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sich konzentrieren'?",
          options: [
            { text: 'to concentrate', isCorrect: true },
            { text: 'to become distracted', isCorrect: false },
            { text: 'to fall asleep', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich muss mich auf die Prüfung {{konzentrieren}}.',
          'Er {{konzentriert}} sich beim Lesen sehr stark.',
          'Wir haben uns auf das Gespräch {{konzentriert}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Borrowed from Latin 'concentrare' (to bring to a common center) — the same root gives English 'concentrate'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No single-word synonym at this level.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Konzentrieren' looks almost exactly like English 'concentrate' — an easy cognate.",
          },
          {
            id: 2,
            content:
              "Picture narrowing your focus to a single point — that's dich konzentrieren.",
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
