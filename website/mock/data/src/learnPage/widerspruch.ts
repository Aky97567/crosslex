import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const widerspruch: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Widerspruch',
        article: 'der',
        translation: 'objection / appeal',
        partOfSpeech: 'noun',
        level: ['B1'],
        representativeImageUrl: 'https://picsum.photos/seed/widerspruch/300/200',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A formal objection or legal appeal against an official decision, typically submitted to the authority that issued the decision within a set deadline.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is a 'Widerspruch'?",
          options: [
            { text: 'A formal objection against an official decision', isCorrect: true },
            { text: 'A document granting official permission', isCorrect: false },
            { text: 'A mandatory registration at an authority', isCorrect: false },
            { text: 'A penalty for missing a deadline', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Gegen den Bescheid der Behörde können Sie innerhalb eines Monats Widerspruch einlegen. Der Widerspruch muss schriftlich und begründet eingereicht werden.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          'From "wider" (against, from Old High German "widar") + "Spruch" (saying/ruling, from "sprechen" = to speak). Literally: a counter-ruling or speaking-against.',
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Einspruch',
            article: 'der',
            translation: 'objection / protest',
            similarityScore: 5,
            level: ['B2'],
            cefrRelevant: true,
          },
          {
            word: 'Beschwerde',
            article: 'die',
            translation: 'complaint',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Klage',
            article: 'die',
            translation: 'lawsuit / complaint',
            similarityScore: 3,
            level: ['B2'],
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
              '"Wider" = against, "Spruch" = ruling. A Widerspruch is you speaking against an official ruling.',
            imageUrl: 'https://picsum.photos/seed/widerspruch1/300/200',
          },
          {
            id: 2,
            content:
              'Think "wider" like "wider than expected" — you push back wider against the decision you disagree with.',
            imageUrl: 'https://picsum.photos/seed/widerspruch2/300/200',
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
