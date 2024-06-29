import { SimilarWord } from '@/common/crosslex/view/src';
import { Card } from '@whitelotus/front-shared';

type EtymologyProps = {
  similarWords: SimilarWord[];
};

export const SimilarWords: React.FC<EtymologyProps> = ({ similarWords }) =>
  similarWords &&
  similarWords.length > 0 && (
    <Card>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Similar Words</h2>
        <ul className="list-disc list-inside">
          {similarWords.map((similarWord, index) => (
            <li key={index} className="text-lg">
              {similarWord.word}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
