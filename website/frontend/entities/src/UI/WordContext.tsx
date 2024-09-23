import { Card, Heading2 } from '@whitelotus/front-shared';

type WordContextProps = {
  paragraphWithUsage: string;
};

export const WordContext: React.FC<WordContextProps> = ({
  paragraphWithUsage,
}) =>
  paragraphWithUsage && (
    <Card>
      <div className="mb-6">
        <Heading2>Usage</Heading2>
        <p className="text-lg text-text">{paragraphWithUsage}</p>
      </div>
    </Card>
  );
