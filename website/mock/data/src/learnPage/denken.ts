import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const denken: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'denken',
        article: null,
        translation: 'to think',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To use one's mind to consider something, form ideas, or have thoughts about a topic.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'denken'?",
          options: [
            { text: 'to think', isCorrect: true },
            { text: 'to speak loudly', isCorrect: false },
            { text: 'to sleep well', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{denke}} oft an meine Familie.',
          'Was {{denkst}} du über den Film?',
          'Ich habe die ganze Nacht an sie {{gedacht}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'denken', related to English 'think' — both descend from the same Proto-Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Glauben' (to believe) and 'meinen' (to have an opinion) are narrower than general thinking, not true synonyms.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Denken' sounds like 'think in' — you think in your mind.",
          },
          {
            id: 2,
            content:
              "Picture a thinker with a 'den' full of books, always thinking (denken).",
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
