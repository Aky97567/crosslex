import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const schneiden: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich schneiden',
        article: null,
        translation: 'to cut oneself',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'reflexiv'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To accidentally injure oneself with something sharp, such as a knife.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sich schneiden'?",
          options: [
            { text: 'to cut oneself', isCorrect: true },
            { text: 'to burn oneself', isCorrect: false },
            { text: 'to wash oneself', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Pass auf, du {{schneidest}} dich noch!',
          'Ich habe mich beim Kochen {{geschnitten}}.',
          'Er {{schneidet}} sich oft beim Rasieren.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'snidan', related to the archaic English word 'snithe' (to cut) — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Sich verletzen' (to injure oneself) is broader — it covers any injury, not specifically a cut.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Schneiden' sounds like 'snide-n' — a sharp, cutting remark, just like a sharp cut.",
          },
          {
            id: 2,
            content:
              "Picture a small plaster (Pflaster) after you've dich geschnitten.",
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
