import React from 'react';

type BodyTextProps = {
  children: React.ReactNode;
  className?: string;
};

const BodyText: React.FC<BodyTextProps> = ({ children, className = '' }) => {
  return (
    <p
      className={`text-base sm:text-md md:text-lg lg:text-lg text-text mb-10 ${className}`}
    >
      {children}
    </p>
  );
};

export { BodyText };
