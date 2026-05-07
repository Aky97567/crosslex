import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const ModalOverlay: React.FC<Props> = ({ children }) => (
  <div className="fixed inset-0 z-40 bg-dark flex items-center justify-center">
    <div className="mx-20 max-w-400 w-full">
      {children}
    </div>
  </div>
);

export { ModalOverlay };
