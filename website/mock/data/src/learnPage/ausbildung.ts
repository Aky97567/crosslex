import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const ausbildung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Ausbildung',
        article: 'die',
        translation: 'vocational training, apprenticeship',
        partOfSpeech: 'noun',
        themes: ['work'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A structured vocational training programme in Germany where a trainee (Auszubildender / Azubi) works in a company while attending a vocational school (Berufsschule). It typically lasts two to three years and ends with a formal qualification exam before a professional chamber. The dual system is a cornerstone of the German economy.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Ausbildung'?",
          options: [
            { text: 'A structured vocational training programme combining work and school', isCorrect: true },
            { text: 'A university degree completed over several years', isCorrect: false },
            { text: 'A short language course taken at an evening school', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Er hat eine Ausbildung zum Elektriker erfolgreich abgeschlossen. Die Ausbildung dauert in Deutschland meistens zwei bis drei Jahre. Nach der Ausbildung hat er sofort eine Stelle in dem Betrieb bekommen.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'aus-' (out) + 'bilden' (to educate, to form) + '-ung'. Education is the process of drawing out and shaping potential — Ausbildung forms a qualified professional from raw talent.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Lehre',
            article: 'die',
            translation: 'apprenticeship, traineeship',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Schulung',
            article: 'die',
            translation: 'training, coaching session',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Berufsausbildung',
            article: 'die',
            translation: 'vocational training',
            similarityScore: 5,
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
              "'Aus-BILD-ung' contains 'Bild' (image, form) — training shapes and forms a professional image of you.",
          },
          {
            id: 2,
            content:
              "Think of 'out-build' — Ausbildung builds you out into a fully qualified professional.",
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
