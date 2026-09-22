import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const voraussetzung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Voraussetzung',
        article: 'die',
        translation: 'prerequisite, requirement',
        partOfSpeech: 'noun',
        themes: ['bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A condition that must be fulfilled before something else can happen.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Voraussetzung'?",
          options: [
            { text: 'a prerequisite, requirement', isCorrect: true },
            { text: 'a result', isCorrect: false },
            { text: 'a mistake', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ein gültiger Ausweis ist eine {{Voraussetzung}} für die Anmeldung.',
          'Welche {{Voraussetzungen}} muss ich erfüllen?',
          'Deutschkenntnisse sind keine {{Voraussetzung}} für diesen Kurs.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'voraus' (ahead, in advance) + 'setzen' (to set, put) — literally 'something set in advance', i.e. a precondition.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Bedingung',
            article: 'die',
            translation: 'condition',
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
              "'Voraussetzung' — 'voraus' (ahead) + 'setzen' (to set) — something set ahead of time, before the rest can happen.",
          },
          {
            id: 2,
            content:
              "Think of a checklist item you must set in place first — Voraussetzung.",
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
