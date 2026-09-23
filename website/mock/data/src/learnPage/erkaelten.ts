import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const erkaelten: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich erkälten',
        article: null,
        translation: 'to catch a cold',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'health', 'reflexiv'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To become sick with a common cold, usually from cold weather or contact with someone who is already sick.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sich erkälten'?",
          options: [
            { text: 'to catch a cold', isCorrect: true },
            { text: 'to get a sunburn', isCorrect: false },
            { text: 'to feel hungry', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{erkälte}} mich jeden Winter mindestens einmal.',
          'Zieh dir eine Jacke an, sonst {{erkältest}} du dich!',
          'Er hat sich beim Regen {{erkältet}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "Built from 'kalt' (cold) with the prefix 'er-' marking a change of state — sich erkälten is literally 'to become cold', in the sense of catching a cold.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No single-word synonym for this specific illness.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Erkälten' contains 'kalt' (cold) — sich erkälten means catching a cold.",
          },
          {
            id: 2,
            content:
              "Picture shivering in wet clothes — a classic way to sich erkälten.",
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
