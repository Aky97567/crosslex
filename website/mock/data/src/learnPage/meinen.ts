import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const meinen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'meinen',
        article: null,
        translation: 'to think, mean',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To have an opinion about something, or to intend a particular meaning by what one says.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'meinen'?",
          options: [
            { text: 'to think, mean', isCorrect: true },
            { text: 'to remember something', isCorrect: false },
            { text: 'to forget something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Was {{meinst}} du dazu?',
          'Ich {{meine}}, wir sollten früher losfahren.',
          'Das habe ich nicht böse {{gemeint}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'meinen', related to English 'mean' — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'finden',
            article: null,
            translation: "to think, find (in one's opinion)",
            similarityScore: 3,
            level: ["A2"],
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
              "'Meinen' sounds like 'mean in' — what do you mean?",
          },
          {
            id: 2,
            content:
              "Picture raising your hand to share your 'Meinung' (opinion) — that's meinen.",
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
