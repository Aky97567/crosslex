import React, { useState } from 'react';
import { Heading } from '@whitelotus/common-crosslex-view';
import { BodyText, Card, CtaText } from '@whitelotus/front-shared';

type Option = {
  text: string;
  isCorrect: boolean;
};

export type ContextBlankQuestionData = {
  sentence: string;
  options: Option[];
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

  const handleOptionClick = (index: number) => {
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

  const parts = contextBlankQuestion.sentence.split('___');
  const filledWord =
    selectedIndex !== null
      ? contextBlankQuestion.options[selectedIndex].text
      : null;

  return (
    <Card
      heading={heading}
      needClose={needClose}
      onClose={onClose}
      showContent={showContent}
    >
      <BodyText>
        {parts[0]}
        <span
          className={`inline-block border-b-2 min-w-60 mx-5 text-center font-bold ${
            selectedIndex !== null
              ? optionStates[selectedIndex].isCorrect
                ? 'border-color1 text-color1'
                : 'border-color3 text-color3'
              : 'border-brand text-brand'
          }`}
        >
          {filledWord ?? '      '}
        </span>
        {parts[1]}
      </BodyText>
      <div className="mt-20">
        {contextBlankQuestion.options.map((option, index) => (
          <div
            key={index}
            className={`cursor-pointer border-2 rounded-lg px-40 py-10 mb-10 transition-colors duration-300 border-color7 ${
              optionStates[index].isClicked
                ? optionStates[index].isCorrect
                  ? 'border-color1 bg-color2 text-white animate-bounce'
                  : 'border-color3 bg-color4 text-white animate-vibrate'
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
