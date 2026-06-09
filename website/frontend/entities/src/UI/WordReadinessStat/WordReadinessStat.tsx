import React from 'react';
import { SelectableCard } from '@whitelotus/front-shared';

type Props = {
  count: number;
  label: string;
  sublabel: string;
  active: boolean;
  onClick: () => void;
};

const WordReadinessStat: React.FC<Props> = ({ count, label, sublabel, active, onClick }) => (
  <SelectableCard active={active} onClick={onClick} bordered={false} className="text-center">
    <span className="block text-4xl font-bold text-brand group-hover:text-text-cta group-data-[active=true]:text-text-cta">
      {count}
    </span>
    <span className="block font-semibold mt-4">{label}</span>
    <span className="block text-sm opacity-60">{sublabel}</span>
  </SelectableCard>
);

export { WordReadinessStat };
