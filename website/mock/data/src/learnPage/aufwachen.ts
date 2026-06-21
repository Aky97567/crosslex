import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const aufwachen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'aufwachen',
        article: null,
        translation: 'to wake up',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'trennbar'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To wake from sleep; to become conscious after sleeping. An intransitive verb — you cannot wake someone else up with this verb (use "wecken" for that).',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'aufwachen'?",
          options: [
            { text: 'to fall asleep', isCorrect: false },
            { text: 'to wake up', isCorrect: true },
            { text: 'to get up, stand up', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich muss jeden Morgen um sieben Uhr aufwachen. Ich wache heute ohne Wecker auf. Sie ist mitten in der Nacht aufgewacht.',
        alternateForms: ['aufgewacht'],
        trennbarTokens: ['wache', 'auf'] as [string, string],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'auf-' (up) + 'wachen' (to be awake, watch). To come up into wakefulness — consciousness rising.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'aufstehen',
            article: null,
            translation: 'to get up',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'wecken',
            article: null,
            translation: 'to wake someone up',
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
              "'Auf' = up, 'wachen' = to be awake. Come up into awareness — aufwachen.",
          },
          {
            id: 2,
            content:
              "'Ich wache auf' — the 'auf' moves to the end, like your eyes opening upward as you wake.",
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
