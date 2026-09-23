import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const schaffen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'schaffen',
        article: null,
        translation: 'to manage, accomplish',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To succeed in doing something, especially something difficult; to manage or accomplish a task.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'schaffen'?",
          options: [
            { text: 'to manage, accomplish', isCorrect: true },
            { text: 'to fail at something', isCorrect: false },
            { text: 'to forget something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{schaffe}} das bis Freitag.',
          'Er {{schafft}} die Prüfung bestimmt.',
          'Wir haben die Arbeit rechtzeitig {{geschafft}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'scaffan', related to English 'shape' — both share the sense of bringing something into being.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'bewältigen',
            article: null,
            translation: 'to manage, cope with',
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
              "'Schaffen' sounds like 'shove in' — you shove your way through and manage it.",
          },
          {
            id: 2,
            content:
              "Picture crossing a finish line and shouting 'Ich hab's geschafft!'",
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
