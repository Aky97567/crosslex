import React from 'react';
import { Placeholder } from './Placeholder';

const LearningPage = (props: any) => {
  const { content } = props;

  if (!content) {
    // return null;
    return <Placeholder {...props} />;
  }

  return <Placeholder {...props} />;
};

export { LearningPage };
