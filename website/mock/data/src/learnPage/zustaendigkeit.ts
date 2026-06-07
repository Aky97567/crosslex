import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const zustaendigkeit: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Zuständigkeit',
        article: 'die',
        translation: 'responsibility, jurisdiction, competence',
        partOfSpeech: 'noun',
        themes: ['bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The authority, responsibility, or official competence for a particular area, task, or matter.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Zuständigkeit'?",
          options: [
            { text: 'A geographic location', isCorrect: false },
            { text: 'Official responsibility or jurisdiction for a matter', isCorrect: true },
            { text: 'A type of professional qualification', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Die Zuständigkeit für diese Angelegenheit liegt beim Finanzamt. Das fällt nicht in meine Zuständigkeit. Welche Behörde hat hier die Zuständigkeit?',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'zuständig' (responsible, competent) + '-keit' (noun suffix). 'Zuständig' comes from 'zu' (to) + 'ständig' (standing/constant), meaning someone who stands in charge of something.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Verantwortung',
            article: 'die',
            translation: 'responsibility',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Kompetenz',
            article: 'die',
            translation: 'competence, authority',
            similarityScore: 4,
            level: ['B2'],
            register: 'borrowed',
            cefrRelevant: true,
          },
          {
            word: 'Befugnis',
            article: 'die',
            translation: 'authority, power',
            similarityScore: 3,
            level: ['C1'],
            cefrRelevant: false,
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
              "'Zuständig' = 'zu' (to) + 'ständig' (standing) – someone who is always standing by, ready to handle this topic.",
          },
          {
            id: 2,
            content:
              "Think of a guard who 'stands' (ständig) 'at' (zu) the gate – that is their Zuständigkeit, their domain.",
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
