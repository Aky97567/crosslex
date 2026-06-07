import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const vollmacht: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Vollmacht',
        article: 'die',
        translation: 'power of attorney, authorisation',
        partOfSpeech: 'noun',
        theme: 'bureaucracy',
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A written document granting another person the legal authority to act on your behalf. Commonly used when dealing with authorities, signing contracts, or picking up official documents at the post office.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Vollmacht'?",
          options: [
            { text: 'A document granting someone authority to act on your behalf', isCorrect: true },
            { text: 'A written objection to an official decision', isCorrect: false },
            { text: 'A full-time employment contract', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe meiner Freundin eine Vollmacht gegeben, damit sie das Paket für mich abholen kann. Die Vollmacht muss schriftlich erteilt werden. Für manche Behördengänge ist eine notarielle Vollmacht erforderlich.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'voll' (full) + 'Macht' (power, authority). A Vollmacht is full power — you hand over your complete authority to act to another person.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Bevollmächtigung',
            article: 'die',
            translation: 'authorisation, empowerment',
            similarityScore: 5,
            level: ['B2'],
            cefrRelevant: true,
          },
          {
            word: 'Ermächtigung',
            article: 'die',
            translation: 'authorisation',
            similarityScore: 4,
            level: ['B2'],
            cefrRelevant: true,
          },
          {
            word: 'Genehmigung',
            article: 'die',
            translation: 'approval, permit',
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
              "'Voll' = full, 'Macht' = power. A Vollmacht gives someone the full power to act as you.",
          },
          {
            id: 2,
            content:
              "Think 'full might' — you hand over your full might to someone else through a Vollmacht.",
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
