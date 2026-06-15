import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const haftpflichtversicherung: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Haftpflichtversicherung',
        article: 'die',
        translation: 'personal liability insurance',
        partOfSpeech: 'noun',
        themes: ['finance', 'daily_life'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "Insurance that covers the policyholder's financial liability if they accidentally cause damage to another person or their property. In Germany, a personal Haftpflichtversicherung is considered essential — almost every household has one. It covers everyday accidents such as breaking a neighbour's window, causing a cycling accident, or flooding the flat below.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Haftpflichtversicherung'?",
          options: [
            { text: 'Insurance covering your financial liability if you accidentally cause damage or injury to others', isCorrect: true },
            { text: 'Insurance that pays for repairs to your own belongings when they are damaged or stolen', isCorrect: false },
            { text: 'A mandatory health insurance required for all residents living in Germany', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Ich habe eine Haftpflichtversicherung abgeschlossen, die Schäden abdeckt, die ich anderen verursache. Die Haftpflichtversicherung hat den Schaden an der Wohnung meines Nachbarn vollständig bezahlt. Ohne eine Haftpflichtversicherung kann ein kleiner Unfall sehr teuer werden.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Haftpflicht' (liability, duty to be held liable) + 'Versicherung' (insurance). 'Haftpflicht' combines 'Haft' (liability) + 'Pflicht' (duty) — your legal duty to bear the consequences of your actions.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Privathaftpflicht',
            article: 'die',
            translation: 'personal liability insurance',
            similarityScore: 5,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Haftung',
            article: 'die',
            translation: 'liability, legal responsibility',
            similarityScore: 3,
            level: ['B2'],
            cefrRelevant: true,
          },
          {
            word: 'Schadenersatz',
            article: 'der',
            translation: 'damages, compensation for loss',
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
              "'Haft-pflicht-VERSICHERUNG' — Haft = liability, Pflicht = duty, Versicherung = insurance. Insurance for your duty to pay when you accidentally cause damage.",
          },
          {
            id: 2,
            content:
              "'Haft' sounds like 'hafted' — when blame is hafted (attached) to you for an accident, this insurance pays the bill.",
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
