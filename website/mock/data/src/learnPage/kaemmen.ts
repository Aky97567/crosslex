import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const kaemmen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'kämmen',
        article: null,
        translation: 'to comb',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'timetable'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To arrange or straighten hair using a comb.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'kämmen'?",
          options: [
            { text: 'to comb', isCorrect: true },
            { text: 'to cut something', isCorrect: false },
            { text: 'to wash something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{kämme}} mir vor der Arbeit die Haare.',
          'Sie {{kämmt}} ihrer Tochter die Haare.',
          'Er hat sich schnell die Haare {{gekämmt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From the noun 'Kamm' (comb), from Old High German 'kamb' — related to English 'comb', both sharing the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Bürsten' (to brush) uses a different tool and is a related but distinct action.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Kämmen' contains 'Kamm' (comb) — you always kämmen with a Kamm.",
          },
          {
            id: 2,
            content:
              "Picture combing your hair while saying 'Kamm, Kamm, kämmen' out loud.",
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
