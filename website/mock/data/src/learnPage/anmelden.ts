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
        translation: 'to register, enrol, sign up',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['bureaucracy', 'work', 'trennbar'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To officially register — at a residents\' registration office (Einwohnermeldeamt), for a course, or for a service. Used reflexively: "sich anmelden" (to register oneself). Also used to make an appointment.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'anmelden'?",
          options: [
            { text: 'to cancel a registration', isCorrect: false },
            { text: 'to register, sign up', isCorrect: true },
            { text: 'to report a problem', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Sie müssen sich innerhalb von zwei Wochen anmelden. Ich melde mich heute beim Amt an. Er hat sich für den Deutschkurs angemeldet.',
        alternateForms: ['angemeldet'],
        trennbarTokens: ['melde', 'an'] as [string, string],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'an-' (at, to) + 'melden' (to report, notify). To report to — announcing yourself to an authority or system.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'registrieren',
            article: null,
            translation: 'to register',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'einschreiben',
            article: null,
            translation: 'to enrol',
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
              "'An' = at/to, 'melden' = to report. Report yourself to the system — anmelden.",
          },
          {
            id: 2,
            content:
              "'Ich melde mich an' — I sign up. The 'an' goes to the end. Think of ticking your name onto a list.",
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
