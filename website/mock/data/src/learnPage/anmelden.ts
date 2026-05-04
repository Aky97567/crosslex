import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const anmelden: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'anmelden',
        article: null,
        translation: 'to register',
        partOfSpeech: 'verb',
        level: ['B1'],
        representativeImageUrl: 'https://picsum.photos/seed/anmelden/300/200',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To officially register yourself at an address or with an authority, such as the residents\' registration office.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What does 'anmelden' mean?",
          options: [
            { text: 'To officially register with an authority', isCorrect: true },
            { text: 'To cancel a contract or service', isCorrect: false },
            { text: 'To apply for financial support', isCorrect: false },
            { text: 'To transfer money to another account', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich muss mich innerhalb von zwei Wochen nach dem Umzug beim Einwohnermeldeamt anmelden. Ohne Anmeldung bekommt man keine offizielle Adresse in Deutschland.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          'From "an" (at/to) + "melden" (to report/notify), from Middle High German "melden". Literally means to report oneself to a place.',
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'abmelden',
            article: null,
            translation: 'to deregister',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'ummelden',
            article: null,
            translation: 'to re-register at a new address',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'registrieren',
            article: null,
            translation: 'to register',
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
              'Think "an" = at, "melden" = to report. You are reporting yourself at a new place.',
            imageUrl: 'https://picsum.photos/seed/anmelden1/300/200',
          },
          {
            id: 2,
            content:
              'Imagine walking up to an office and announcing: "I am here!" — that\'s anmelden.',
            imageUrl: 'https://picsum.photos/seed/anmelden2/300/200',
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
