import { Card } from '@whitelotus/front-shared';

type WordContextProps = {
  paragraphWithUsage: string;
};

export const WordContext: React.FC<WordContextProps> = ({
  paragraphWithUsage,
}) =>
  paragraphWithUsage && (
    <Card>
      <div className="mb-6">
        <h2 className="text-2xl text-brand font-semibold mb-10">Usage</h2>
        <p className="text-lg">{paragraphWithUsage}</p>
      </div>
    </Card>
  );
