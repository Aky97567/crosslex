import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const langsam: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'langsam',
        article: null,
        translation: 'slow',
        partOfSpeech: 'adjective',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Moving or happening without much speed; not fast.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'langsam'?",
          options: [
            { text: 'slow', isCorrect: true },
            { text: 'fast', isCorrect: false },
            { text: 'quiet', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Bitte sprich {{langsam}}.',
          'Der Bus fährt heute sehr {{langsam}}.',
          'Ich lerne {{langsam}}, aber sicher.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Diese Schnecke ist {{langsam}}.',
        positivAttributiv: 'Das ist eine {{langsame}} Schnecke.',
        komparativPredicativ: 'Diese Schnecke ist {{langsamer}} als die andere.',
        komparativAttributiv: 'Das ist die {{langsamere}} Schnecke.',
        superlativPredicativ: 'Am Morgen fährt der Bus {{am langsamsten}}.',
        superlativAttributiv: 'Das ist der {{langsamste}} Bus der Stadt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'lang' (long) + '-sam' (a suffix meaning 'characterized by') — literally 'taking a long time'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'gemächlich',
            article: null,
            translation: 'leisurely',
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
              "'Langsam' contains 'lang' (long) — a slow thing takes a 'long' time.",
          },
          {
            id: 2,
            content:
              "Think of a lazy Sunday — everything moves 'langsam' (slow).",
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
