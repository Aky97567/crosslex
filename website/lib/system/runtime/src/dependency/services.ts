import { LoggerFactory } from '@whitelotus/lib-core-logging';
import { HostContext } from '../HostContext';

type SystemServices = {
  getLogger: LoggerFactory;

  dispose(): void;
};

interface SystemServiceInitializer {
  getServices(context: HostContext): SystemServices;
}

export type { SystemServices, SystemServiceInitializer };
