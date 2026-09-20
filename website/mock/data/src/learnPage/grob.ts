import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const grob: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'grob',
        article: null,
        translation: 'coarse, rude',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective', 'irregular_comparison'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Rough or coarse in texture, or rude and inconsiderate in manner.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'grob'?",
          options: [
            { text: 'coarse, rude', isCorrect: true },
            { text: 'gentle, polite', isCorrect: false },
            { text: 'quiet', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Das Tuch fühlt sich sehr {{grob}} an.',
          'Er hat {{grob}} auf die Frage reagiert.',
          'Das war eine {{grobe}} Beleidigung.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        comparativeSentence: 'Sein Ton war {{gröber}} als sonst.',
        superlativeSentence: 'Er hat {{am gröbsten}} reagiert.',
        superlativeAttributiveSentence: 'Das war der {{gröbste}} Fehler im Bericht.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'grob', related to English 'gruff' — both from a Germanic root for coarse or rough.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'unhöflich',
            article: null,
            translation: 'impolite, rude',
            similarityScore: 3,
            level: ['B1'],
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
              "'Grob' sounds like 'gruff' — both describe something rough or coarse.",
          },
          {
            id: 2,
            content: "Think of coarse sandpaper — grob.",
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
