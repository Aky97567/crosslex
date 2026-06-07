import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const abmeldung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Abmeldung',
        article: 'die',
        translation: 'deregistration',
        partOfSpeech: 'noun',
        theme: 'bureaucracy',
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The formal process of deregistering your address when leaving Germany or moving away. Done at the Einwohnermeldeamt. Required by law and needed to cancel contracts and subscriptions tied to your address.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Abmeldung'?",
          options: [
            { text: 'Registering a new address at the local office', isCorrect: false },
            { text: 'Formally deregistering your address when leaving', isCorrect: true },
            { text: 'Cancelling a gym or streaming subscription', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Vor meinem Umzug ins Ausland muss ich die Abmeldung beim Bürgeramt machen. Die Abmeldung ist kostenlos und dauert nur wenige Minuten. Ohne Abmeldung laufen die Beiträge für den Rundfunk weiter.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ab-' (away, off) + 'melden' (to report) + '-ung' (noun suffix). The reverse of Anmeldung (an = at/to, ab = away/off). To deregister is to un-report yourself.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Austragung',
            article: 'die',
            translation: 'removal from a register, deregistration',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Abregistrierung',
            article: 'die',
            translation: 'deregistration',
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
              "'Ab-meldung' — 'ab' means away, like 'absent'. You're reporting yourself absent from your address.",
          },
          {
            id: 2,
            content:
              "An-meldung = check IN. Ab-meldung = check OUT. The prefix tells you the direction.",
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
