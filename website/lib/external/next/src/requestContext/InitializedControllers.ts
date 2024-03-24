import { Controller } from '@whitelotus/lib-sys-app';
import { HostContext, SystemServices } from '@whitelotus/lib-sys-runtime';

type InitializedControllers = {
  [TKeys in string]: Controller;
};

type Dependencies<
  TControllers extends InitializedControllers,
  TServices extends Record<string, unknown>,
> = {
  core: SystemServices;
  controllers: TControllers;
  services: TServices;
};

interface DependencyInitializer<
  TControllers extends InitializedControllers,
  TServices extends Record<string, unknown>,
  TQuery extends Record<string, unknown>,
> {
  initialize(
    context: HostContext,
    query?: TQuery,
  ): Dependencies<TControllers, TServices>;

  dispose(): void;
}

export type { Dependencies, DependencyInitializer, InitializedControllers };
