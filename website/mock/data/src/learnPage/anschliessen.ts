import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const anschliessen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'anschließen',
        article: null,
        translation: 'to connect, hook up',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'trennbar'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To join a device or system to a power source or network so it can work.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'anschließen'?",
          options: [
            { text: 'to connect, hook up', isCorrect: true },
            { text: 'to disconnect', isCorrect: false },
            { text: 'to repair', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich muss den Drucker {{anschließen}}.',
          'Ich {{schließe}} den Drucker ans Netzwerk {{an}}.',
          'Er hat das Gerät schon {{angeschlossen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'an' (to, at) + 'schließen' (to close, connect) — literally 'to close/connect onto' something.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'verbinden',
            article: null,
            translation: 'to connect, link',
            similarityScore: 4,
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
              "'An' + 'schließen' — connecting (schließen) something 'to' (an) a source.",
          },
          {
            id: 2,
            content:
              "Think of plugging a cable 'on' to a socket — anschließen.",
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
