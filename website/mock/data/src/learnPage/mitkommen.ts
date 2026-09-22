import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const mitkommen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'mitkommen',
        article: null,
        translation: 'to come along, join',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'trennbar'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To accompany someone; to go together with someone else.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'mitkommen'?",
          options: [
            { text: 'to come along, join', isCorrect: true },
            { text: 'to stay behind', isCorrect: false },
            { text: 'to leave alone', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Willst du heute Abend {{mitkommen}}?',
          'Ich {{komme}} gern {{mit}}.',
          'Er ist leider nicht {{mitgekommen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'mit' (with) + 'kommen' (to come) — literally 'to come with'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'mitgehen',
            article: null,
            translation: 'to go along, accompany',
            similarityScore: 4,
            level: ['A2'],
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
              "'Mit' + 'kommen' — coming (kommen) 'with' (mit) someone.",
          },
          {
            id: 2,
            content:
              "Think of a friend saying 'I'm coming with!' — that's exactly 'mitkommen'.",
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
