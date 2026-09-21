import { WordIntroModule, WordContextModule, MeaningGuessQuestionModule } from '@whitelotus/common-crosslex-view';
import { pickNextCard, generateExerciseData, generateExerciseDataSafe, SessionSnapshot } from './sessionAlgorithm';
import { WordsSeenStore } from './sessionStorage';

const heading = { text: 'x' };

const wordIntro = (overrides: Partial<WordIntroModule> = {}): WordIntroModule => ({
  moduleType: 'wordIntro',
  heading,
  article: null,
  level: ['B1'],
  partOfSpeech: 'noun',
  translation: 'translation',
  word: 'wort',
  ...overrides,
});

const wordContext = (paragraphWithUsage: string[]): WordContextModule => ({
  moduleType: 'wordContext',
  heading,
  paragraphWithUsage,
});

const meaningGuess = (): MeaningGuessQuestionModule => ({
  moduleType: 'meaningGuessQuestion',
  heading,
  meaningBestGuessQuestion: {
    question: 'q',
    options: [{ text: 'a', isCorrect: true }, { text: 'b', isCorrect: false }],
  },
});

type Fixture = Parameters<typeof pickNextCard>[4];

const baseSession = (overrides: Partial<SessionSnapshot> = {}): SessionSnapshot => ({
  lastIntroducedWordKey: null,
  exercisesSinceLastIntro: 1,
  sessionDurationMs: 300_000,
  ...overrides,
});

describe('pickNextCard', () => {
  let mathRandom: jest.SpiedFunction<typeof Math.random>;
  // Re-spy fresh each test: mockRestore() fully detaches the previous spy
  // from Math.random, so reusing one spy instance across tests via
  // mockReturnValue() after a restore silently falls through to the real
  // (non-deterministic) Math.random.
  beforeEach(() => { mathRandom = jest.spyOn(Math, 'random'); });
  afterEach(() => mathRandom.mockRestore());

  test('cold start (no stats at all) always introduces a word', () => {
    mathRandom.mockReturnValue(0);
    const wordData: Fixture = { a: { content: { moduleType: 'content', modules: [wordIntro()] } } };
    const result = pickNextCard(['a'], {}, baseSession(), 'balanced', wordData);
    expect(result).toEqual({ wordKey: 'a', cardType: 'wordIntro' });
  });

  test('guarantees the intro -> quiz unit: an exercise on the just-introduced word comes next', () => {
    mathRandom.mockReturnValue(0);
    const wordData: Fixture = {
      a: { content: { moduleType: 'content', modules: [wordIntro(), wordContext(['x {{y}} z']), meaningGuess()] } },
    };
    const wordStats: WordsSeenStore = { a: { count: 0, accuracy: 0, lastSeen: Date.now() } };
    const session = baseSession({ exercisesSinceLastIntro: 0, lastIntroducedWordKey: 'a' });
    const result = pickNextCard(['a'], wordStats, session, 'balanced', wordData);
    expect(result.wordKey).toBe('a');
    expect(['wordDefinition', 'meaningGuess', 'contextBlank']).toContain(result.cardType);
  });

  test('introduces a new word when the coin flip favors it', () => {
    // exercisesSinceLastIntro !== 0 so the guarantee branch is skipped; the
    // single remaining unseen key means dynamicP is always > 0.
    mathRandom.mockReturnValue(0);
    const wordData: Fixture = {
      a: { content: { moduleType: 'content', modules: [wordIntro()] } },
      b: { content: { moduleType: 'content', modules: [wordIntro()] } },
    };
    const wordStats: WordsSeenStore = { a: { count: 1, accuracy: 1, lastSeen: Date.now() } };
    const result = pickNextCard(['a', 'b'], wordStats, baseSession(), 'balanced', wordData);
    expect(result).toEqual({ wordKey: 'b', cardType: 'wordIntro' });
  });

  test('falls back to a review exercise when there are no unseen words left', () => {
    mathRandom.mockReturnValue(0);
    const wordData: Fixture = { a: { content: { moduleType: 'content', modules: [wordIntro()] } } };
    const wordStats: WordsSeenStore = { a: { count: 1, accuracy: 1, lastSeen: Date.now() } };
    const result = pickNextCard(['a'], wordStats, baseSession(), 'balanced', wordData);
    expect(result.wordKey).toBe('a');
    expect(result.cardType).toBe('wordDefinition'); // only module present
  });

  test('weights review picks toward lower accuracy / longer-unseen words', () => {
    const now = 1_000_000;
    jest.spyOn(Date, 'now').mockReturnValue(now);
    const sessionDurationMs = 300_000;
    const wordData: Fixture = {
      low: { content: { moduleType: 'content', modules: [wordIntro()] } },
      high: { content: { moduleType: 'content', modules: [wordIntro()] } },
    };
    // low: accuracy 1, just seen -> weight = max(0.01, 0 + 0) = 0.01
    // high: accuracy 0, seen 5 durations ago -> weight = max(0.01, 1 + 5) = 6
    // total = 6.01; random=0.5 -> r = 3.005, which lands past `low`'s slice
    // and into `high`'s.
    const wordStats: WordsSeenStore = {
      low: { count: 1, accuracy: 1, lastSeen: now },
      high: { count: 1, accuracy: 0, lastSeen: now - sessionDurationMs * 5 },
    };
    mathRandom.mockReturnValue(0.5);
    const session = baseSession({ sessionDurationMs });
    const result = pickNextCard(['low', 'high'], wordStats, session, 'balanced', wordData);
    expect(result.wordKey).toBe('high');
    jest.spyOn(Date, 'now').mockRestore();
  });

  test('typeTheWord only becomes selectable once round(count * accuracy) >= 3', () => {
    const wordDataFull: Fixture = {
      a: {
        content: {
          moduleType: 'content',
          modules: [wordIntro(), wordContext(['x {{y}} z']), meaningGuess()],
        },
      },
    };
    // 4 available types when eligible (wordDefinition, meaningGuess,
    // contextBlank, typeTheWord) — random near 1 selects the last index,
    // which is always typeTheWord when present (push order in the source).
    const eligibleStats: WordsSeenStore = { a: { count: 4, accuracy: 0.75, lastSeen: Date.now() } }; // round(3)=3
    mathRandom.mockReturnValue(0.99);
    const eligible = pickNextCard(['a'], eligibleStats, baseSession(), 'balanced', wordDataFull);
    expect(eligible.cardType).toBe('typeTheWord');

    // round(4 * 0.6) = round(2.4) = 2 -> not eligible; the same "last index"
    // random now lands on contextBlank instead (3 types available).
    const ineligibleStats: WordsSeenStore = { a: { count: 4, accuracy: 0.6, lastSeen: Date.now() } };
    const ineligible = pickNextCard(['a'], ineligibleStats, baseSession(), 'balanced', wordDataFull);
    expect(ineligible.cardType).not.toBe('typeTheWord');
  });
});

describe('generateExerciseData', () => {
  test('returns null immediately for an unknown word key', () => {
    expect(generateExerciseData('missing', 'wordDefinition', [], {})).toBeNull();
  });

  describe('meaningGuess', () => {
    test('returns the meaningBestGuessQuestion when the module is present', () => {
      const wordData: Fixture = { a: { content: { moduleType: 'content', modules: [meaningGuess()] } } };
      const result = generateExerciseData('a', 'meaningGuess', ['a'], wordData);
      expect(result).toEqual({ cardType: 'meaningGuess', data: meaningGuess().meaningBestGuessQuestion });
    });

    test('returns null when the word has no meaningGuessQuestion module', () => {
      const wordData: Fixture = { a: { content: { moduleType: 'content', modules: [wordIntro()] } } };
      expect(generateExerciseData('a', 'meaningGuess', ['a'], wordData)).toBeNull();
    });
  });

  describe('contextBlank', () => {
    test('blanks every marked occurrence and surfaces them as fills', () => {
      const wordData: Fixture = {
        a: {
          content: {
            moduleType: 'content',
            modules: [wordIntro({ word: 'gehen', displayName: undefined }), wordContext(['Ich {{gehe}} nach Hause.', 'Er {{geht}} auch.'])],
          },
        },
      };
      const result = generateExerciseData('a', 'contextBlank', ['a'], wordData);
      expect(result?.cardType).toBe('contextBlank');
      if (result?.cardType !== 'contextBlank') throw new Error('expected contextBlank');
      expect(result.data.sentences).toEqual(['Ich ___ nach Hause.', 'Er ___ auch.']);
      expect(result.data.fills).toEqual(['gehe', 'geht']);
    });

    test('the correct option uses displayName over word when set', () => {
      const wordData: Fixture = {
        a: {
          content: {
            moduleType: 'content',
            modules: [wordIntro({ word: 'anrufen', displayName: 'anrufen (sep.)' }), wordContext(['Ich {{rufe}} dich {{an}}.'])],
          },
        },
      };
      const result = generateExerciseData('a', 'contextBlank', ['a'], wordData);
      if (result?.cardType !== 'contextBlank') throw new Error('expected contextBlank');
      const correct = result.data.options.find((o) => o.isCorrect);
      expect(correct?.text).toBe('anrufen (sep.)');
    });

    test('sets contextSentenceIndices to [1] for trennbar words, undefined otherwise', () => {
      const trennbarData: Fixture = {
        a: { content: { moduleType: 'content', modules: [wordIntro({ trennbar: true }), wordContext(['a {{b}} c', 'd {{e}} f'])] } },
      };
      const regularData: Fixture = {
        a: { content: { moduleType: 'content', modules: [wordIntro(), wordContext(['a {{b}} c'])] } },
      };
      const trennbarResult = generateExerciseData('a', 'contextBlank', ['a'], trennbarData);
      const regularResult = generateExerciseData('a', 'contextBlank', ['a'], regularData);
      if (trennbarResult?.cardType !== 'contextBlank' || regularResult?.cardType !== 'contextBlank') {
        throw new Error('expected contextBlank');
      }
      expect(trennbarResult.data.contextSentenceIndices).toEqual([1]);
      expect(regularResult.data.contextSentenceIndices).toBeUndefined();
    });

    test('returns null when the word has no wordContext module', () => {
      const wordData: Fixture = { a: { content: { moduleType: 'content', modules: [wordIntro()] } } };
      expect(generateExerciseData('a', 'contextBlank', ['a'], wordData)).toBeNull();
    });

    test('returns null when the context paragraph has no marked spans', () => {
      const wordData: Fixture = {
        a: { content: { moduleType: 'content', modules: [wordIntro(), wordContext(['no markers here.'])] } },
      };
      expect(generateExerciseData('a', 'contextBlank', ['a'], wordData)).toBeNull();
    });

    test('caps distractors at 3 even with more valid candidates available', () => {
      // The shuffle order is random, but the outcome count isn't: every
      // candidate here has a wordIntro, so however slice(0, 3) shuffles
      // them, exactly 3 survive — deterministic without mocking Math.random.
      const other = (word: string): Fixture[string] => ({ content: { moduleType: 'content', modules: [wordIntro({ word })] } });
      const wordData: Fixture = {
        a: { content: { moduleType: 'content', modules: [wordIntro(), wordContext(['x {{y}} z'])] } },
        b: other('b'), c: other('c'), e: other('e'), f: other('f'), g: other('g'),
      };
      const result = generateExerciseData('a', 'contextBlank', ['a', 'b', 'c', 'e', 'f', 'g'], wordData);
      if (result?.cardType !== 'contextBlank') throw new Error('expected contextBlank');
      expect(result.data.options).toHaveLength(4); // 1 correct + 3 distractors
      expect(result.data.options.filter((o) => o.isCorrect)).toHaveLength(1);
    });

    test('a candidate with no wordIntro module never becomes a distractor', () => {
      // Only one other key, with no wordIntro: slice(0, 3) can't drop it
      // (it's the sole candidate), so it always reaches — and fails — the
      // null-filter, regardless of shuffle order.
      const wordData: Fixture = {
        a: { content: { moduleType: 'content', modules: [wordIntro(), wordContext(['x {{y}} z'])] } },
        d: { content: { moduleType: 'content', modules: [] } },
      };
      const result = generateExerciseData('a', 'contextBlank', ['a', 'd'], wordData);
      if (result?.cardType !== 'contextBlank') throw new Error('expected contextBlank');
      expect(result.data.options).toHaveLength(1); // just the correct answer, no valid distractors
    });
  });

  describe('wordDefinition', () => {
    test('returns the translation as the correct option, with distractors', () => {
      const wordData: Fixture = {
        a: { content: { moduleType: 'content', modules: [wordIntro({ word: 'Haus', article: 'das', translation: 'house' })] } },
        b: { content: { moduleType: 'content', modules: [wordIntro({ translation: 'other' })] } },
      };
      const result = generateExerciseData('a', 'wordDefinition', ['a', 'b'], wordData);
      expect(result?.cardType).toBe('wordDefinition');
      if (result?.cardType !== 'wordDefinition') throw new Error('expected wordDefinition');
      expect(result.data.word).toBe('Haus');
      expect(result.data.article).toBe('das');
      const correct = result.data.options.find((o) => o.isCorrect);
      expect(correct?.text).toBe('house');
    });

    test('returns null when the word has no wordIntro module', () => {
      expect(generateExerciseData('a', 'wordDefinition', ['a'], { a: { content: { moduleType: 'content', modules: [] } } })).toBeNull();
    });
  });

  describe('typeTheWord', () => {
    test('returns the word, article, and translation', () => {
      const wordData: Fixture = {
        a: { content: { moduleType: 'content', modules: [wordIntro({ word: 'Tisch', article: 'der', translation: 'table' })] } },
      };
      const result = generateExerciseData('a', 'typeTheWord', ['a'], wordData);
      expect(result).toEqual({ cardType: 'typeTheWord', data: { word: 'Tisch', article: 'der', translation: 'table' } });
    });

    test('returns null when the word has no wordIntro module', () => {
      expect(generateExerciseData('a', 'typeTheWord', ['a'], { a: { content: { moduleType: 'content', modules: [] } } })).toBeNull();
    });
  });
});

describe('generateExerciseDataSafe', () => {
  test('passes through a successful result unchanged', () => {
    const wordData: Fixture = { a: { content: { moduleType: 'content', modules: [meaningGuess()] } } };
    const result = generateExerciseDataSafe('a', 'meaningGuess', ['a'], wordData);
    expect(result?.cardType).toBe('meaningGuess');
  });

  test('falls back to wordDefinition when the requested type has no data', () => {
    const wordData: Fixture = { a: { content: { moduleType: 'content', modules: [wordIntro({ word: 'Test' })] } } };
    const result = generateExerciseDataSafe('a', 'meaningGuess', ['a'], wordData);
    expect(result?.cardType).toBe('wordDefinition');
  });

  test('returns null, without retrying, when wordDefinition itself was the failing request', () => {
    const wordData: Fixture = { a: { content: { moduleType: 'content', modules: [] } } }; // no wordIntro at all
    expect(generateExerciseDataSafe('a', 'wordDefinition', ['a'], wordData)).toBeNull();
  });

  test('returns null when both the requested type and the wordDefinition fallback fail', () => {
    const wordData: Fixture = { a: { content: { moduleType: 'content', modules: [] } } };
    expect(generateExerciseDataSafe('a', 'meaningGuess', ['a'], wordData)).toBeNull();
  });
});
