import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const abgeben: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'abgeben',
        article: null,
        translation: 'to hand in, submit, drop off',
        partOfSpeech: 'verb',
        trennbar: true,
        themes: ['bureaucracy', 'work', 'trennbar'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To hand something over to someone — submitting a document at an office, dropping off a parcel, or handing in homework. Also used for leaving luggage at a storage counter.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'abgeben'?",
          options: [
            { text: 'to pick up a package', isCorrect: false },
            { text: 'to hand in or drop off', isCorrect: true },
            { text: 'to apply for something', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Sie müssen die Unterlagen persönlich abgeben. Ich gebe den Antrag morgen beim Amt ab. Er hat seine Kündigung schriftlich abgegeben.',
        alternateForms: ['abgegeben'],
        trennbarTokens: ['gebe', 'ab'] as [string, string],
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'ab-' (away, off) + 'geben' (to give). To give away or over — transferring something from your hands to someone else's.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'einreichen',
            article: null,
            translation: 'to submit, file',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'übergeben',
            article: null,
            translation: 'to hand over',
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
              "'Ab' = away/off, 'geben' = to give. Give it away — hand it over. Abgeben.",
          },
          {
            id: 2,
            content:
              "'Ich gebe es ab' — the 'ab' moves to the end. Picture physically passing the document across a desk.",
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
