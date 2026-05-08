import React, { useState, useRef, useEffect } from 'react';
import { Heading } from '@whitelotus/common-crosslex-view';
import { BodyText, Card, CtaText } from '@whitelotus/front-shared';

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
  const [inputValue, setInputValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = () => {
    if (submitted || inputValue.trim() === '') return;
    const result = isCorrectAnswer(inputValue, typeTheWordQuestion.word);
    setCorrect(result);
    setSubmitted(true);
    onAnswer?.(result);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const { word, article, translation } = typeTheWordQuestion;

  return (
    <Card
      heading={heading}
      needClose={needClose}
      onClose={onClose}
      showContent={showContent}
    >
      <div className="flex flex-col items-center mb-30 gap-10">
        {article && (
          <BodyText as="span" className="text-color7 text-sm">
            {article}
          </BodyText>
        )}
        <BodyText as="span" className="text-brand font-bold text-lg md:text-xl">
          {translation}
        </BodyText>
      </div>

      <div className="flex flex-col gap-15">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => { if (!submitted) setInputValue(e.target.value); }}
          onKeyDown={handleKeyDown}
          disabled={submitted}
          placeholder="Type the German word…"
          className={`w-full border-2 rounded-lg px-40 py-10 text-text bg-transparent outline-none transition-colors duration-300
            ${submitted
              ? correct
                ? 'border-color1 bg-color2 text-white'
                : 'border-color3 bg-color4 text-white'
              : 'border-color7 focus:border-brand'
            }`}
        />

        {submitted && !correct && (
          <div className="border-2 border-color1 bg-color2 rounded-lg px-40 py-10">
            <CtaText className="text-white">{word}</CtaText>
          </div>
        )}

        {!submitted && (
          <button
            onClick={handleSubmit}
            disabled={inputValue.trim() === ''}
            className="border-2 border-brand rounded-md text-text px-40 py-10 transition-colors duration-300 hover:bg-brand-2 disabled:opacity-40 disabled:cursor-default"
          >
            <CtaText>Check</CtaText>
          </button>
        )}
      </div>
    </Card>
  );
};

export { TypeTheWordQuestion };
