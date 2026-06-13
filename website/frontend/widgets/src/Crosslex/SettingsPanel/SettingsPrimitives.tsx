import React from 'react';

export const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-text font-semibold text-base mb-15">{children}</h2>
);

export const Divider = () => <div className="border-t border-brand my-20 opacity-30" />;
