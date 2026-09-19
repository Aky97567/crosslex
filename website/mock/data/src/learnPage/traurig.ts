import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const traurig: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'traurig',
        article: null,
        translation: 'sad',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Feeling or showing unhappiness or sorrow.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'traurig'?",
          options: [
            { text: 'sad', isCorrect: true },
            { text: 'happy', isCorrect: false },
            { text: 'angry', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Sie ist sehr {{traurig}} über die Nachricht.',
          'Das war ein {{trauriger}} Film.',
          'Warum siehst du so {{traurig}} aus?',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'trurag', related to 'trauern' (to mourn) — both from a Germanic root for grief.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'unglücklich',
            article: null,
            translation: 'unhappy',
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
              "'Traurig' sounds a bit like 'true grief' — traurig means sad.",
          },
          {
            id: 2,
            content:
              "Think of tears ('Träne' in German) — traurig is the feeling behind them.",
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
