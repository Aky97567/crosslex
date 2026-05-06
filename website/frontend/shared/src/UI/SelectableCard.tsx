import { FC, ReactNode } from 'react';

type SelectableCardProps = {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
  bordered?: boolean;
  className?: string;
};

const SelectableCard: FC<SelectableCardProps> = ({
  active,
  onClick,
  children,
  bordered = true,
  className = '',
}) => {
  const border = active
    ? 'border-brand bg-brand-2 text-text-cta'
    : bordered
      ? 'border-brand hover:bg-brand-2 hover:text-text-cta'
      : 'border-transparent hover:bg-brand-2 hover:text-text-cta';

  return (
    <button
      onClick={onClick}
      data-active={String(active)}
      className={`group w-full rounded-md border-2 px-20 py-12 text-left text-text transition-colors duration-200 cursor-pointer ${border} ${className}`}
    >
      {children}
    </button>
  );
};

export { SelectableCard };
