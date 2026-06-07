import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const schreiben: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'schreiben',
        article: null,
        translation: 'to write',
        partOfSpeech: 'verb',
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To form letters or words on a surface with a pen or keyboard; to create a text, message, or letter.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'schreiben'?",
          options: [
            { text: 'to read', isCorrect: false },
            { text: 'to write', isCorrect: true },
            { text: 'to speak', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich muss eine E-Mail schreiben. Kannst du mir bitte schreiben? Er hat einen Brief geschrieben.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'scrīban', borrowed from Latin 'scribere' (to write). The same Latin root gives us 'scribe' and 'script' in English.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'tippen',
            article: null,
            translation: 'to type',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'aufschreiben',
            article: null,
            translation: 'to write down, to note',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'notieren',
            article: null,
            translation: 'to jot down, to note',
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
              "'Schreiben' contains 'schrei' which sounds like 'cry' — imagine crying while writing a sad letter.",
          },
          {
            id: 2,
            content:
              "Think of 'scribe' — a scribe schreibt (writes) for a living. Same Latin root.",
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
