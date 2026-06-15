import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const elterngeld: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Elterngeld',
        article: 'das',
        translation: 'parental benefit, parental allowance',
        partOfSpeech: 'noun',
        themes: ['finance', 'bureaucracy'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'A state benefit paid to parents who take time off work to care for a newborn child, replacing 65–67% of lost net income for up to 14 months if both parents share the leave. Unlike Kindergeld — a flat monthly child benefit paid to all families — Elterngeld is specifically tied to the parental leave period directly after birth.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'das Elterngeld'?",
          options: [
            { text: 'A state payment replacing lost income for parents on parental leave', isCorrect: true },
            { text: 'A monthly child benefit paid to all families regardless of employment', isCorrect: false },
            { text: 'A tax deduction available to parents for childcare costs', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Wir haben nach der Geburt unseres Kindes Elterngeld beantragt. Das Elterngeld hat uns geholfen, die Kosten während der Elternzeit zu decken. Den Antrag auf Elterngeld haben wir drei Monate nach der Geburt gestellt.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Eltern' (parents) + 'Geld' (money). Simply: money for parents — the state's financial support for the period when parents step back from work to raise a newborn.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Mutterschaftsgeld',
            article: 'das',
            translation: 'maternity pay',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Erziehungsgeld',
            article: 'das',
            translation: 'child-rearing allowance (older term)',
            similarityScore: 4,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Elterngeld Plus',
            article: 'das',
            translation: 'extended parental benefit option',
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
              "'Eltern-GELD' — Eltern = parents, Geld = money. The name says it all: money paid to parents during parental leave.",
          },
          {
            id: 2,
            content:
              "Think of 'elder-geld' — money that helps new parents as they step into their oldest and most important role.",
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
