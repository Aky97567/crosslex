import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const putzen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'putzen',
        article: null,
        translation: 'to clean',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'timetable'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To clean something by wiping, scrubbing, or polishing it.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'putzen'?",
          options: [
            { text: 'to clean', isCorrect: true },
            { text: 'to break', isCorrect: false },
            { text: 'to cook', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{putze}} am Samstag die Wohnung.',
          'Er {{putzt}} jeden Morgen seine Zähne.',
          'Wir haben die Fenster {{geputzt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Middle High German 'butzen', originally meaning to polish or trim — unrelated to English, but a good example of German's many specific household-task verbs.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'reinigen',
            article: null,
            translation: 'to clean (more formal)',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'säubern',
            article: null,
            translation: 'to clean, cleanse',
            similarityScore: 3,
            level: ['B1'],
            register: 'formal',
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
              "'Putzen' — put your effort into 'putzen' (cleaning) to make things shine.",
          },
          {
            id: 2,
            content:
              "Imagine polishing shoes until they 'putz' and shine — a sound-alike hook for 'putzen'.",
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
