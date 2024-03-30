
import { DependencyInitializer } from '@whitelotus/lib-ext-next';
import { HostContext, SystemServices } from '@whitelotus/lib-sys-runtime';

import {
  CoreServicesContainer,
} from './dependencies';

type Controllers = {};
type Services = {};

class ApplicationDependencyInitializer<
  TQuery extends Record<string, unknown> = {},
> implements DependencyInitializer<Controllers, Services, TQuery>
{
  private _core?: SystemServices;

  constructor() {
    this.dispose = this.dispose.bind(this);
    this.initialize = this.initialize.bind(this);
  }

  initialize(host: HostContext, query?: TQuery) {
    const core = (this._core = new CoreServicesContainer(host));

    return {
      controllers: {},
      core,
      host,
      query: query || ({} as TQuery),
      services: {
      },
    };
  }

  dispose() {
    this._core?.dispose();
  }
}

export { ApplicationDependencyInitializer };
export type { Services };
