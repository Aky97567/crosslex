import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const kuendigung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Kündigung',
        article: 'die',
        translation: 'termination notice, dismissal',
        partOfSpeech: 'noun',
        themes: ['work', 'bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A formal written notice ending an employment contract or rental agreement. Both employers and employees (or landlords and tenants) must give notice according to legally defined periods.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Kündigung'?",
          options: [
            { text: 'A formal notice ending a contract or employment', isCorrect: true },
            { text: 'A renewal of an existing agreement', isCorrect: false },
            { text: 'A request for a pay raise', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe eine Kündigung von meinem Vermieter erhalten. Die Kündigung muss schriftlich eingereicht werden. Nach der Kündigung habe ich drei Monate Zeit, eine neue Wohnung zu finden.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'kündigen' (to give notice, to terminate) + '-ung' (noun suffix). 'Kündigen' traces back to 'kund' (known, public) — making known that you are ending an agreement.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Entlassung',
            article: 'die',
            translation: 'dismissal, discharge',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Auflösung',
            article: 'die',
            translation: 'dissolution, termination',
            similarityScore: 3,
            level: ['B2'],
            cefrRelevant: true,
          },
          {
            word: 'Aufkündigung',
            article: 'die',
            translation: 'cancellation, notice of termination',
            similarityScore: 5,
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
              "'Kündigung' sounds like 'condition gone' — when you receive one, the conditions of your contract are gone.",
          },
          {
            id: 2,
            content:
              "Think of 'kündig' as 'cue and dig' — it's the official cue to dig yourself out of a job or apartment.",
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
