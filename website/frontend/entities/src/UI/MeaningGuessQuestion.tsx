import { useState } from 'react';
import { MeaningBestGuessQuestion } from '@whitelotus/common-crosslex-view';
import { Card } from '@whitelotus/front-shared';

type MeaningGuessQuestionProps = {
  meaningBestGuessQuestion: MeaningBestGuessQuestion;
};

export const MeaningGuessQuestion: React.FC<MeaningGuessQuestionProps> = ({
  meaningBestGuessQuestion,
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
    <Card>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          Meaning Best Guess Question
        </h2>
        <p className="text-lg">{meaningBestGuessQuestion.question}</p>
        {meaningBestGuessQuestion.options.map((option, index) => (
          <div
            key={index}
            className={`text-md cursor-pointer border-2 rounded-lg px-40 py-10 mb-10 transition-colors duration-300 ${
              optionStates[index].isClicked
                ? optionStates[index].isCorrect
                  ? 'border-color1 text-color1 bg-color1-light'
                  : 'border-color3 text-color3 bg-color3-light'
                : 'border-color7 text-black hover:bg-color7-light'
            }`}
            onClick={() => handleOptionClick(index)}
          >
            {option.text}
          </div>
        ))}
      </div>
    </Card>
  ) : null;
};
