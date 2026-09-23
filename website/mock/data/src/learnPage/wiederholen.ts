import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const wiederholen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'wiederholen',
        article: null,
        translation: 'to repeat',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To say or do something again, often to make sure it is understood or remembered.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'wiederholen'?",
          options: [
            { text: 'to repeat', isCorrect: true },
            { text: 'to forget something', isCorrect: false },
            { text: 'to explain something for the first time', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Können Sie das bitte {{wiederholen}}?',
          'Ich {{wiederhole}} den Satz noch einmal.',
          'Er hat die Frage dreimal {{wiederholt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Built from 'wieder' (again) and 'holen' (to fetch) — wiederholen literally means 'to fetch again', in the sense of bringing something back to mind.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No clean single-word synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Wiederholen' contains 'wieder' (again) — wiederholen means doing something again.",
          },
          {
            id: 2,
            content:
              "Picture a teacher saying the same sentence twice for the class — that's wiederholen.",
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
