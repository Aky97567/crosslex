import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const krankenhaus: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Krankenhaus',
        article: 'das',
        translation: 'hospital',
        partOfSpeech: 'noun',
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A building where sick or injured people are treated by doctors and nurses; a medical facility for inpatient care.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'das Krankenhaus'?",
          options: [
            { text: 'a doctor\'s surgery', isCorrect: false },
            { text: 'a hospital', isCorrect: true },
            { text: 'a pharmacy', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Er ist im Krankenhaus. Das Krankenhaus ist nicht weit von hier. Sie hat drei Tage im Krankenhaus verbracht.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "A compound of 'krank' (sick) and 'Haus' (house). Literally a 'sick-house' — the house where sick people go.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Klinik',
            article: 'die',
            translation: 'clinic, hospital',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Spital',
            article: 'das',
            translation: 'hospital (Austria/Switzerland)',
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
              "Break it down: Kranken (sick people) + Haus (house) = the house for sick people. Transparent compound!",
          },
          {
            id: 2,
            content:
              "'Krank' sounds like 'cranky' — when you're very cranky (sick), you go to the Krankenhaus.",
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
