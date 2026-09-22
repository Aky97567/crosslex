import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const entschuldigen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich entschuldigen',
        article: null,
        translation: 'to apologize',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'reflexiv'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To say sorry for something you did wrong.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sich entschuldigen'?",
          options: [
            { text: 'to apologize', isCorrect: true },
            { text: 'to accuse', isCorrect: false },
            { text: 'to thank', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich möchte mich für die Verspätung {{entschuldigen}}.',
          'Er {{entschuldigt}} sich nie für seine Fehler.',
          'Sie hat sich sofort {{entschuldigt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ent-' (removing) + 'Schuld' (guilt, fault) — literally 'to remove guilt' from yourself by apologizing.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'sich rechtfertigen',
            article: null,
            translation: 'to justify oneself',
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
              "'Entschuldigen' contains 'Schuld' (guilt) — apologizing removes (ent-) the guilt.",
          },
          {
            id: 2,
            content: "Think of clearing your 'fault' away — sich entschuldigen.",
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
