import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const stimmen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'stimmen',
        article: null,
        translation: 'to be correct, right',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To be true or correct, or to agree with the facts.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'stimmen'?",
          options: [
            { text: 'to be correct, right', isCorrect: true },
            { text: 'to be false', isCorrect: false },
            { text: 'to be unclear', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Das {{stimmt}} nicht, das war ganz anders.',
          'Die Rechnung {{stimmt}} genau.',
          'Seine Aussage hat am Ende {{gestimmt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From the noun 'Stimme' (voice) — stimmen originally meant 'to tune' an instrument to the right pitch, and broadened to mean 'to be correct'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'zutreffen',
            article: null,
            translation: 'to be correct, apply (formal)',
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
              "'Stimmen' contains 'Stimme' (voice) — something that stimmt is 'in tune', correct.",
          },
          {
            id: 2,
            content:
              "Picture checking a receipt and nodding — 'Ja, das stimmt.'",
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
