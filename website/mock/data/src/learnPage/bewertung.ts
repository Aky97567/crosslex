import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const bewertung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Bewertung',
        article: 'die',
        translation: 'evaluation, rating',
        partOfSpeech: 'noun',
        themes: ['work', 'daily_life'],
        level: ['B2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'A judgment or rating of how good or important something is.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Bewertung'?",
          options: [
            { text: 'an evaluation, rating', isCorrect: true },
            { text: 'a purchase', isCorrect: false },
            { text: 'a complaint', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Das Restaurant hat eine gute {{Bewertung}} bekommen.',
          'Die {{Bewertung}} der Bewerber dauert eine Woche.',
          'Lesen Sie die {{Bewertungen}} vor dem Kauf.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'be-' + 'Wert' (value, worth) — literally 'to assign value' to something.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Beurteilung',
            article: 'die',
            translation: 'assessment, judgment (formal)',
            similarityScore: 4,
            level: ['B1'],
            register: 'formal',
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
              "'Bewertung' contains 'Wert' (value) — a Bewertung assigns value to something.",
          },
          {
            id: 2,
            content:
              "Think of star ratings assigning value to a product — Bewertung.",
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
