import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const ummeldung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Ummeldung',
        article: 'die',
        translation: 're-registration of address',
        partOfSpeech: 'noun',
        themes: ['bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The official process of registering a new address with the local residents\' registration office (Einwohnermeldeamt) when moving within Germany. By law, you must complete the Ummeldung within two weeks of moving. You need your ID and a written confirmation from your landlord (Wohnungsgeberbestätigung). Failure to register can result in a fine.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Ummeldung'?",
          options: [
            { text: 'The official re-registration of your address after moving', isCorrect: true },
            { text: 'The cancellation of a registration at a government office', isCorrect: false },
            { text: 'A form submitted to update your name in official records', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Nach meinem Umzug habe ich sofort eine Ummeldung beim Einwohnermeldeamt gemacht. Die Ummeldung muss innerhalb von zwei Wochen nach dem Einzug erfolgen. Für die Ummeldung brauche ich meinen Ausweis und eine Bestätigung vom Vermieter.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'um-' (re-, over again) + 'Meldung' (registration, report). 'Meldung' comes from 'melden' (to report, to register) — an Ummeldung is simply registering yourself again at a new address.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Adressänderung',
            article: 'die',
            translation: 'change of address',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Anmeldung',
            article: 'die',
            translation: 'initial registration',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Wohnsitzwechsel',
            article: 'der',
            translation: 'change of residence',
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
              "'Um-MELDUNG' — 'um' means re- and 'Meldung' means registration. It is simply: re-registration at a new address.",
          },
          {
            id: 2,
            content:
              "Think of 'um' as turning around — you are turning your registration around to point at a new address.",
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
