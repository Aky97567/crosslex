import { IncomingMessage, ServerResponse } from 'http';

import { Seconds } from '../config';
import { ExecutionContext, InitializedControllers } from '../requestContext';

import { NextResponseProcessorFactory } from './NextResponseProcessor';
import { NextServerSideResponseProcessor } from './NextServerSideResponseProcessor';
import { ResponseSettings } from './ResponseSettings';

type ProvideOneWeekCacheSettings<
  TProps extends Record<string, unknown>,
  TControllers extends InitializedControllers = {},
  TServices extends Record<string, unknown> = {},
  TQuery extends Record<string, unknown> = {},
> = (
  deps: ExecutionContext<TProps, TControllers, TServices, TQuery>,
) => ResponseSettings;

class OneWeekCacheResponseConfiguration<
  TProps extends Record<string, unknown>,
  TControllers extends InitializedControllers = {},
  TServices extends Record<string, unknown> = {},
  TQuery extends Record<string, unknown> = {},
> {
  configure(
    res: ServerResponse<IncomingMessage>,
    getSettings: (
      deps: ExecutionContext<TProps, TControllers, TServices, TQuery>,
    ) => ResponseSettings,
  ): NextResponseProcessorFactory<TProps, TControllers, TServices, TQuery> {
    return context => {
      const { enableResponseCache } = getSettings(context);

      const cacheAge = enableResponseCache
        ? Seconds.OneWeek
        : Seconds.TenSeconds;

      return new NextServerSideResponseProcessor(res, {
        maxAge: cacheAge,
        staleWhileRevalidate: cacheAge,
        edgeCacheTags: ['nextjs'],
      });
    };
  }
}

export { OneWeekCacheResponseConfiguration };
export type { ProvideOneWeekCacheSettings };
