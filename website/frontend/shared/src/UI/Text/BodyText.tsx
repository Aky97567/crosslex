import React from 'react';

type BodyTextProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'p' | 'span';
};

const BodyText: React.FC<BodyTextProps> = ({
  children,
  className = '',
  as: Tag = 'p',
}) => (
  <Tag
    className={`text-base sm:text-md md:text-lg lg:text-lg text-text mb-10 ${className}`}
  >
    {children}
  </Tag>
);

export { BodyText };
