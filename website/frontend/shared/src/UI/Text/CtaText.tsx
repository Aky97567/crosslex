import React from 'react';

type CtaTextProps = {
  children: React.ReactNode;
  className?: string;
};

const CtaText: React.FC<CtaTextProps> = ({ children, className = '' }) => {
  return (
    <p
      className={`text-base sm:text-md md:text-md lg:text-md text-text-cta ${className}`}
    >
      {children}
    </p>
  );
};

export { CtaText };
