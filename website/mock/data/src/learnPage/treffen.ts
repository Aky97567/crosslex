import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const treffen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich treffen',
        article: null,
        translation: 'to meet (with someone)',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'timetable', 'reflexiv'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To come together with someone at an agreed time or place.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question:
            "What is the best guess for the meaning of 'sich treffen'?",
          options: [
            { text: 'to meet (with someone)', isCorrect: true },
            { text: 'to leave', isCorrect: false },
            { text: 'to call', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Wir wollen uns morgen {{treffen}}.',
          'Sie {{trifft}} sich mit Freunden im Café.',
          'Ich habe mich gestern mit ihm {{getroffen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'treffan', originally meaning 'to hit, strike' — the sense shifted to 'meet' via 'to hit upon' someone.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'begegnen',
            article: null,
            translation: 'to meet, encounter (formal)',
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
              "'Treffen' originally meant 'to hit' — you 'hit upon' a friend when you meet them.",
          },
          {
            id: 2,
            content:
              "Think of a 'treff-point' — a meeting point — 'sich treffen' means to meet up.",
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
