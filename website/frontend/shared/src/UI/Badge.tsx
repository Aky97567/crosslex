import { FC, ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  variant?: 'light' | 'dark';
};

const Badge: FC<BadgeProps> = ({ children, variant = 'light' }) => {
  const base = 'inline-block rounded-md text-sm px-15 py-5';
  const variants = {
    light: 'bg-bg-l2 border border-brand text-text',
    dark: 'bg-brand text-text-cta font-semibold',
  };
  return <span className={`${base} ${variants[variant]}`}>{children}</span>;
};

export { Badge };
