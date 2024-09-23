import React from 'react';

export const Heading2: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <h2 className="text-lg text-brand font-semibold mb-5">{children}</h2>;
