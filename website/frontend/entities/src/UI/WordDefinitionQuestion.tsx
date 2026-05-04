import React, { useState } from 'react';
import { Heading } from '@whitelotus/common-crosslex-view';

type Article = 'der' | 'die' | 'das' | null;
import { BodyText, Card, CtaText } from '@whitelotus/front-shared';

type Option = {
  text: string;
  isCorrect: boolean;
};

export type WordDefinitionQuestionData = {
  word: string;
  article?: Article;
  options: Option[];
};

type Props = {
  heading: Heading;
  wordDefinitionQuestion: WordDefinitionQuestionData;
  needClose?: boolean;
  onClose?: () => void;
  showContent?: boolean;
};

const WordDefinitionQuestion: React.FC<Props> = ({
  heading,
  wordDefinitionQuestion,
  needClose,
  onClose,
  showContent = true,
}) => {
  const [optionStates, setOptionStates] = useState(
    wordDefinitionQuestion.options.map(() => ({
      isClicked: false,
      isCorrect: false,
    })),
  );

  const handleOptionClick = (index: number) => {
    setOptionStates((prev) =>
      prev.map((state, i) =>
        i === index
          ? {
              isClicked: true,
              isCorrect: wordDefinitionQuestion.options[index].isCorrect,
            }
          : state,
      ),
    );
  };

  const { word, article } = wordDefinitionQuestion;
  const displayWord = article ? `${article} ${word}` : word;

  return (
    <Card
      heading={heading}
      needClose={needClose}
      onClose={onClose}
      showContent={showContent}
    >
      <div className="flex justify-center mb-30">
        <BodyText as="span" className="text-brand font-bold text-lg md:text-xl">
          {displayWord}
        </BodyText>
      </div>
      <div>
        {wordDefinitionQuestion.options.map((option, index) => (
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

export { WordDefinitionQuestion };
