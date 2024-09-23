import { Mnemonic } from '@/common/crosslex/view/src';
import { Card, Heading2 } from '@whitelotus/front-shared';

type EtymologyProps = {
  mnemonics: Mnemonic[];
};

export const Mnemonics: React.FC<EtymologyProps> = ({ mnemonics }) => (
  <Card>
    <div className="mb-6">
      {mnemonics && mnemonics.length > 0 ? (
        <>
          <Heading2>Memory Hooks</Heading2>
          <ul className="list-disc list-inside">
            {mnemonics.map((hook, index) => (
              <li key={index} className="text-lg text-text">
                {hook.content}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-lg text-text">No mnemonics available.</p>
      )}
    </div>
  </Card>
);
