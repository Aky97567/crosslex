import { Controller } from '@whitelotus/lib-sys-app';

import { HostContext } from '../HostContext';
import { SystemServices } from './services';

type ControllerInitializer<TController extends Controller> = (
  context: HostContext,
  services: SystemServices,
) => TController;

export type { ControllerInitializer };
