import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const reiten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'reiten',
        article: null,
        translation: 'to ride (a horse)',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To sit on and control an animal, especially a horse, as it moves.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'reiten'?",
          options: [
            { text: 'to ride (a horse)', isCorrect: true },
            { text: 'to walk quickly', isCorrect: false },
            { text: 'to swim', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Sie {{reitet}} jeden Samstag im Park.',
          'Ich {{reite}} nicht so gern, ich habe Angst vor Pferden.',
          'Wir sind letzten Sommer am Strand {{geritten}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'ritan', directly related to English 'ride' — both descend from the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No single-word synonym at this level.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Reiten' sounds just like English 'ride in' — you ride in the saddle.",
          },
          {
            id: 2,
            content:
              "Picture a cowboy calling 'Reiten!' as he jumps on his horse.",
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
