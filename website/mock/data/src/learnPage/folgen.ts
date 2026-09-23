import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const folgen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'folgen',
        article: null,
        translation: 'to follow',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To move behind or after someone or something, or to come next in a sequence.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'folgen'?",
          options: [
            { text: 'to follow', isCorrect: true },
            { text: 'to lead the way', isCorrect: false },
            { text: 'to stop moving', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Der Hund {{folgt}} seinem Besitzer überallhin.',
          'Bitte {{folgen}} Sie mir zum Ausgang.',
          'Auf den Sommer {{folgt}} der Herbst.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'folgēn', a purely Germanic word with no direct English cognate, though it shares its root with the noun 'Folge' (consequence, episode).",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Nachlaufen' (to chase after) is narrower — it implies physical pursuit only.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Folgen' sounds like 'follow in' — you follow someone into a place.",
          },
          {
            id: 2,
            content:
              "Picture ducklings walking in a line behind their mother — they folgen her.",
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
