import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const freund: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Freund',
        article: 'der',
        translation: 'friend (male); boyfriend',
        partOfSpeech: 'noun',
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A male person you know well and like; can also mean boyfriend depending on context. The female form is Freundin.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Freund'?",
          options: [
            { text: 'a colleague at work', isCorrect: false },
            { text: 'a male friend or boyfriend', isCorrect: true },
            { text: 'a neighbour', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Mein Freund wohnt in Berlin. Ich treffe meinen Freund heute Abend. Er ist ein guter Freund von mir.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'friunt', related to English 'friend'. Both come from a Germanic root meaning 'one who loves'.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Freundin',
            article: 'die',
            translation: 'friend (female); girlfriend',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Kollege',
            article: 'der',
            translation: 'colleague',
            similarityScore: 3,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Familie',
            article: 'die',
            translation: 'family',
            similarityScore: 3,
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
              "'Freund' is almost identical to the English 'friend' — same Germanic root, just spelled slightly differently.",
          },
          {
            id: 2,
            content:
              "Think of 'freundlich' (friendly) — a Freund makes you feel freundlich.",
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
