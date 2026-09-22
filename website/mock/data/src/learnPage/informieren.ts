import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const informieren: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'informieren',
        article: null,
        translation: 'to inform',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To give someone facts or details about something, especially so they can make a decision.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'informieren'?",
          options: [
            { text: 'To give someone facts or details about something', isCorrect: true },
            { text: 'To hide information from someone', isCorrect: false },
            { text: 'To ask someone for advice', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Behörde muss die Bürger über die neuen Regeln {{informieren}}.',
          'Er {{informiert}} seine Kollegen über die Änderungen.',
          'Wir wurden rechtzeitig über den Termin {{informiert}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Latin 'informare' (to give form to, to instruct), via French 'informer' — the same root gives English 'inform'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'benachrichtigen',
            article: null,
            translation: 'to notify',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'aufklären',
            article: null,
            translation: 'to enlighten, clarify',
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
              "'Informieren' looks almost identical to English 'inform' — same Latin root.",
          },
          {
            id: 2,
            content:
              "Think of giving someone the right 'form' of the facts — 'informieren'.",
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
