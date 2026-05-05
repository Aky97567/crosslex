import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const aufenthalt: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Aufenthalt',
        article: 'der',
        translation: 'stay, residence',
        partOfSpeech: 'noun',
        level: ['B1'],
        representativeImageUrl:
          'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The period of time a person stays in a place. In legal and administrative contexts it refers to the legal right to reside in Germany, as in Aufenthaltserlaubnis (residence permit).',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Aufenthalt'?",
          options: [
            { text: 'A work permit issued by the employment agency', isCorrect: false },
            { text: 'A stay or period of residence', isCorrect: true },
            { text: 'A type of public transport pass', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Mein Aufenthalt in Deutschland ist auf zwei Jahre befristet. Ich muss den Aufenthalt rechtzeitig verlängern lassen. Der Aufenthalt wurde wegen meiner Arbeitstätigkeit genehmigt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'auf-' (up, at) + 'halten' (to hold, to stop) + '-t' (noun suffix). Literally: a holding-up or stopping-place — the place where you pause and remain.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Aufenthaltserlaubnis',
            article: 'die',
            translation: 'residence permit',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Wohnsitz',
            article: 'der',
            translation: 'place of residence, domicile',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Visum',
            article: 'das',
            translation: 'visa',
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
              "'Auf-enthalt' — you 'halt' (stop) 'auf' (at/on) Germany. Your Aufenthalt is where you've stopped and stayed.",
            imageUrl:
              'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
          },
          {
            id: 2,
            content:
              "Think of 'halt' as in halting your journey — Aufenthalt is the halt in your travels where you put down roots.",
            imageUrl:
              'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
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
