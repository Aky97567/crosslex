import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const essen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'essen',
        article: null,
        translation: 'to eat',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'timetable', 'irregular'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To take food into the mouth, chew, and swallow it.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'essen'?",
          options: [
            { text: 'to eat', isCorrect: true },
            { text: 'to drink', isCorrect: false },
            { text: 'to cook', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich möchte jetzt {{essen}}.',
          'Er {{isst}} gern Pizza.',
          'Wir haben zusammen zu Abend {{gegessen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'ezzan', related to English 'eat' — both from the same ancient Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'speisen',
            article: null,
            translation: 'to dine (formal)',
            similarityScore: 3,
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
            content: "'Essen' sounds close to 'eat 'em' — say it fast.",
          },
          {
            id: 2,
            content:
              "Think of Essen, the German city — but the verb 'essen' just means to eat.",
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
