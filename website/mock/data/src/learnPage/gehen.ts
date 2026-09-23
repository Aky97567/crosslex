import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const gehen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'gehen',
        article: null,
        translation: 'to go, walk',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To move from one place to another, usually on foot.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'gehen'?",
          options: [
            { text: 'to go, walk', isCorrect: true },
            { text: 'to sit down', isCorrect: false },
            { text: 'to sleep', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{gehe}} jeden Tag zur Arbeit.',
          'Wir {{gehen}} heute ins Kino.',
          'Er ist schon nach Hause {{gegangen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'gan', related to English 'go' — both descend from the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'laufen',
            article: null,
            translation: 'to walk, run',
            similarityScore: 3,
            level: ["A1"],
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
              "'Gehen' sounds a bit like 'go-en' — an easy connection to English 'go'.",
          },
          {
            id: 2,
            content:
              "Picture walking out the front door — 'Ich gehe jetzt.'",
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
