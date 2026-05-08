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
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = () => {
    if (phase !== 'idle' || inputValue.length === 0) return;
    const result = isCorrectAnswer(inputValue, word);
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
    setInputValue(e.target.value.slice(0, word.length));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const getBoxContent = (i: number): string => {
    if (phase === 'revealed') return word[i];
    return inputValue[i] ?? ' ';
  };

  const getBoxClass = (i: number): string => {
    if (phase === 'correct') return 'border-color1 text-color1';
    if (phase === 'wrong') return 'border-color3 text-color3';
    if (phase === 'revealed') return 'border-color1 text-color1';
    if (i < inputValue.length) return 'border-color7 text-text';
    if (i === inputValue.length) return 'border-brand';
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
              className={`border-b-2 px-5 h-60 flex items-end justify-center pb-5 font-bold text-sm transition-colors duration-200 select-none ${getBoxClass(i)}`}
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
          maxLength={word.length}
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

      {/* Check button */}
      {phase === 'idle' && (
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            disabled={inputValue.length === 0}
            className="border-2 border-brand rounded-md text-text px-40 py-10 transition-colors duration-300 hover:bg-brand-2 disabled:opacity-40 disabled:cursor-default text-sm"
          >
            Check
          </button>
        </div>
      )}
    </Card>
  );
};

export { TypeTheWordQuestion };
