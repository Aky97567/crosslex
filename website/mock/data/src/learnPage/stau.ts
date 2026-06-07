import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const stau: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Stau',
        article: 'der',
        translation: 'traffic jam',
        partOfSpeech: 'noun',
        theme: 'transport',
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A long line of vehicles on a road that are not moving or moving very slowly; a traffic jam.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Stau'?",
          options: [
            { text: 'a car park', isCorrect: false },
            { text: 'a traffic jam', isCorrect: true },
            { text: 'a motorway', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Es gibt einen Stau auf der Autobahn. Ich komme später — ich stecke im Stau. Der Stau dauert zwei Stunden.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'stauen' (to back up, to dam). The same root as 'Staudamm' (dam) — water or traffic that is blocked and held back.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Stockung',
            article: 'die',
            translation: 'traffic congestion, bottleneck',
            similarityScore: 5,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Rückstau',
            article: 'der',
            translation: 'traffic backup, tailback',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Verkehrsbehinderung',
            article: 'die',
            translation: 'traffic obstruction',
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
              "Think of 'stow' — everything is stowed, packed in tight, going nowhere. That's a Stau.",
          },
          {
            id: 2,
            content:
              "'Im Stau stecken' (to be stuck in a Stau) — you'll need this phrase in Germany regularly.",
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
