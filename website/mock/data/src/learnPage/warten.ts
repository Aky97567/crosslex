import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const warten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'warten',
        article: null,
        translation: 'to wait',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'transport'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To stay in a place until something happens or someone arrives.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'warten'?",
          options: [
            { text: 'to wait', isCorrect: true },
            { text: 'to hurry', isCorrect: false },
            { text: 'to arrive', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{warte}} seit einer Stunde auf den Bus.',
          '{{Wartest}} du auf mich?',
          'Wir haben lange auf die Antwort {{gewartet}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'warten', related to English 'ward' and 'watch' — all from a Germanic root meaning to guard or keep watch.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No genuine single-word synonym found — 'abwarten' (to wait
        // and see) is a compound built from 'warten' naming a narrower,
        // more specific nuance, not the same general concept.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Warten' sounds like 'wart on' — imagine you 'wart on' (wait on) someone.",
          },
          {
            id: 2,
            content:
              "Think of a hospital waiting room — German 'Warten' means exactly that.",
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
