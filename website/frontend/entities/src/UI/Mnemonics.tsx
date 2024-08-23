import { Mnemonic } from '@/common/crosslex/view/src';
import { Card } from '@whitelotus/front-shared';

type EtymologyProps = {
  mnemonics: Mnemonic[];
};

export const Mnemonics: React.FC<EtymologyProps> = ({ mnemonics }) =>
  mnemonics &&
  mnemonics.length > 0 && (
    <Card>
      <div className="mb-6">
        <h2 className="text-2xl text-brand font-semibold mb-10">
          Memory Hooks
        </h2>
        <ul className="list-disc list-inside">
          {mnemonics.map((hook, index) => (
            <li key={index} className="text-lg">
              {hook.content}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
