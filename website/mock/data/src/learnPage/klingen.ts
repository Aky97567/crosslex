import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const klingen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'klingen',
        article: null,
        translation: 'to sound',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To produce a particular sound, or to give a certain impression when heard.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'klingen'?",
          options: [
            { text: 'to sound', isCorrect: true },
            { text: 'to smell like something', isCorrect: false },
            { text: 'to taste like something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Das {{klingt}} nach einer guten Idee.',
          'Seine Stimme {{klingt}} heute anders.',
          'Die Musik hat wunderschön {{geklungen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'klingan', related to English 'clink' — both are imitative words describing a ringing or resonant sound.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Tönen' is narrower — it leans toward a musical or artificial tone specifically.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Klingen' sounds like 'cling-en' — a bell's cling is exactly how it klingt.",
          },
          {
            id: 2,
            content:
              "Picture a bell ringing — 'Das klingt gut!' describes how something sounds.",
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
