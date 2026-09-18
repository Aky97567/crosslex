import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const zumachen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'zumachen',
        article: null,
        translation: 'to close, shut',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'trennbar'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To shut something, such as a door, window, or shop.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'zumachen'?",
          options: [
            { text: 'to close, shut', isCorrect: true },
            { text: 'to open', isCorrect: false },
            { text: 'to clean', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Du musst das Fenster {{zumachen}}.',
          'Ich {{mache}} die Tür {{zu}}.',
          'Er hat den Laden schon {{zugemacht}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'zu' (shut, closed) + 'machen' (to make, do) — literally 'to make shut'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'schließen',
            article: null,
            translation: 'to close (more formal, general)',
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
              "'Zu' + 'machen' — making (machen) something 'shut' (zu): closing it.",
          },
          {
            id: 2,
            content:
              "Think of a door swinging 'to' and clicking shut — 'zumachen'.",
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
