import { LearnPageContent } from '@whitelotus/common-crosslex-view';

export const gewerkschaft: LearnPageContent = {
  content: {
    moduleType: 'content',
    modules: [
      {
        moduleType: 'wordIntro',
        heading: { text: 'Word Introduction' },
        word: 'Gewerkschaft',
        article: 'die',
        translation: 'trade union, labour union',
        partOfSpeech: 'noun',
        themes: ['work'],
        level: ['B1'],
      },
      {
        moduleType: 'wordMeaning',
        heading: { text: 'Meaning' },
        meaning:
          "An organised association of workers in a particular trade or industry that negotiates collectively with employers over wages, working hours, and conditions. Germany's largest union federation is the DGB (Deutscher Gewerkschaftsbund). Membership is voluntary but provides legal support and collective bargaining power.",
      },
      {
        moduleType: 'meaningGuessQuestion',
        heading: { text: 'Guess the Meaning' },
        meaningBestGuessQuestion: {
          question: "What is the best guess for the meaning of 'die Gewerkschaft'?",
          options: [
            { text: 'An organised association of workers that negotiates collectively with employers', isCorrect: true },
            { text: 'A government agency overseeing workplace safety and labour laws', isCorrect: false },
            { text: 'A professional association for licensed tradespeople', isCorrect: false },
          ],
        },
      },
      {
        moduleType: 'wordContext',
        heading: { text: 'Context' },
        paragraphWithUsage:
          'Mein Kollege ist Mitglied in einer Gewerkschaft. Die Gewerkschaft hat für uns einen besseren Tarifvertrag ausgehandelt. Eine starke Gewerkschaft schützt die Rechte aller Arbeitnehmer.',
      },
      {
        moduleType: 'etymology',
        heading: { text: 'Etymology' },
        etymology:
          "From 'Gewerk' (a trade, a craft guild) + '-schaft' (collective suffix, as in '-ship'). A Gewerkschaft is a collective of tradespeople — the modern successor to medieval craft guilds.",
      },
      {
        moduleType: 'similarWords',
        heading: { text: 'Similar Words' },
        similarWords: [
          {
            word: 'Betriebsrat',
            article: 'der',
            translation: 'works council',
            similarityScore: 3,
            level: ['B1'],
            cefrRelevant: true,
          },
          {
            word: 'Arbeitnehmerverband',
            article: 'der',
            translation: "employees' association",
            similarityScore: 4,
            level: ['B2'],
            cefrRelevant: true,
          },
          {
            word: 'Berufsverband',
            article: 'der',
            translation: 'professional association',
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
              "'Ge-WERK-schaft' contains 'Werk' (work) — a Gewerkschaft is the collective united by their shared work.",
          },
          {
            id: 2,
            content:
              "Think of 'gear-works' — the union is the gear that keeps the machinery of labour turning in workers' favour.",
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
