import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const lachen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'lachen',
        article: null,
        translation: 'to laugh',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To make sounds and movements of the face and body that show amusement.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'lachen'?",
          options: [
            { text: 'to laugh', isCorrect: true },
            { text: 'to cry', isCorrect: false },
            { text: 'to smile', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Kinder {{lachen}} über den Witz.',
          'Warum {{lachst}} du so laut?',
          'Wir haben den ganzen Abend {{gelacht}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'lahhen', related to English 'laugh' — both share the same ancient Germanic root imitating the sound of laughter.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'lächeln' (to smile) names a different, quieter concept, not
        // the same act — no genuine synonym found.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Lachen' sounds close to 'laugh' — say it out loud and you'll hear the family resemblance.",
          },
          {
            id: 2,
            content:
              "Picture someone laughing so hard they need a good laugh-tissue nearby — a silly hook for 'lachen'.",
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
