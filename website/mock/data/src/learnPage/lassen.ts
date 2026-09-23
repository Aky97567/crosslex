import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const lassen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'lassen',
        article: null,
        translation: 'to let, leave',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'irregular'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To allow something to happen, to permit someone to do something, or to leave something behind.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'lassen'?",
          options: [
            { text: 'to let, leave', isCorrect: true },
            { text: 'to buy something', isCorrect: false },
            { text: 'to forbid something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Meine Eltern {{lassen}} mich heute Abend ausgehen.',
          'Er {{lässt}} sein Auto in der Werkstatt.',
          'Ich habe meinen Schirm zu Hause {{gelassen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'lazzan', related to English 'let' — both descend from the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Erlauben' (to permit) matches only lassen's permission sense, not its 'leave behind' sense.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Lassen' sounds like 'lasso' — you let a lasso go loose.",
          },
          {
            id: 2,
            content:
              "Picture someone saying 'Let's!' — close to 'lässt' (he lets).",
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
