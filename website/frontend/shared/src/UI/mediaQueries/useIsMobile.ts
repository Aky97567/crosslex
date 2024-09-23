import { useMedia } from 'react-use';
import { getBreakpoint } from './mediaQueries';

// Check for mobile devices that have virtual keyboard
export const useIsMobile = () => {
  const isMobile = useMedia(`(max-width: ${getBreakpoint('md')}px)`, false);

  return isMobile;
};
