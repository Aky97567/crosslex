import React, { useState } from 'react';
import {
  Heading,
  MeaningBestGuessQuestion,
} from '@whitelotus/common-crosslex-view';
import { BodyText, Card, CtaText } from '@whitelotus/front-shared';

type MeaningBestGuessOption = {
  text: string;
  isCorrect: boolean;
};

type MeaningGuessQuestionProps = {
  meaningBestGuessQuestion: MeaningBestGuessQuestion;
  heading: Heading;
  needClose?: boolean;
  onClose?: () => void;
  showContent?: boolean;
};

export const MeaningGuessQuestion: React.FC<MeaningGuessQuestionProps> = ({
  heading,
  meaningBestGuessQuestion,
  needClose,
  onClose,
  showContent = true,
}) => {
  const [optionStates, setOptionStates] = useState<
    Array<{ isClicked: boolean; isCorrect: boolean }>
  >(
    meaningBestGuessQuestion.options.map(() => ({
      isClicked: false,
      isCorrect: false,
    })),
  );

  const handleOptionClick = (index: number) => {
    const newOptionStates = optionStates.map((state, i) =>
      i === index
        ? {
            isClicked: true,
            isCorrect: meaningBestGuessQuestion.options[index].isCorrect,
          }
        : state,
    );
    setOptionStates(newOptionStates);
  };

  return meaningBestGuessQuestion ? (
    <Card
      heading={heading}
      needClose={needClose}
      onClose={onClose}
      showContent={showContent}
    >
      <div className="mb-6">
        <BodyText>{meaningBestGuessQuestion.question}</BodyText>
        {meaningBestGuessQuestion.options.map(
          (option: MeaningBestGuessOption, index) => (
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
          ),
        )}
      </div>
    </Card>
  ) : null;
};
