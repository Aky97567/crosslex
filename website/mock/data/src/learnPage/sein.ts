import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const sein: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sein',
        article: null,
        translation: 'to be',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To exist, or to have a particular identity, quality, or state.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sein'?",
          options: [
            { text: 'to be', isCorrect: true },
            { text: 'to have something', isCorrect: false },
            { text: 'to do something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{bin}} müde.',
          '{{Bist}} du heute zu Hause?',
          'Wir sind gestern im Kino {{gewesen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'sīn', directly related to English 'be'/'is' — both descend from the same ancient Indo-European root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No clean single-word synonym — the most basic verb in the language.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Sein' and English 'be' share an ancient common root — one of the oldest words in any language.",
          },
          {
            id: 2,
            content:
              "Picture pointing to yourself and saying 'Ich bin...' — that's sein.",
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
