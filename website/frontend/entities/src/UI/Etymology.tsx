import { Card } from '@whitelotus/front-shared';

type EtymologyProps = {
  etymology: string;
};

export const Etymology: React.FC<EtymologyProps> = ({ etymology }) =>
  etymology && (
    <Card>
      <div className="mb-6">
        <h2 className="text-2xl text-brand font-semibold mb-10">Etymology</h2>
        <p className="text-lg">{etymology}</p>
      </div>
    </Card>
  );
