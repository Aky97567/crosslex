import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const schminken: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich schminken',
        article: null,
        translation: 'to put on makeup',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'timetable', 'reflexiv'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "To apply makeup to one's face.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sich schminken'?",
          options: [
            { text: 'to put on makeup', isCorrect: true },
            { text: "to brush one's hair", isCorrect: false },
            { text: "to wash one's face", isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{schminke}} mich nur selten.',
          'Sie {{schminkt}} sich jeden Morgen vor der Arbeit.',
          'Sie hat sich für die Party besonders schön {{geschminkt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Borrowed from Dutch 'smink' (theatrical makeup), ultimately related to English 'smudge' — both describe applying or smearing color onto skin.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No single-word synonym.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Schminken' sounds like 'smink-en' — theatre actors always schminken before a show.",
          },
          {
            id: 2,
            content:
              "Picture a mirror, brushes, and lipstick — the tools of schminken.",
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
