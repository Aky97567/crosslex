import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const fangen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'fangen',
        article: null,
        translation: 'to catch',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'irregular'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To catch something that is moving through the air, or to capture an animal or person.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'fangen'?",
          options: [
            { text: 'to catch', isCorrect: true },
            { text: 'to throw something', isCorrect: false },
            { text: 'to drop something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Der Hund {{fängt}} den Ball im Sprung.',
          'Kannst du den Schlüssel {{fangen}}?',
          'Die Polizei hat den Dieb {{gefangen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'fahan', related to English 'fang' (the tooth used to catch and hold prey) — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'einfangen',
            article: null,
            translation: 'to catch, capture',
            similarityScore: 4,
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
              "'Fangen' is related to English 'fang' — an animal's fangen (catching teeth).",
          },
          {
            id: 2,
            content:
              "Picture a goalkeeper diving to fangen the ball.",
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
