import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const anfangen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'anfangen',
        article: null,
        translation: 'to start, begin',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'work', 'trennbar'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To begin or start something — a task, activity, job, or period. Interchangeable with beginnen in most everyday contexts.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'anfangen'?",
          options: [
            { text: 'to finish', isCorrect: false },
            { text: 'to start, begin', isCorrect: true },
            { text: 'to continue', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Wann soll die Arbeit anfangen? Ich fange morgen mit dem Kurs an. Das Projekt hat letzte Woche angefangen.',
        alternateForms: ['angefangen'],
        trennbarTokens: ['fange', 'an'] as [string, string],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'an-' (at, to) + 'fangen' (to catch, grasp). To grasp at the beginning — to take hold of a new task.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'beginnen',
            article: null,
            translation: 'to begin',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'starten',
            article: null,
            translation: 'to start',
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
              "'An' = at/to, 'fangen' = to catch. Catch the start of something — anfangen.",
          },
          {
            id: 2,
            content:
              "The prefix 'an' lands at the end in the present tense: 'Ich fange … an.' Think of the moment when something catches on.",
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
