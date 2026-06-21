import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const anziehen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'anziehen',
        article: null,
        translation: 'to put on (clothing); to get dressed',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'trennbar'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To put on a piece of clothing. Used reflexively — "sich anziehen" — to get dressed (dress oneself). The opposite is ausziehen (to take off clothing).',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'anziehen'?",
          options: [
            { text: 'to take off clothing', isCorrect: false },
            { text: 'to put on clothing, get dressed', isCorrect: true },
            { text: 'to wash clothes', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Du musst dich warm anziehen, es ist kalt draußen. Ich ziehe jetzt meinen Mantel an. Sie hat sich schnell angezogen und ist gegangen.',
        alternateForms: ['angezogen'],
        trennbarTokens: ['ziehe', 'an'] as [string, string],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'an-' (on, onto) + 'ziehen' (to pull, draw). To pull clothing on — the opposite of ausziehen (to pull off).",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'ausziehen',
            article: null,
            translation: 'to take off (clothing)',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'tragen',
            article: null,
            translation: 'to wear, carry',
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
              "'An' = on, 'ziehen' = to pull. Pull clothing on — anziehen.",
          },
          {
            id: 2,
            content:
              "'Zieh dich an!' — Get dressed! The 'an' goes to the end. Remember the pair: anziehen (on) vs. ausziehen (off).",
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
