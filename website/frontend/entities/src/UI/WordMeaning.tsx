import { Card } from '@whitelotus/front-shared';

type WordMeaningProps = {
  meaning: string;
};

export const WordMeaning: React.FC<WordMeaningProps> = ({ meaning }) => (
  <Card>
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Meaning</h2>
      <p className="text-lg">{meaning}</p>
    </div>
  </Card>
);
