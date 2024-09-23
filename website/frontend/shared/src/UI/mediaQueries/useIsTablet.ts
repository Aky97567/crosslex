import { useMedia } from 'react-use';
import { getBreakpoint } from './mediaQueries';
import { useIsMobile } from './useIsMobile';

// Check for mobile devices that have virtual keyboard
export const useIsTablet = () => {
  const isMobile = useIsMobile();
  const isTabletDevice = useMedia(
    `(max-width: ${getBreakpoint('lg')}px)`,
    false,
  );

  return isTabletDevice && !isMobile;
};
