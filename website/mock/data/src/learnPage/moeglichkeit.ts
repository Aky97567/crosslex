import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const moeglichkeit: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Möglichkeit',
        article: 'die',
        translation: 'possibility, option',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A way that something could happen, or an option available to someone.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Möglichkeit'?",
          options: [
            { text: 'a possibility, option', isCorrect: true },
            { text: 'a certainty', isCorrect: false },
            { text: 'a mistake', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Es gibt mehrere {{Möglichkeiten}}, das Problem zu lösen.',
          'Ich sehe hier keine andere {{Möglichkeit}}.',
          'Diese {{Möglichkeit}} hatten wir noch nicht in Betracht gezogen.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'möglich' (possible) + '-keit' (a noun-forming suffix) — literally 'possibleness'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Option',
            article: 'die',
            translation: 'option',
            similarityScore: 4,
            level: ['B1'],
            register: 'borrowed',
            cefrRelevant: true,
          },
          {
            word: 'Chance',
            article: 'die',
            translation: 'chance, opportunity',
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
              "'Möglichkeit' contains 'möglich' (possible) — a Möglichkeit is simply a possibility.",
          },
          {
            id: 2,
            content:
              "Think of weighing your options before deciding — Möglichkeit.",
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
