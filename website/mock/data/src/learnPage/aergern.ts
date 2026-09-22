import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const aergern: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich ärgern',
        article: null,
        translation: 'to be annoyed',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'reflexiv'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To feel annoyed, angry, or irritated about something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sich ärgern'?",
          options: [
            { text: 'to be annoyed', isCorrect: true },
            { text: 'to feel happy', isCorrect: false },
            { text: 'to feel tired', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{ärgere}} mich über den Stau.',
          'Er {{ärgert}} sich, weil der Bus zu spät kommt.',
          'Wir haben uns über die Verspätung {{geärgert}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From the adjective 'arg' (bad, wicked); the noun 'Ärger' captures the feeling that something has gone badly — sich ärgern is literally to be troubled by something bad.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Sich aufregen' (to get worked up) isn't always negative, unlike sich ärgern — not a true synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Ärgern' sounds like 'argue-n' — arguing often makes you sich ärgern.",
          },
          {
            id: 2,
            content:
              "Picture gritting your teeth in frustration — that's sich ärgern.",
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
