import { Card, Heading2 } from '@whitelotus/front-shared';

type EtymologyProps = {
  etymology: string;
};

export const Etymology: React.FC<EtymologyProps> = ({ etymology }) =>
  etymology && (
    <Card>
      <div className="mb-6">
        <Heading2>Etymology</Heading2>
        <p className="text-lg">{etymology}</p>
      </div>
    </Card>
  );
