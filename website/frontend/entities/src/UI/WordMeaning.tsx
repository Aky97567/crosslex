import { Card } from '@whitelotus/front-shared';

type WordMeaningProps = {
  meaning: string;
};

export const WordMeaning: React.FC<WordMeaningProps> = ({ meaning }) => (
  <Card>
    <div className="mb-6">
      <h2 className="text-2xl text-brand font-semibold mb-10">Meaning</h2>
      <p className="text-lg">{meaning}</p>
    </div>
  </Card>
);
