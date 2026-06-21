import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const aufhoeren: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'aufhören',
        article: null,
        translation: 'to stop, quit',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'work', 'trennbar'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To stop doing something; to cease an activity. Often used with mit + dative: "mit dem Rauchen aufhören" (to quit smoking).',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'aufhören'?",
          options: [
            { text: 'to listen carefully', isCorrect: false },
            { text: 'to stop, quit', isCorrect: true },
            { text: 'to wake up', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Er will mit dem Rauchen aufhören. Ich höre jetzt mit der Arbeit auf. Sie hat gestern aufgehört zu weinen.',
        alternateForms: ['aufgehört'],
        trennbarTokens: ['höre', 'auf'] as [string, string],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'auf-' (up) + 'hören' (to hear, listen). To listen up — originally to pay attention, then to pause and stop.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'stoppen',
            article: null,
            translation: 'to stop',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'beenden',
            article: null,
            translation: 'to end, finish',
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
              "'Auf' = up, 'hören' = to hear. Hear up — pay attention and stop. Aufhören.",
          },
          {
            id: 2,
            content:
              "Think of a parent saying 'Hör auf!' (Stop it!) — the prefix 'auf' sits at the end as a sharp command.",
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
