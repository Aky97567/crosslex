import React, { useState, useRef, useEffect } from 'react';
import { Heading } from '@whitelotus/common-crosslex-view';
import { Card } from '@whitelotus/front-shared';
import { readHardcoreMode } from '@whitelotus/front-features';

export type TypeTheWordQuestionData = {
  word: string;
  article?: string;
  translation: string;
};

type Props = {
  heading: Heading;
  typeTheWordQuestion: TypeTheWordQuestionData;
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
  needClose,
  onClose,
  showContent = true,
  onAnswer,
}) => {
  const { word, article, translation } = typeTheWordQuestion;
  const [inputValue, setInputValue] = useState('');
  const [phase, setPhase] = useState<Phase>('idle');
  const [revealedIndices, setRevealedIndices] = useState<number[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Positions the user must type (everything not peeked)
  const peekedSet = new Set(revealedIndices);
  const nonPeekedPositions = Array.from({ length: word.length }, (_, i) => i)
    .filter(i => !peekedSet.has(i));

  const maxHints = Math.max(3, Math.floor(word.length * 0.3));
  const hardcoreMode = readHardcoreMode();
  // Only allow peeking future (untyped) positions
  const peekableCount = nonPeekedPositions.slice(inputValue.length).length;
  const canHint = !hardcoreMode && phase === 'idle' && revealedIndices.length < maxHints && peekableCount > 0;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handlePeek = () => {
    if (!canHint) return;
    const future = nonPeekedPositions.slice(inputValue.length);
    const pick = future[Math.floor(Math.random() * future.length)];
    setRevealedIndices(prev => [...prev, pick]);
    inputRef.current?.focus();
  };

  // Reconstruct the full word from peeked letters + typed letters for answer checking
  const buildFullInput = (typed: string): string =>
    Array.from({ length: word.length }, (_, i) => {
      if (peekedSet.has(i)) return word[i];
      const typedIndex = nonPeekedPositions.indexOf(i);
      return typedIndex < typed.length ? typed[typedIndex] : '';
    }).join('');

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
    setInputValue(e.target.value.slice(0, nonPeekedPositions.length));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const cursorBoxIndex = nonPeekedPositions[inputValue.length] ?? -1;

  const getBoxContent = (i: number): string => {
    if (phase === 'revealed') return word[i];
    if (peekedSet.has(i)) return word[i];
    const typedIndex = nonPeekedPositions.indexOf(i);
    return typedIndex < inputValue.length ? inputValue[typedIndex] : ' ';
  };

  const getBoxClass = (i: number): string => {
    if (phase === 'correct') return 'border-color1 text-color1';
    if (phase === 'wrong') return 'border-color3 text-color3';
    if (phase === 'revealed') return 'border-color1 text-color1';
    if (peekedSet.has(i)) return 'border-color6 text-text opacity-50';
    const typedIndex = nonPeekedPositions.indexOf(i);
    if (typedIndex < inputValue.length) return 'border-color7 text-text';
    if (i === cursorBoxIndex) return 'border-brand';
    return 'border-color6 opacity-40';
  };

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
        {/* Letter boxes */}
        <div
          className={`flex flex-wrap justify-center gap-10 mb-30 cursor-text ${phase === 'wrong' ? 'animate-vibrate' : ''}`}
          onClick={() => inputRef.current?.focus()}
        >
          {Array.from({ length: word.length }, (_, i) => (
            <div
              key={i}
              className={`border-b-2 px-5 h-60 min-w-[20px] flex items-end justify-center pb-5 font-bold text-sm transition-colors duration-200 select-none ${getBoxClass(i)}`}
            >
              {getBoxContent(i)}
            </div>
          ))}
        </div>

        {/* Hidden input — keeps keyboard accessible on mobile without visible field */}
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          maxLength={nonPeekedPositions.length}
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

      <p className="text-center text-sm opacity-50 mb-20">({word.length} letters)</p>

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
              Peek ({maxHints - revealedIndices.length})
            </button>
          )}
        </div>
      )}
    </Card>
  );
};

export { TypeTheWordQuestion };
