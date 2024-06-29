import { MeaningBestGuessQuestion } from '@whitelotus/common-crosslex-view';
import { Card } from '@whitelotus/front-shared';

type MeaningGuessQuestionProps = {
  meaningBestGuessQuestion: MeaningBestGuessQuestion;
};

export const MeaningGuessQuestion: React.FC<MeaningGuessQuestionProps> = ({
  meaningBestGuessQuestion,
}) =>
  meaningBestGuessQuestion ? (
    <Card>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          Meaning Best Guess Question
        </h2>
        <p className="text-lg">{meaningBestGuessQuestion.question}</p>
      </div>
    </Card>
  ) : null;
