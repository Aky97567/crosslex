import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const anmeldung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Anmeldung',
        article: 'die',
        translation: 'registration',
        partOfSpeech: 'noun',
        level: ['B1'],
        representativeImageUrl:
          'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The official registration of your address with the local authorities (Einwohnermeldeamt). In Germany, all residents must register within two weeks of moving to a new address.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Anmeldung'?",
          options: [
            { text: 'An online subscription service', isCorrect: false },
            { text: 'Registration, especially of address', isCorrect: true },
            { text: 'A complaint filed with an authority', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Die Anmeldung beim Bürgeramt ist nach dem Umzug Pflicht. Ohne Anmeldung kann man keine Bankverbindung eröffnen. Ich habe meine Anmeldung innerhalb einer Woche erledigt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'an-' (prefix: at, to) + 'melden' (to report, announce) + '-ung' (noun suffix). Literally: the act of reporting yourself to the authorities at your new location.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Ummeldung',
            article: 'die',
            translation: 're-registration (change of address)',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Abmeldung',
            article: 'die',
            translation: 'deregistration',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Registrierung',
            article: 'die',
            translation: 'registration',
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
              "'An-meldung' — you're announcing (melden) yourself at (an) the office. You're saying: I am here, I live here now.",
            imageUrl:
              'https://images.dog.ceo/breeds/pembroke/n02113023_4881.jpg',
          },
          {
            id: 2,
            content:
              "Think of it as 'enrollment' — the first bureaucratic step that unlocks everything else in Germany: bank account, insurance, tax ID.",
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
