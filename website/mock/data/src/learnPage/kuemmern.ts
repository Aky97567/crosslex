import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const kuemmern: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'sich kümmern',
        article: null,
        translation: 'to take care of, deal with',
        partOfSpeech: 'verb',
        themes: ['daily_life', 'reflexiv'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning: 'To take care of or deal with someone or something.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'sich kümmern'?",
          options: [
            { text: 'to take care of, deal with', isCorrect: true },
            { text: 'to ignore', isCorrect: false },
            { text: 'to destroy', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage: [
          'Ich muss mich um die Unterlagen {{kümmern}}.',
          'Sie {{kümmert}} sich liebevoll um ihre Kinder.',
          'Er hat sich um alles {{gekümmert}}.',
        ],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Middle High German 'kummer' (grief, trouble) — originally meant to be troubled by something, which shifted to actively dealing with it.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'sich sorgen um',
            article: null,
            translation: 'to worry about, care for',
            similarityScore: 3,
            level: ['B1'],
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
              "'Kümmern' relates to 'Kummer' (trouble, grief) — taking care of trouble is sich kümmern.",
          },
          {
            id: 2,
            content:
              "Think of tending to a problem before it becomes real 'Kummer' — sich kümmern.",
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
