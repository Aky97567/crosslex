import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const aufenthaltserlaubnis: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Aufenthaltserlaubnis',
        article: 'die',
        translation: 'residence permit',
        partOfSpeech: 'noun',
        level: ['B1'],
        representativeImageUrl: 'https://picsum.photos/seed/aufenthaltserlaubnis/300/200',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'An official document issued by the immigration authority permitting a non-EU citizen to legally reside and usually work in Germany for a specified period.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is an 'Aufenthaltserlaubnis'?",
          options: [
            { text: 'A permit allowing a foreigner to legally reside in Germany', isCorrect: true },
            { text: 'A document confirming your address registration', isCorrect: false },
            { text: 'A visa for a short tourist visit', isCorrect: false },
            { text: 'A certificate of language proficiency', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ohne gültige Aufenthaltserlaubnis dürfen Sie in Deutschland nicht dauerhaft leben oder arbeiten. Die Aufenthaltserlaubnis muss rechtzeitig vor dem Ablaufdatum verlängert werden.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          'Compound of "Aufenthalt" (stay/residence) + "Erlaubnis" (permission, from "erlauben" = to allow, from Old High German "irlouben"). Literally: permission to stay.',
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Niederlassungserlaubnis',
            article: 'die',
            translation: 'permanent settlement permit',
            similarityScore: 5,
            level: ['B2'],
            cefrRelevant: true,
          },
          {
            word: 'Visum',
            article: 'das',
            translation: 'visa',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Aufenthalt',
            article: 'der',
            translation: 'stay / residence',
            similarityScore: 4,
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
              '"Aufenthalt" = stay, "Erlaubnis" = permission. It is literally your permission to stay in Germany.',
            imageUrl: 'https://picsum.photos/seed/aufenthaltserlaubnis1/300/200',
          },
          {
            id: 2,
            content:
              'The longest word you will ever write on a form — and the most important one for your life in Germany.',
            imageUrl: 'https://picsum.photos/seed/aufenthaltserlaubnis2/300/200',
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
