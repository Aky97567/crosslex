import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const trocknen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'trocknen',
        article: null,
        translation: 'to dry',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'timetable'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To remove moisture from something, either naturally or using a machine.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'trocknen'?",
          options: [
            { text: 'to dry', isCorrect: true },
            { text: 'to wash something', isCorrect: false },
            { text: 'to fold something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Die Wäsche {{trocknet}} auf der Leine.',
          'Ich {{trockne}} mir die Haare mit einem Handtuch.',
          'Die Sonne hat den Boden schnell {{getrocknet}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From the adjective 'trocken' (dry) — trocknen is the verb formed directly from it, meaning 'to make dry'.",
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
              "'Trocknen' contains 'trocken' (dry) — trocknen means making something trocken.",
          },
          {
            id: 2,
            content:
              "Picture laundry flapping on a clothesline in the sun — that's trocknen.",
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
