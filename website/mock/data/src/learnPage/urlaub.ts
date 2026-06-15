import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const urlaub: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Urlaub',
        article: 'der',
        translation: 'holiday, vacation',
        partOfSpeech: 'noun',
        themes: ['daily_life'],
        level: ['A2'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          'Time off work for rest and travel. In Germany, employees have a legal minimum of 20 paid holiday days per year. "Urlaub nehmen" means to take time off work.',
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'der Urlaub'?",
          options: [
            { text: 'a holiday or vacation away from work', isCorrect: true },
            { text: 'a weekend at home with no plans', isCorrect: false },
            { text: 'a public holiday when shops are closed', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich mache zwei Wochen Urlaub. Im Urlaub fahre ich nach Italien. Den Urlaub habe ich schon geplant.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From Middle High German 'urloup' (permission to leave, dismissal). Originally a military term — soldiers were given 'leave' (Urlaub) to go home. The meaning broadened to any permitted time away.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Ferien',
            article: 'die',
            translation: 'holidays (especially school holidays)',
            similarityScore: 4,
            level: ['A2'],
            cefrRelevant: true,
          },
          {
            word: 'Auszeit',
            article: 'die',
            translation: 'break, time out',
            similarityScore: 3,
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
              "Think of 'our lob' — during Urlaub, you get lobbed out of the office and into free time.",
          },
          {
            id: 2,
            content:
              "Urlaub comes from 'leave' — soldiers got Urlaub (leave) to go home. Now everyone gets it in summer.",
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
