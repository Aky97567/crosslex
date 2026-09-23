import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const oeffnen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'öffnen',
        article: null,
        translation: 'to open',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To move something, such as a door or window, so that it is no longer closed.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'öffnen'?",
          options: [
            { text: 'to open', isCorrect: true },
            { text: 'to close something', isCorrect: false },
            { text: 'to lock something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Kannst du bitte das Fenster {{öffnen}}?',
          'Der Supermarkt {{öffnet}} um acht Uhr.',
          'Sie hat die Tür {{geöffnet}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From the adjective 'offen' (open) — öffnen is the verb formed directly from it.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'aufmachen',
            article: null,
            translation: 'to open',
            similarityScore: 4,
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
              "'Öffnen' contains 'offen' (open) — öffnen means making something offen.",
          },
          {
            id: 2,
            content:
              "Picture turning a key and opening a door — that's öffnen.",
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
