import { Controller } from '@whitelotus/lib-sys-app';
import {
  ControllerInitializer,
  HostContext,
  SystemServices,
} from '@whitelotus/lib-sys-runtime';

type ActionBinder<
  TController extends Controller,
  TResult,
  TArgs extends unknown[],
> = (
  controller: TController,
  context: HostContext,
  ...args: TArgs
) => Promise<TResult>;

type BoundAction<TResult, TArgs extends unknown[]> = (
  ...args: TArgs
) => Promise<TResult>;

type BindActionToContext<TResult, TArgs extends unknown[]> = (
  context: HostContext,
  services: SystemServices,
) => BoundAction<TResult, TArgs>;

const makeBoundAction =
  <TController extends Controller, TResult, TArgs extends unknown[] = []>(
    initializeController: ControllerInitializer<TController>,
    bindAction: ActionBinder<TController, TResult, TArgs>,
  ): BindActionToContext<TResult, TArgs> =>
  (
    context: HostContext,
    services: SystemServices,
  ): BoundAction<TResult, TArgs> =>
  async (...args) => {
    const controller = initializeController(context, services);

    const result = await bindAction(controller, context, ...args);

    return result as TResult;
  };

export { makeBoundAction };
export type { ActionBinder, BindActionToContext, BoundAction };
