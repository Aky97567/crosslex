import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const lieben: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'lieben',
        article: null,
        translation: 'to love',
        partOfSpeech: 'verb',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To feel deep affection or strong emotional attachment for someone or something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'lieben'?",
          options: [
            { text: 'to love', isCorrect: true },
            { text: 'to dislike someone', isCorrect: false },
            { text: 'to ignore someone', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich {{liebe}} meine Familie über alles.',
          'Er {{liebt}} es, im Garten zu arbeiten.',
          'Sie haben sich schon immer {{geliebt}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Old High German 'liob', related to English 'love' — both descend from the same Germanic root.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        // 'Mögen' (to like) is a weaker feeling than love, not the same concept.
        similarWords: [],
      },
      {
        moduleType: 'mnemonics',
        heading: { text: 'Mnemonics' },
        mnemonics: [
          {
            id: 1,
            content:
              "'Lieben' looks like English 'liven' — love livens up your life.",
          },
          {
            id: 2,
            content:
              "Picture a heart shape while saying 'Ich liebe dich' — I love you.",
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
