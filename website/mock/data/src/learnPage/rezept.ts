import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const rezept: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Rezept',
        article: 'das',
        translation: 'prescription; recipe',
        partOfSpeech: 'noun',
        themes: ['health'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Has two everyday meanings: (1) a medical prescription from a doctor that lets you collect medicine from the Apotheke; (2) a cooking recipe with instructions for preparing a dish.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'das Rezept'?",
          options: [
            { text: 'a prescription from a doctor or a cooking recipe', isCorrect: true },
            { text: 'a medical appointment at the doctor', isCorrect: false },
            { text: 'a bill for medicine from the pharmacy', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich brauche ein Rezept vom Arzt. Das Rezept ist für meine Medikamente. Mit dem Rezept gehe ich in die Apotheke.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Latin 'recipe' (take!), the imperative of 'recipere' (to receive, to take). Old prescriptions began with the word 'recipe' — 'take these ingredients'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Verschreibung',
            article: 'die',
            translation: 'prescription (formal term)',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Kochrezept',
            article: 'das',
            translation: 'cooking recipe',
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
              "Think of 'receipt' — both come from Latin 'recipe'. A Rezept is what you receive from the doctor to take to the pharmacy.",
          },
          {
            id: 2,
            content:
              "The symbol Rx on prescriptions stands for 'recipe' — the same word that became Rezept in German.",
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
