import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const erlauben: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'erlauben',
        article: null,
        translation: 'to allow, permit',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To give someone permission to do something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'erlauben'?",
          options: [
            { text: 'to allow, permit', isCorrect: true },
            { text: 'to forbid something', isCorrect: false },
            { text: 'to ask for something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Meine Eltern {{erlauben}} mir das nicht.',
          'Er {{erlaubt}} mir immer alles.',
          'Sie hat mir die Nutzung ihres Autos {{erlaubt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'irlouben', related to English 'leave' (as in 'by your leave', an old phrase for permission) — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'lassen',
            article: null,
            translation: 'to let, allow',
            similarityScore: 3,
            level: ["A2"],
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
              "'Erlauben' is distantly related to English 'leave', as in 'by your leave' — old-fashioned permission.",
          },
          {
            id: 2,
            content:
              "Picture a parent nodding 'yes' — 'Ich erlaube es.'",
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
