import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const verzoegerung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Verzögerung',
        article: 'die',
        translation: 'delay',
        partOfSpeech: 'noun',
        themes: ['bureaucracy'],
        level: ['B2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'A period of time by which something is made later than planned.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Verzögerung'?",
          options: [
            { text: 'a delay', isCorrect: true },
            { text: 'a cancellation', isCorrect: false },
            { text: 'a solution', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Es kam zu einer {{Verzögerung}} bei der Bearbeitung.',
          'Die {{Verzögerung}} war leider nicht zu vermeiden.',
          'Wir entschuldigen uns für die {{Verzögerung}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ver-' + 'zögern' (to hesitate) — literally 'to cause hesitation', i.e. to delay.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Verspätung',
            article: 'die',
            translation: 'lateness (of transport)',
            similarityScore: 3,
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
              "'Verzögerung' contains 'zögern' (to hesitate) — a delay is caused by hesitation.",
          },
          {
            id: 2,
            content:
              "Think of a process that keeps hesitating before moving forward — Verzögerung.",
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
