import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const fernsehen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'fernsehen',
        article: null,
        translation: 'to watch television',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'trennbar', 'timetable'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To watch programmes on a television set.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'fernsehen'?",
          options: [
            { text: 'to watch television', isCorrect: true },
            { text: 'to listen to the radio', isCorrect: false },
            { text: 'to read a book', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Am Abend möchte ich {{fernsehen}}.',
          'Ich {{sehe}} nach der Arbeit {{fern}}.',
          'Wir haben gestern zusammen {{ferngesehen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'fern' (far, distant) + 'sehen' (to see) — literally 'to see from afar', the same idea behind English 'television' (Greek 'tele-' + Latin 'visio').",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No genuine single-word synonym found at this level.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Fern' + 'sehen' — seeing (sehen) something from far away (fern), just like 'television'.",
          },
          {
            id: 2,
            content:
              "Think of 'tele-vision' — 'fernsehen' is the German version of the same idea.",
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
