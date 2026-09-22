import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const anmachen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'anmachen',
        article: null,
        translation: 'to turn on, switch on',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'trennbar'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To make a device or light start working by switching it on.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'anmachen'?",
          options: [
            { text: 'to turn on, switch on', isCorrect: true },
            { text: 'to turn off', isCorrect: false },
            { text: 'to break', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Kannst du bitte das Licht {{anmachen}}?',
          'Ich {{mache}} den Fernseher {{an}}.',
          'Er hat die Heizung {{angemacht}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'an' (on) + 'machen' (to make, do) — literally 'to make on', i.e. to switch on.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'einschalten',
            article: null,
            translation: 'to switch on (more technical)',
            similarityScore: 4,
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
              "'An' + 'machen' — making (machen) something 'on' (an): switching it on.",
          },
          {
            id: 2,
            content:
              "Flip a switch and the light comes 'on' — that's 'anmachen'.",
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
