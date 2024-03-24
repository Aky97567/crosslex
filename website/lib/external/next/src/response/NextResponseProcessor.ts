import {
  ExecutionContext,
  InitializedControllers,
  WriteOptions,
} from '../requestContext';
import { NextRequestResult } from '../result';

interface NextResponseProcessor {
  decorate<TProps>(
    result: NextRequestResult<TProps>,
  ): NextRequestResult<TProps>;

  write(chunk: any, options?: WriteOptions): void;
}

interface NextResponseProcessorFactory<
  TProps extends Record<string, unknown>,
  TControllers extends InitializedControllers = {},
  TServices extends Record<string, unknown> = {},
  TQuery extends Record<string, unknown> = {},
> {
  (
    context: ExecutionContext<TProps, TControllers, TServices, TQuery>,
  ): NextResponseProcessor;
}

export type {
  NextResponseProcessor,
  NextResponseProcessorFactory,
  WriteOptions,
};
