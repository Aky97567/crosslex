import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-white border-solid border-2 border-color3 shadow-lg rounded-lg p-30 ${className}`}
    >
      {children}
    </div>
  );
};

export { Card };
