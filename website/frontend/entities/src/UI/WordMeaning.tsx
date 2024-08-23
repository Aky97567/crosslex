import { Card, Heading2 } from '@whitelotus/front-shared';

type WordMeaningProps = {
  meaning: string;
};

export const WordMeaning: React.FC<WordMeaningProps> = ({ meaning }) => (
  <Card>
    <div className="mb-6">
      <Heading2>Meaning</Heading2>
      <p className="text-lg">{meaning}</p>
    </div>
  </Card>
);
