import React from 'react';

export const ModuleWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div style={{ maxWidth: 'min(95dvw, 95svw)', overflowX: 'auto' }}>
    {children}
  </div>
);
