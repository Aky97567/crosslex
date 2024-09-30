import { FC, ReactNode } from 'react';
import { Heading as HeadingElement } from '@whitelotus/common-crosslex-view';
import { Heading } from './Heading';

interface CardProps {
  children: ReactNode;
  className?: string;
  heading?: HeadingElement;
  needClose?: boolean;
  onClose?: () => void;
}

const Card: FC<CardProps> = ({
  children,
  className = '',
  heading,
  needClose = false,
  onClose,
}) => {
  return (
    <div
      className={`bg-bg-l2 border-solid border-2 border-brand shadow-lg rounded-lg p-30 ${className}`}
    >
      {needClose ? (
        <div className="flex justify-between items-center mb-4">
          <Heading heading={heading} />
          {needClose && (
            <button
              onClick={onClose}
              className="hover:text-brand focus:outline-none text-text"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-60 w-60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      ) : (
        <Heading heading={heading} />
      )}
      {children}
    </div>
  );
};

export { Card };
