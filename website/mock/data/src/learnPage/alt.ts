import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const alt: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'alt',
        article: null,
        translation: 'old',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective', 'irregular_comparison'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Having lived or existed for a long time; not young or new.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'alt'?",
          options: [
            { text: 'old', isCorrect: true },
            { text: 'young', isCorrect: false },
            { text: 'new', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Mein Opa ist sehr {{alt}}.',
          'Das ist ein {{altes}} Haus.',
          'Wie {{alt}} bist du?',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Der Mann ist {{alt}}.',
        positivAttributiv: 'Das ist ein {{alter}} Mann.',
        komparativPredicativ: 'Er ist {{älter}} als sein Bruder.',
        komparativAttributiv: 'Das ist der {{ältere}} Mann.',
        superlativPredicativ: 'Der Mann ist im Dorf {{am ältesten}}.',
        superlativAttributiv: 'Er ist der {{älteste}} Mann im Dorf.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'alt', related to English 'old' — both from the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'betagt',
            article: null,
            translation: 'elderly (formal)',
            similarityScore: 3,
            level: ['B1'],
            register: 'formal',
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
              "Think of the 'ALT' key on an old keyboard — 'alt' means old.",
          },
          {
            id: 2,
            content:
              "Think of an 'altar' — ancient and old — 'alt' means old.",
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
