import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const stark: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'stark',
        article: null,
        translation: 'strong',
        partOfSpeech: 'adjective',
        themes: ['daily_life', 'adjective', 'irregular_comparison'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'Having great physical power or force.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'stark'?",
          options: [
            { text: 'strong', isCorrect: true },
            { text: 'weak', isCorrect: false },
            { text: 'tall', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Er ist sehr {{stark}}.',
          'Das ist ein {{starker}} Kaffee.',
          'Der Wind war heute besonders {{stark}}.',
        ],
      },
      {
        moduleType: 'comparison',
        heading: { text: 'Comparison' },
        positivPredicativ: 'Er ist {{stark}}.',
        positivAttributiv: 'Das ist ein {{starker}} Mann.',
        komparativPredicativ: 'Er ist {{stärker}} als ich.',
        komparativAttributiv: 'Das ist der {{stärkere}} Mann.',
        superlativPredicativ: 'Dieser Kaffee war heute {{am stärksten}}.',
        superlativAttributiv: 'Das ist der {{stärkste}} Kaffee, den es gibt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'starc', related to English 'stark' (as in 'stark contrast') — both from a root meaning rigid or forceful.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'kräftig',
            article: null,
            translation: 'powerful, sturdy',
            similarityScore: 4,
            level: ['A2'],
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
              "'Stark' looks and sounds just like the English word 'stark' — though the meaning has drifted slightly.",
          },
          {
            id: 2,
            content:
              "Think of Tony Stark — strong, powerful — matches 'stark' in German.",
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
