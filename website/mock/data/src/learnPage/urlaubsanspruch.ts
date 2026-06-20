import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const urlaubsanspruch: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Urlaubs­anspruch',
        article: 'der',
        translation: 'holiday entitlement, entitlement to annual leave',
        partOfSpeech: 'noun',
        themes: ['work', 'bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'The legal right of an employee to paid holiday leave. In Germany the statutory minimum is 20 working days per year based on a five-day week, though most contracts offer more. The Urlaubsanspruch must generally be taken within the same calendar year and cannot simply be paid out as cash instead.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Urlaubsanspruch'?",
          options: [
            { text: 'The legal right to a minimum number of paid holiday days per year', isCorrect: true },
            { text: 'A formal request to take time off work submitted to your employer', isCorrect: false },
            { text: 'The total number of sick days permitted in a calendar year', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Mein Urlaubsanspruch beträgt 28 Tage pro Jahr. Ich habe meinen Urlaubsanspruch bis Oktober noch nicht vollständig genutzt. Der Arbeitgeber muss den gesetzlichen Urlaubsanspruch gewähren.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Urlaub' (holiday, leave) + 'Anspruch' (claim, entitlement). An Anspruch is a legal claim — your Urlaubsanspruch is your legally grounded claim to time away from work.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Jahresurlaub',
            article: 'der',
            translation: 'annual leave',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Erholungsurlaub',
            article: 'der',
            translation: 'recreational leave',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Freistellung',
            article: 'die',
            translation: 'release from work duties',
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
              "'Urlaub-ANSPRUCH' — Urlaub = holiday, Anspruch = claim. Your holiday claim: what the law says you are owed.",
          },
          {
            id: 2,
            content:
              "Think of 'your-leave-on-spruch' — a Spruch (ruling) that declares your leave days are legally yours.",
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
