import React from 'react';
import { Card } from '@whitelotus/front-shared';

type WordIntroCardProps = {
  hasImage: boolean;
  children: React.ReactNode;
};

export const WordIntroCard: React.FC<WordIntroCardProps> = ({
  hasImage,
  children,
}) => (
  <Card className={hasImage ? 'flex flex-row justify-between' : ''}>
    {children}
  </Card>
);
