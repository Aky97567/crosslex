import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const behoerde: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Behörde',
        article: 'die',
        translation: 'authority, government office',
        partOfSpeech: 'noun',
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'An official government body or public authority responsible for administering laws and regulations, such as the immigration office or the registration office.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Behörde'?",
          options: [
            { text: 'A private company offering public services', isCorrect: false },
            { text: 'A government authority or public office', isCorrect: true },
            { text: 'A type of postal service', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Die Behörde bearbeitet Anträge innerhalb von vier Wochen. Ich musste persönlich zur Behörde gehen, um die Dokumente einzureichen. Die zuständige Behörde hat meinen Antrag genehmigt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'behören' (archaic: to belong to, to be responsible for) + '-de' (noun suffix). The root relates to 'hören' (to hear/obey) — a body that must be heard and obeyed.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Amt',
            article: 'das',
            translation: 'office, authority',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Zuständigkeit',
            article: 'die',
            translation: 'jurisdiction, responsibility',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Institution',
            article: 'die',
            translation: 'institution',
            similarityScore: 3,
            level: ['B1'],
            register: 'formal',
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
              "Think 'Be-HEARD-e' — the Behörde is the body you must be heard by to get anything done officially in Germany.",
          },
          {
            id: 2,
            content:
              "'Behörde' sounds like 'be-horrid' — the place that can feel horrid to visit but is unavoidable in German bureaucracy.",
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
