import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const kennen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'kennen',
        article: null,
        translation: 'to know, be familiar with',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To be familiar with a person, place, or thing, usually from personal experience.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'kennen'?",
          options: [
            { text: 'to know, be familiar with', isCorrect: true },
            { text: 'to know a fact', isCorrect: false },
            { text: 'to forget someone', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{kenne}} diese Stadt sehr gut.',
          '{{Kennst}} du meinen Bruder?',
          'Wir haben uns schon lange {{gekannt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'kennen', related to the archaic English word 'ken' (as in 'beyond my ken', meaning knowledge) — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Wissen' (to know facts) is a different type of knowing, not a true synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Kennen' is related to the old English word 'ken' (knowledge) — 'beyond my ken' means beyond what I kenne.",
          },
          {
            id: 2,
            content:
              "Picture recognizing an old friend's face — that's kennen.",
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
