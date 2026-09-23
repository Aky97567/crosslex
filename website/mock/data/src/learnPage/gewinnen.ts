import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const gewinnen: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'gewinnen',
        article: null,
        translation: 'to win',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To succeed in a competition, game, or contest; to be the winner.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'gewinnen'?",
          options: [
            { text: 'to win', isCorrect: true },
            { text: 'to lose a game', isCorrect: false },
            { text: 'to play a game', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Unsere Mannschaft {{gewinnt}} fast jedes Spiel.',
          'Wer {{gewinnt}} den Wettbewerb?',
          'Wir haben das Finale {{gewonnen}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'giwinnan', related to English 'win' — both descend from the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // No clean single-word synonym at this level.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Gewinnen' looks and sounds like English 'win-nen' — an easy direct match.",
          },
          {
            id: 2,
            content:
              "Picture crossing the finish line first — 'Ich gewinne!'",
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
