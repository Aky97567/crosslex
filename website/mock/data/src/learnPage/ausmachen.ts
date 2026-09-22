import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const ausmachen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'ausmachen',
        article: null,
        translation: 'to turn off, switch off',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['daily_life', 'trennbar'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To stop a device or light from working by switching it off.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'ausmachen'?",
          options: [
            { text: 'to turn off, switch off', isCorrect: true },
            { text: 'to turn on', isCorrect: false },
            { text: 'to repair', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Kannst du bitte das Licht {{ausmachen}}?',
          'Ich {{mache}} den Fernseher {{aus}}.',
          'Sie hat den Herd {{ausgemacht}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'aus' (out, off) + 'machen' (to make, do) — literally 'to make off', i.e. to switch off.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'ausschalten',
            article: null,
            translation: 'to switch off (more technical)',
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
              "'Aus' + 'machen' — making (machen) something 'out'/off (aus): switching it off.",
          },
          {
            id: 2,
            content:
              "Think of pressing a button to make the light go 'out' — 'ausmachen'.",
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
