import React, { useState, useRef, useEffect } from 'react';
import { Heading } from '@whitelotus/common-crosslex-view';
import { Card } from '@whitelotus/front-shared';

export type TypeTheWordQuestionData = {
  word: string;
  article?: string;
  translation: string;
};

type Props = {
  heading: Heading;
  typeTheWordQuestion: TypeTheWordQuestionData;
  hardcoreMode?: boolean;
  needClose?: boolean;
  onClose?: () => void;
  showContent?: boolean;
  onAnswer?: (correct: boolean) => void;
};

type Phase = 'idle' | 'correct' | 'wrong' | 'revealed';

const normalise = (s: string) => s.trim().toLowerCase();

const stripDiacritics = (s: string) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '');

const substituteUmlauts = (s: string) =>
  s.replace(/ü/g, 'ue').replace(/ö/g, 'oe').replace(/ä/g, 'ae').replace(/ß/g, 'ss');

const isCorrectAnswer = (input: string, target: string): boolean => {
  const a = normalise(input);
  const b = normalise(target);
  return (
    a === b ||
    stripDiacritics(a) === stripDiacritics(b) ||
    substituteUmlauts(a) === substituteUmlauts(b)
  );
};

const TypeTheWordQuestion: React.FC<Props> = ({
  heading,
  typeTheWordQuestion,
  hardcoreMode = false,
  needClose,
  onClose,
  showContent = true,
  onAnswer,
}) => {
  const { word, article, translation } = typeTheWordQuestion;
  const [inputValue, setInputValue] = useState('');
  const [phase, setPhase] = useState<Phase>('idle');
  const [peekedIndices, setPeekedIndices] = useState<number[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // `word` is a space-separated sequence of one or more "words" — always
  // one for a plain word (e.g. 'arbeiten'), always exactly two for a
  // reflexive verb's dictionary form (e.g. 'sich ausruhen'). Spaces are
  // pure structure, never something to guess: letters are indexed only
  // across the non-space characters (`letters` below), and rendering
  // inserts a visual gap between word-groups instead of a literal blank
  // box for the space — removing both "is there a space here" and
  // "where exactly does it go" as things the learner has to discover.
  const wordGroups = word.split(' ');
  const letters = wordGroups.join('').split('');

  // The dictionary/citation form of every reflexive verb in this dataset
  // is always 'sich <verb>' — 'sich' itself isn't word-specific vocabulary
  // (every reflexive verb uses the identical 4 letters), so it's revealed
  // for free rather than spending the learner's attention (or hint
  // budget) on a near-constant token. Doesn't touch the verb part.
  const autoRevealedCount =
    wordGroups.length > 1 && wordGroups[0].toLowerCase() === 'sich' ? wordGroups[0].length : 0;
  const autoRevealedIndices = Array.from({ length: autoRevealedCount }, (_, i) => i);

  // Positions the user must type (everything not auto-revealed or peeked)
  const revealedSet = new Set([...autoRevealedIndices, ...peekedIndices]);
  const typeablePositions = Array.from({ length: letters.length }, (_, i) => i)
    .filter(i => !revealedSet.has(i));

  // Hint budget scales with the letters actually being tested — the free
  // 'sich' reveal isn't hint budget spent, so it doesn't shrink how many
  // Peeks are available for the word that's actually being tested.
  const maxHints = Math.max(3, Math.floor(typeablePositions.length * 0.3));
  // Only allow peeking future (untyped) positions
  const peekableCount = typeablePositions.slice(inputValue.length).length;
  const canHint = !hardcoreMode && phase === 'idle' && peekedIndices.length < maxHints && peekableCount > 0;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handlePeek = () => {
    if (!canHint) return;
    const future = typeablePositions.slice(inputValue.length);
    const pick = future[Math.floor(Math.random() * future.length)];
    setPeekedIndices(prev => [...prev, pick]);
    inputRef.current?.focus();
  };

  // Reconstruct the full word (letters only) from revealed + typed letters
  const buildFullLetters = (typed: string): string =>
    Array.from({ length: letters.length }, (_, i) => {
      if (revealedSet.has(i)) return letters[i];
      const typedIndex = typeablePositions.indexOf(i);
      return typedIndex < typed.length ? typed[typedIndex] : '';
    }).join('');

  // Re-insert spaces at the original word-group boundaries so the
  // reconstructed string matches `word`'s shape for answer checking.
  const buildFullInput = (typed: string): string => {
    const full = buildFullLetters(typed);
    let cursor = 0;
    return wordGroups
      .map(group => {
        const chunk = full.slice(cursor, cursor + group.length);
        cursor += group.length;
        return chunk;
      })
      .join(' ');
  };

  const handleSubmit = () => {
    if (phase !== 'idle' || inputValue.length === 0) return;
    const fullInput = buildFullInput(inputValue);
    const result = isCorrectAnswer(fullInput, word);
    onAnswer?.(result);
    if (result) {
      setPhase('correct');
    } else {
      setPhase('wrong');
      setTimeout(() => setPhase('revealed'), 500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (phase !== 'idle') return;
    setInputValue(e.target.value.slice(0, typeablePositions.length));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const cursorBoxIndex = typeablePositions[inputValue.length] ?? -1;

  const getBoxContent = (i: number): string => {
    if (phase === 'revealed') return letters[i];
    if (revealedSet.has(i)) return letters[i];
    const typedIndex = typeablePositions.indexOf(i);
    return typedIndex < inputValue.length ? inputValue[typedIndex] : ' ';
  };

  const getBoxClass = (i: number): string => {
    if (phase === 'correct') return 'border-color1 text-color1';
    if (phase === 'wrong') return 'border-color3 text-color3';
    if (phase === 'revealed') return 'border-color1 text-color1';
    if (revealedSet.has(i)) return 'border-color6 text-text opacity-50';
    const typedIndex = typeablePositions.indexOf(i);
    if (typedIndex < inputValue.length) return 'border-color7 text-text';
    if (i === cursorBoxIndex) return 'border-brand';
    return 'border-color6 opacity-40';
  };

  // "sich" is revealed for free and isn't being tested, so it shouldn't
  // count toward the letters the learner is being asked to guess.
  const typeableGroups = autoRevealedCount > 0 ? wordGroups.slice(1) : wordGroups;
  const letterCountLabel =
    typeableGroups.length > 1
      ? `(${typeableGroups.map(g => g.length).join(' + ')} letters)`
      : `(${typeableGroups[0].length} letters)`;

  return (
    <Card
      heading={heading}
      needClose={needClose}
      onClose={onClose}
      showContent={showContent}
    >
      {/* Translation prompt */}
      <div className="flex flex-col items-center mb-30 gap-5">
        {article && (
          <span className="text-color7 text-sm">{article}</span>
        )}
        <span className="text-brand font-bold text-md">{translation}</span>
      </div>

      {/* Wrapper is relative so the hidden input can be absolutely positioned */}
      <div className="relative">
        {/* Letter boxes, grouped by word with a clearly bigger gap between groups than within one */}
        <div
          className={`flex flex-wrap justify-center items-end gap-50 mb-30 cursor-text ${phase === 'wrong' ? 'animate-vibrate' : ''}`}
          onClick={() => inputRef.current?.focus()}
        >
          {(() => {
            let globalIndex = 0;
            return wordGroups.map((group, gi) => {
              const startIndex = globalIndex;
              globalIndex += group.length;
              return (
                <div key={gi} className="flex gap-10">
                  {Array.from({ length: group.length }, (_, li) => {
                    const i = startIndex + li;
                    return (
                      <div
                        key={i}
                        className={`border-b-2 px-5 h-60 min-w-[20px] flex items-end justify-center pb-5 font-bold text-sm transition-colors duration-200 select-none ${getBoxClass(i)}`}
                      >
                        {getBoxContent(i)}
                      </div>
                    );
                  })}
                </div>
              );
            });
          })()}
        </div>

        {/* Hidden input — keeps keyboard accessible on mobile without visible field */}
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          maxLength={typeablePositions.length}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck={false}
          aria-label={`Type the German word for ${translation}`}
          className="absolute opacity-0 pointer-events-none w-px h-px overflow-hidden top-0 left-0"
        />
      </div>

      <p className="text-center text-sm opacity-50 mb-20">{letterCountLabel}</p>

      {/* Check + Peek buttons */}
      {phase === 'idle' && (
        <div className="flex justify-center gap-15">
          <button
            onClick={handleSubmit}
            disabled={inputValue.length === 0}
            className="border-2 border-brand rounded-md text-text px-40 py-10 transition-colors duration-300 hover:bg-brand-2 disabled:opacity-40 disabled:cursor-default text-sm"
          >
            Check
          </button>
          {canHint && (
            <button
              onClick={handlePeek}
              className="border-2 border-brand rounded-md text-text px-20 py-10 transition-colors duration-300 hover:bg-brand-2 text-sm opacity-60 hover:opacity-100"
            >
              Peek ({maxHints - peekedIndices.length})
            </button>
          )}
        </div>
      )}
    </Card>
  );
};

export { TypeTheWordQuestion };
