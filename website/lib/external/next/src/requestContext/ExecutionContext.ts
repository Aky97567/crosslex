import { Logger } from '@whitelotus/lib-core-logging';
import { HostContext } from '@whitelotus/lib-sys-runtime';

import { NextRequestResult } from '../result';
import { Dependencies, InitializedControllers } from './InitializedControllers';

export type WriteOptions = {
  endResponse?: boolean;
  setHeaders?: boolean;
};

type Response<TProps extends Record<string, unknown>> = {
  notFound(): NextRequestResult<TProps>;
  ok(props: TProps): NextRequestResult<TProps>;
  permanentRedirect(redirectUrl: string): NextRequestResult<TProps>;
  serverError(
    message: string,
    data?: Record<string, unknown>,
  ): NextRequestResult<TProps>;
  temporaryRedirect(redirectUrl: string): NextRequestResult<TProps>;
  write(chunk: any, options?: WriteOptions): void;
};

export type ExecutionContext<
  TProps extends Record<string, unknown>,
  TControllers extends InitializedControllers,
  TServices extends Record<string, unknown>,
  TQuery extends Record<string, unknown> = {},
> = {
  dependencies: Dependencies<TControllers, TServices>;
  host: HostContext;
  logger: Logger;
  query: TQuery;
  response: Response<TProps>;
};
