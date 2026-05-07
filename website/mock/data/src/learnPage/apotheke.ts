import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const apotheke: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Apotheke',
        article: 'die',
        translation: 'pharmacy, chemist',
        partOfSpeech: 'noun',
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A shop where medicines and health products are sold; in Germany, only licensed pharmacists may run one.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Apotheke'?",
          options: [
            { text: 'a doctor\'s office', isCorrect: false },
            { text: 'a pharmacy', isCorrect: true },
            { text: 'a health insurance office', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich gehe in die Apotheke. Die Apotheke ist bis 20 Uhr geöffnet. In der Apotheke bekomme ich meine Medikamente.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Greek 'apotheke' (storehouse). The same root gives us 'boutique' in French and English — originally any shop storing goods.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Arzt',
            article: 'der',
            translation: 'doctor',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Rezept',
            article: 'das',
            translation: 'prescription',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Medikament',
            article: 'das',
            translation: 'medicine, medication',
            similarityScore: 5,
            level: ['A2'],
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
              "Think of 'apothecary' — the old English word for pharmacist. Apotheke is the shop where the apothecary works.",
          },
          {
            id: 2,
            content:
              "Greek 'apo' (away) + 'theke' (storage) — the place where things are stored away until you need them.",
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
