import React, { useState } from 'react';
import { Heading } from '@whitelotus/common-crosslex-view';
import { BodyText, Card, CtaText } from '@whitelotus/front-shared';

type Option = {
  text: string;
  isCorrect: boolean;
};

export type ContextBlankQuestionData = {
  sentence: string;
  fills: string[];
  options: Option[];
  contextSentenceIndices?: number[];
};

type Props = {
  heading: Heading;
  contextBlankQuestion: ContextBlankQuestionData;
  needClose?: boolean;
  onClose?: () => void;
  showContent?: boolean;
  onAnswer?: (correct: boolean) => void;
};

const ContextBlankQuestion: React.FC<Props> = ({
  heading,
  contextBlankQuestion,
  needClose,
  onClose,
  showContent = true,
  onAnswer,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [optionStates, setOptionStates] = useState(
    contextBlankQuestion.options.map(() => ({
      isClicked: false,
      isCorrect: false,
    })),
  );

  const isAnswered = optionStates.some((s) => s.isClicked);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedIndex(index);
    setOptionStates((prev) =>
      prev.map((state, i) =>
        i === index
          ? {
              isClicked: true,
              isCorrect: contextBlankQuestion.options[index].isCorrect,
            }
          : state,
      ),
    );
    onAnswer?.(contextBlankQuestion.options[index].isCorrect);
  };

  const { sentence, fills, options, contextSentenceIndices } = contextBlankQuestion;
  const selectedOptionText = selectedIndex !== null ? options[selectedIndex].text : null;

  const blankClassName = `inline-block border-b-2 min-w-60 mx-5 text-center font-bold ${
    isAnswered
      ? 'border-color1 text-color1'
      : selectedIndex !== null
        ? 'border-color3 text-color3'
        : 'border-brand text-brand'
  }`;

  const sentences = sentence
    .split('. ')
    .map((s, i, arr) => (i < arr.length - 1 ? s + '.' : s));

  const blankOffsets: number[] = [];
  let count = 0;
  for (const sent of sentences) {
    blankOffsets.push(count);
    count += (sent.match(/___/g) ?? []).length;
  }

  return (
    <Card
      heading={heading}
      needClose={needClose}
      onClose={onClose}
      showContent={showContent}
    >
      {sentences.map((sent, si) => {
        const hasBlank = sent.includes('___');
        if (!isAnswered && !hasBlank) return null;
        const isContextSentence = contextSentenceIndices?.includes(si) ?? false;
        const parts = sent.split('___');
        const offset = blankOffsets[si];
        const contextBlankClass = `inline-block border-b-2 min-w-60 mx-5 text-center font-bold ${
          isAnswered ? 'border-color1 text-color1' : 'border-brand text-brand'
        }`;
        return (
          <BodyText key={si}>
            {parts.map((part, i) => (
              <React.Fragment key={i}>
                {part}
                {i < parts.length - 1 && (
                  <span className={isContextSentence ? contextBlankClass : blankClassName}>
                    {isAnswered
                      ? (fills[offset + i] ?? '')
                      : isContextSentence
                        ? '___'
                        : (selectedOptionText ?? '      ')}
                  </span>
                )}
              </React.Fragment>
            ))}
          </BodyText>
        );
      })}
      <div className="mt-20">
        {options.map((option, index) => (
          <div
            key={index}
            className={`border-2 rounded-lg px-40 py-10 mb-10 transition-colors duration-300 border-color7 ${
              isAnswered ? 'cursor-default' : 'cursor-pointer'
            } ${
              optionStates[index].isClicked
                ? optionStates[index].isCorrect
                  ? 'border-color1 bg-color2 text-white animate-bounce'
                  : 'border-color3 bg-color4 text-white animate-vibrate'
                : isAnswered
                  ? option.isCorrect
                    ? 'border-color1 bg-color2 text-white'
                    : 'opacity-40'
                  : 'bg-gradient-brand hover:bg-none hover:bg-brand-2'
            }`}
            onClick={() => handleOptionClick(index)}
          >
            <CtaText>{option.text}</CtaText>
          </div>
        ))}
      </div>
    </Card>
  );
};

export { ContextBlankQuestion };
