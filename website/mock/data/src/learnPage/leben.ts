import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const leben: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'leben',
        article: null,
        translation: 'to live',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To be alive, or to have one's home in a particular place.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'leben'?",
          options: [
            { text: 'to live', isCorrect: true },
            { text: 'to die', isCorrect: false },
            { text: 'to sleep', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{lebe}} seit drei Jahren in Berlin.',
          'Meine Großeltern {{leben}} auf dem Land.',
          'Er hat lange in Frankreich {{gelebt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'lebēn', directly related to English 'live' — both share the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Wohnen' matches only leben's 'reside' sense, not its broader 'be alive' sense.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Leben' looks and sounds like English 'live-en' — an easy direct match.",
          },
          {
            id: 2,
            content:
              "Picture your daily life unfolding — that's leben.",
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
