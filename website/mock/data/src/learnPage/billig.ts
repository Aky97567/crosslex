import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const billig: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'billig',
        article: null,
        translation: 'cheap, inexpensive',
        partOfSpeech: 'adjective',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Costing very little money; low in price.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'billig'?",
          options: [
            { text: 'cheap, inexpensive', isCorrect: true },
            { text: 'expensive', isCorrect: false },
            { text: 'free', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Dieses Restaurant ist sehr {{billig}}.',
          'Ich suche eine {{billige}} Wohnung.',
          'Die Tickets waren überraschend {{billig}}.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Dieses Hotel ist {{billig}}.',
        positivAttributiv: 'Das ist ein {{billiges}} Hotel.',
        komparativPredicativ: 'Dieses Hotel ist {{billiger}} als das andere.',
        komparativAttributiv: 'Das ist das {{billigere}} Hotel.',
        superlativPredicativ: 'Dieses Hotel ist {{am billigsten}}.',
        superlativAttributiv: 'Das ist das {{billigste}} Hotel der Stadt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Middle Low German 'billik', originally meaning 'fair, appropriate' — the sense shifted to 'cheap' because a fair price was seen as a low one.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'günstig',
            article: null,
            translation: 'affordable, good value',
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
              "'Billig' sounds like 'bill' — a low bill means something 'billig' (cheap).",
          },
          {
            id: 2,
            content: "Think of a 'billig' price tag — small numbers, small cost.",
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
