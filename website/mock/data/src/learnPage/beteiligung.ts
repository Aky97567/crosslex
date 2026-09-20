import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const beteiligung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Beteiligung',
        article: 'die',
        translation: 'participation, involvement',
        partOfSpeech: 'noun',
        themes: ['daily_life', 'work'],
        level: ['B2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'The act of taking part in or having a share in something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Beteiligung'?",
          options: [
            { text: 'participation, involvement', isCorrect: true },
            { text: 'a refusal', isCorrect: false },
            { text: 'a complaint', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die {{Beteiligung}} an der Wahl war hoch.',
          'Seine {{Beteiligung}} am Projekt war entscheidend.',
          'Wir freuen uns über Ihre {{Beteiligung}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'beteiligen' (to involve), built on 'Teil' (part) — literally 'to give someone a part' in something.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Teilnahme',
            article: 'die',
            translation: 'participation',
            similarityScore: 4,
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
              "'Beteiligung' contains 'Teil' (part) — participation means having a part in something.",
          },
          {
            id: 2,
            content: "Think of everyone contributing their part — Beteiligung.",
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
