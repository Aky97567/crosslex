import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const bleiben: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'bleiben',
        article: null,
        translation: 'to stay, remain',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To continue to be in a place or in a particular state, without leaving or changing.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'bleiben'?",
          options: [
            { text: 'to stay, remain', isCorrect: true },
            { text: 'to leave a place', isCorrect: false },
            { text: 'to change completely', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{bleibe}} heute Abend zu Hause.',
          '{{Bleib}} ruhig, alles wird gut!',
          'Wir sind eine Woche in Berlin {{geblieben}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'bilīban', distantly related to English 'leave' — both come from an old Germanic root about what remains behind.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'verbleiben',
            article: null,
            translation: 'to remain (formal)',
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
              "'Bleiben' is distantly related to English 'leave' — both come from an old root about 'what remains'.",
          },
          {
            id: 2,
            content:
              "Picture staying in your favorite armchair all evening — that's bleiben.",
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
