import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const spielen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'spielen',
        article: null,
        translation: 'to play',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'timetable'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To engage in games or activities for enjoyment; to play a game, sport, or instrument.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'spielen'?",
          options: [
            { text: 'to play', isCorrect: true },
            { text: 'to work', isCorrect: false },
            { text: 'to sleep', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Kinder {{spielen}} im Park Fußball.',
          'Ich {{spiele}} gern Gitarre.',
          'Wir haben gestern Karten {{gespielt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'spilon', related to English 'spiel' (a fast, persuasive talk) — both trace back to a Germanic root about movement and performance.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No genuine single-word synonym found — nearby words like
        // 'toben' (to romp, play wildly) name a different, more specific
        // activity rather than the same general concept.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Spielen' sounds like 'spiel' — a playful, fast-talking performance.",
          },
          {
            id: 2,
            content:
              "Think of a 'spiel' in English slang for a fun pitch — 'spielen' is literally 'to play'.",
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
