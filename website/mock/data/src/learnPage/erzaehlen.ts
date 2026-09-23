import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const erzaehlen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'erzählen',
        article: null,
        translation: 'to tell, narrate',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To tell a story or describe events to someone, usually by speaking.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'erzählen'?",
          options: [
            { text: 'to tell, narrate', isCorrect: true },
            { text: 'to write a letter', isCorrect: false },
            { text: 'to listen quietly', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Meine Oma {{erzählt}} gern Geschichten.',
          '{{Erzähl}} mir, was passiert ist!',
          'Er hat uns von seiner Reise {{erzählt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Built from 'zählen' (to count) with the prefix 'er-' — erzählen originally meant 'to recount' or list out events, which broadened to 'to tell a story'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Sagen' means to say something briefly, not to narrate a full story.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Erzählen' contains 'zählen' (to count) — to erzählen is to recount events one by one.",
          },
          {
            id: 2,
            content:
              "Picture a grandmother telling a bedtime story — that's erzählen.",
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
