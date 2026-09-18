import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const weinen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'weinen',
        article: null,
        translation: 'to cry',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To shed tears, especially because of sadness or pain.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'weinen'?",
          options: [
            { text: 'to cry', isCorrect: true },
            { text: 'to laugh', isCorrect: false },
            { text: 'to shout', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Das Baby {{weint}} die ganze Nacht.',
          'Ich {{weine}} bei traurigen Filmen.',
          'Sie hat vor Freude {{geweint}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'weinon', related to English 'whine' — both come from a Germanic root imitating a plaintive sound.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'heulen',
            article: null,
            translation: 'to cry, bawl (informal)',
            similarityScore: 3,
            level: ['A2'],
            register: 'colloquial',
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
              "'Weinen' sounds like 'whine' — a whiny cry is close to 'weinen'.",
          },
          {
            id: 2,
            content:
              "Picture someone crying into a glass of 'Wein' (wine) — a sound-alike hook for 'weinen'.",
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
