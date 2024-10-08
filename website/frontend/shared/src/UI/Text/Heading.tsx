import React from 'react';
import { Heading as HeadingElement } from '@whitelotus/common-crosslex-view';

interface HeadingProps {
  className?: string;
  heading?: HeadingElement;
}

export const Heading: React.FC<HeadingProps> = ({
  className = '',
  heading,
}) => {
  return heading
    ? React.createElement(
        `${heading.level}`,
        { className: `${className} text-lg text-brand font-semibold mb-5` },
        heading.text,
      )
    : null;
};
