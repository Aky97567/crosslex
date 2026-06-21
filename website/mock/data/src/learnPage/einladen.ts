import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const einladen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'einladen',
        article: null,
        translation: 'to invite',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'work', 'trennbar'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To ask someone to come to an event, meal, or meeting. Also used when someone offers to pay: "Ich lade dich ein" (It\'s my treat).',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'einladen'?",
          options: [
            { text: 'to refuse a request', isCorrect: false },
            { text: 'to invite someone', isCorrect: true },
            { text: 'to send a letter', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich möchte meine Freunde zum Geburtstag einladen. Ich lade dich heute Abend zum Essen ein. Sie hat ihre Kollegen zur Feier eingeladen.',
        alternateForms: ['eingeladen'],
        trennbarTokens: ['lade', 'ein'] as [string, string],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ein-' (in, into) + 'laden' (to load, invite). To load someone in — welcome them into your home or event.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'bitten',
            article: null,
            translation: 'to ask, request',
            similarityScore: 3,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'auffordern',
            article: null,
            translation: 'to invite, urge',
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
              "'Ein' = in, 'laden' = to load/invite. Load someone in — bring them into your world. Einladen.",
          },
          {
            id: 2,
            content:
              "'Ich lade dich ein' also means 'it's on me' — you're loading the treat for them. Double meaning, one verb.",
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
