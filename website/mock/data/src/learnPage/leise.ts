import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const leise: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'leise',
        article: null,
        translation: 'quiet, soft (sound)',
        partOfSpeech: 'adjective',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Making very little noise; not loud.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'leise'?",
          options: [
            { text: 'quiet, soft', isCorrect: true },
            { text: 'loud', isCorrect: false },
            { text: 'fast', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Bitte sprich {{leise}}, das Baby schläft.',
          'Die Musik ist angenehm {{leise}}.',
          'Er ging ganz {{leise}} aus dem Zimmer.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Diese Melodie ist {{leise}}.',
        positivAttributiv: 'Das ist eine {{leise}} Melodie.',
        komparativPredicativ: 'Diese Melodie ist {{leiser}} als jene.',
        komparativAttributiv: 'Das ist die {{leisere}} Melodie.',
        superlativPredicativ: 'Nachts ist dieser Raum {{am leisesten}}.',
        superlativAttributiv: 'Das ist der {{leiseste}} Raum im Haus.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'lisi', related to a Germanic root for gliding or moving softly.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'ruhig',
            article: null,
            translation: 'calm, quiet',
            similarityScore: 3,
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
              "'Leise' sounds like 'lease' — whisper a quiet 'lease' agreement.",
          },
          {
            id: 2,
            content: "Think of tip-toeing — moving 'leise' (quietly).",
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
