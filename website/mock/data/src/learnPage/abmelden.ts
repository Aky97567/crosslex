import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const abmelden: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'abmelden',
        article: null,
        translation: 'to deregister, cancel a registration',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['bureaucracy', 'trennbar'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To cancel or undo a registration — deregistering your address when moving away, unsubscribing from a service, or signing out of a system. The counterpart of anmelden.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'abmelden'?",
          options: [
            { text: 'to sign up for a service', isCorrect: false },
            { text: 'to deregister, cancel a registration', isCorrect: true },
            { text: 'to renew a permit', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Wenn Sie die Stadt verlassen, müssen Sie sich abmelden. Ich melde mich jetzt beim alten Amt ab. Sie hat ihr Auto beim Straßenverkehrsamt abgemeldet.',
        alternateForms: ['abgemeldet'],
        trennbarTokens: ['melde', 'ab'] as [string, string],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ab-' (away, off) + 'melden' (to report, notify). To report yourself away — notifying authorities that you are leaving.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'anmelden',
            article: null,
            translation: 'to register, sign up',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'austragen',
            article: null,
            translation: 'to remove from a list',
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
              "'Ab' = away/off, 'melden' = to report. Report yourself away — abmelden. The reverse of anmelden.",
          },
          {
            id: 2,
            content:
              "Moving out of Germany? 'Ich melde mich ab.' The 'ab' separates to the end — you're officially stepping off the register.",
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
