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
        translation: 'to deregister',
        partOfSpeech: 'verb',
        level: ['B1'],
        representativeImageUrl: 'https://picsum.photos/seed/abmelden/300/200',
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'To officially cancel a registration, such as deregistering from an address when leaving Germany or a city.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What does 'abmelden' mean?",
          options: [
            { text: 'To officially cancel a registration', isCorrect: true },
            { text: 'To officially register at a new address', isCorrect: false },
            { text: 'To submit a formal application', isCorrect: false },
            { text: 'To prove identity at an office', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Wenn Sie aus Deutschland ausziehen, müssen Sie sich beim Einwohnermeldeamt abmelden. Die Abmeldung muss persönlich oder schriftlich erfolgen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          'From "ab" (off/away) + "melden" (to report/notify). The prefix "ab-" signals reversal, making it the direct opposite of "anmelden".',
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'anmelden',
            article: null,
            translation: 'to register',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'kündigen',
            article: null,
            translation: 'to cancel / give notice',
            similarityScore: 3,
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
              '"Ab" means away — you are reporting yourself away from a place. The opposite of anmelden.',
            imageUrl: 'https://picsum.photos/seed/abmelden1/300/200',
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
