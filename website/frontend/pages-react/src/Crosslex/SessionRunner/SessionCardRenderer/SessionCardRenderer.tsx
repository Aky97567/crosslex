import React from 'react';
import {
  MeaningGuessQuestion,
  ContextBlankQuestion,
  WordDefinitionQuestion,
  TypeTheWordQuestion,
} from '@whitelotus/front-entities';
import { RunnerState } from '@whitelotus/front-features';
import { WordDetail } from '@whitelotus/front-widgets';

type WordDetailContent = React.ComponentProps<typeof WordDetail>['content'];

type Props = {
  runner: RunnerState;
  wordContent: WordDetailContent | undefined;
  reviewContent: WordDetailContent | null;
  reviewWordKey: string | null;
  onAnswer: (correct: boolean) => void;
};

const SessionCardRenderer: React.FC<Props> = ({
  runner,
  wordContent,
  reviewContent,
  reviewWordKey,
  onAnswer,
}) => {
  if (reviewContent) {
    return <WordDetail key={`review-${reviewWordKey}`} content={reviewContent} />;
  }

  return (
    <>
      {runner.cardType === 'wordIntro' && wordContent && (
        <WordDetail key={runner.cardKey} content={wordContent} />
      )}
      {runner.cardType === 'meaningGuess' && runner.exerciseData?.cardType === 'meaningGuess' && (
        <MeaningGuessQuestion
          key={runner.cardKey}
          heading={{ text: 'Guess the Meaning' }}
          meaningBestGuessQuestion={runner.exerciseData.data}
          onAnswer={onAnswer}
        />
      )}
      {runner.cardType === 'contextBlank' && runner.exerciseData?.cardType === 'contextBlank' && (
        <ContextBlankQuestion
          key={runner.cardKey}
          heading={{ text: 'Fill in the Blank' }}
          contextBlankQuestion={runner.exerciseData.data}
          onAnswer={onAnswer}
        />
      )}
      {runner.cardType === 'wordDefinition' && runner.exerciseData?.cardType === 'wordDefinition' && (
        <WordDefinitionQuestion
          key={runner.cardKey}
          heading={{ text: 'What does this mean?' }}
          wordDefinitionQuestion={runner.exerciseData.data}
          onAnswer={onAnswer}
        />
      )}
      {runner.cardType === 'typeTheWord' && runner.exerciseData?.cardType === 'typeTheWord' && (
        <TypeTheWordQuestion
          key={runner.cardKey}
          heading={{ text: 'Type the word' }}
          typeTheWordQuestion={runner.exerciseData.data}
          onAnswer={onAnswer}
        />
      )}
    </>
  );
};

export { SessionCardRenderer };
export type { WordDetailContent };
