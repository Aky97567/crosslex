import {
  WordIntroModule,
  WordContextModule,
  parseAnnotatedParagraph,
} from '@whitelotus/common-crosslex-view';
import { sampleLearnPageContentList } from './learnPage/sampleLearnPageContent';

type ContentModule = { moduleType: string };

const findModule = <T extends ContentModule>(modules: ContentModule[], type: string) =>
  modules.find((m) => m.moduleType === type) as T | undefined;

const getIntro = (key: keyof typeof sampleLearnPageContentList) =>
  findModule<WordIntroModule>(sampleLearnPageContentList[key].content.modules, 'wordIntro')!;

// --- ContextBlankQuestion fixtures ---

const makeContextBlankFixture = (
  wordKey: keyof typeof sampleLearnPageContentList,
  distractorKeys: Array<keyof typeof sampleLearnPageContentList>,
) => {
  const intro = getIntro(wordKey);
  const ctx = findModule<WordContextModule>(
    sampleLearnPageContentList[wordKey].content.modules,
    'wordContext',
  )!;
  const fills: string[] = [];
  const sentences = ctx.paragraphWithUsage.map((rawSentence) =>
    parseAnnotatedParagraph(rawSentence)
      .map((seg) => {
        if (!seg.marked) return seg.text;
        fills.push(seg.text);
        return '___';
      })
      .join(''),
  );
  const distractors = distractorKeys.map((k) => ({ text: getIntro(k).word, isCorrect: false as const }));
  return {
    sentences,
    fills,
    options: [{ text: intro.word, isCorrect: true as const }, ...distractors],
    contextSentenceIndices: intro.trennbar ? [1] : undefined,
  };
};

export const contextBlankStoryFixtures = {
  steuer: makeContextBlankFixture('steuer', ['formular', 'gehalt', 'konto']),
  beantragen: makeContextBlankFixture('beantragen', ['kaufen', 'schreiben', 'bezahlen']),
  kaufen: makeContextBlankFixture('kaufen', ['beantragen', 'bezahlen', 'schreiben']),
  schreiben: makeContextBlankFixture('schreiben', ['kaufen', 'beantragen', 'sprechen']),
  nachweisen: makeContextBlankFixture('nachweisen', ['umsteigen', 'arbeiten', 'kaufen']),
};

// --- WordDefinitionQuestion fixtures ---

const makeWordDefinitionFixture = (
  wordKey: keyof typeof sampleLearnPageContentList,
  distractorKeys: Array<keyof typeof sampleLearnPageContentList>,
) => {
  const intro = getIntro(wordKey);
  const distractors = distractorKeys.map((k) => ({ text: getIntro(k).translation, isCorrect: false as const }));
  return {
    word: intro.word,
    article: intro.article,
    options: [{ text: intro.translation, isCorrect: true as const }, ...distractors],
  };
};

export const wordDefinitionStoryFixtures = {
  erfahrung: makeWordDefinitionFixture('erfahrung', ['frist', 'bescheinigung', 'mahnung']),
  frist: makeWordDefinitionFixture('frist', ['erfahrung', 'termin', 'konto']),
  beantragen: makeWordDefinitionFixture('beantragen', ['kaufen', 'schreiben', 'bezahlen']),
};
