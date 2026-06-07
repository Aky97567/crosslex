import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const uebertragen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'übertragen',
        article: null,
        translation: 'to transfer, transmit, broadcast',
        partOfSpeech: 'verb',
        themes: ['bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To move, convey, or transmit something from one person, place, or medium to another; also to broadcast (e.g. TV/radio).',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'übertragen'?",
          options: [
            { text: 'To carry something heavy upstairs', isCorrect: false },
            { text: 'To transfer or transmit something to another place or person', isCorrect: true },
            { text: 'To refuse a delivery', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Das Spiel wird live im Fernsehen übertragen. Bitte übertragen Sie die Daten auf das neue Gerät. Die Verantwortung wurde auf seinen Kollegen übertragen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'über' (over, across) + 'tragen' (to carry). Literally 'to carry across' – moving something from one side to another, physically or figuratively.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'übermitteln',
            article: null,
            translation: 'to transmit, convey',
            similarityScore: 4,
            level: ['B2'],
            cefrRelevant: true,
          },
          {
            word: 'weiterleiten',
            article: null,
            translation: 'to forward, redirect',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'senden',
            article: null,
            translation: 'to send, broadcast',
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
              "'Über' means over and 'tragen' means carry – to übertragen is to carry something over to the other side.",
          },
          {
            id: 2,
            content:
              "Picture a relay race: the runner carries (trägt) the baton over (über) to the next person.",
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
