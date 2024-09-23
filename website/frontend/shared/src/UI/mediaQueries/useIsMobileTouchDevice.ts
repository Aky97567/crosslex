import { useMedia } from 'react-use';
import { getBreakpoint } from './mediaQueries';

// Check for mobile devices that have virtual keyboard
export const useIsMobileTouchDevice = () => {
  const isMobileTouchDevice = useMedia(
    `(max-width: ${getBreakpoint('md')}px) and (pointer:coarse)`,
    false,
  );

  return isMobileTouchDevice;
};
