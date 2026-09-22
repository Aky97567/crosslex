import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const strecken: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich strecken',
        article: null,
        translation: 'to stretch',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'timetable', 'reflexiv'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To extend one's body or limbs to their full length, often after waking up or sitting for a long time.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sich strecken'?",
          options: [
            { text: 'to stretch', isCorrect: true },
            { text: 'to sit down', isCorrect: false },
            { text: 'to fall asleep', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{strecke}} mich jeden Morgen nach dem Aufwachen.',
          'Er {{streckt}} sich nach der langen Autofahrt.',
          'Wir haben uns vor dem Sport {{gestreckt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'strecchen', related to English 'stretch' — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'dehnen',
            article: null,
            translation: 'to stretch, extend (muscles)',
            similarityScore: 3,
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
              "'Strecken' looks and sounds like English 'stretch in' — you stretch yourself out.",
          },
          {
            id: 2,
            content:
              "Picture reaching your arms high above your head — that's dich strecken.",
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
