import React from 'react';

export const Heading1: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <h1 className="text-lg text-brand font-semibold mb-5">{children}</h1>;
