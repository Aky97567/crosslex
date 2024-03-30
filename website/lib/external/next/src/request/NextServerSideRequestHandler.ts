import { IncomingMessage, ServerResponse } from 'http';
import { GetServerSidePropsContext } from 'next';

import { NextServerSideHostContext } from '../host';
import {
  FifteenMinutesCacheResponseConfiguration,
  NextResponseProcessorFactory,
  OneWeekCacheResponseConfiguration,
  ProvideFifteenMinutesCacheSettings,
  ProvideOneWeekCacheSettings,
} from '../response';
import {
  DependencyInitializer,
  InitializedControllers,
} from '../requestContext';
import { NextRequestExecutor } from './NextRequestExecutor';
import { NextRequestHandler } from './NextRequestHandler';
import { RequestHandlerOptions } from './RequestHandlerOptions';

type ResponseConfiguration<
  TProps extends Record<string, unknown>,
  TControllers extends InitializedControllers = {},
  TServices extends Record<string, unknown> = {},
  TQuery extends Record<string, unknown> = {},
> = {
  oneWeek?: ProvideOneWeekCacheSettings<
    TProps,
    TControllers,
    TServices,
    TQuery
  >;
  fifteenMinutes?: ProvideFifteenMinutesCacheSettings<
    TProps,
    TControllers,
    TServices,
    TQuery
  >;
};

abstract class NextServerSideRequestHandler<
  TProps extends Record<string, unknown>,
  TControllers extends InitializedControllers = {},
  TServices extends Record<string, unknown> = {},
  TQuery extends Record<string, unknown> = {},
> extends NextRequestHandler<TProps, TControllers, TServices, TQuery> {
  protected constructor(
    protected routeName: string,
    private dependenciesInitializer: DependencyInitializer<
      TControllers,
      TServices,
      TQuery
    >,
    private options?: RequestHandlerOptions<TQuery>,
  ) {
    super();

    this.responseProcessor = this.responseProcessor.bind(this);
    this.getServerSideProps = this.getServerSideProps.bind(this);
  }

  public async getServerSideProps(nextContext: GetServerSidePropsContext) {
    const { run } = new NextRequestExecutor(
      new NextServerSideHostContext(nextContext, this.options?.locale || 'en'),
      'Server Side',
      this.routeName,
      this.executeRequest,
      this.dependenciesInitializer,
      this.options?.queryExtractor,
      this.responseProcessor(nextContext.res),
    );

    return await run();
  }

  protected getResponseConfiguration():
    | ResponseConfiguration<TProps, TControllers, TServices, TQuery>
    | undefined {
    // Override in implementing class if desired.
    return undefined;
  }

  private responseProcessor(
    res: ServerResponse<IncomingMessage>,
  ):
    | NextResponseProcessorFactory<TProps, TControllers, TServices, TQuery>
    | undefined {
    const responseConfiguration = this.getResponseConfiguration();

    if (responseConfiguration?.oneWeek) {
      const { configure } = new OneWeekCacheResponseConfiguration<
        TProps,
        TControllers,
        TServices,
        TQuery
      >();

      return configure(res, responseConfiguration.oneWeek);
    }

    if (responseConfiguration?.fifteenMinutes) {
      const { configure } = new FifteenMinutesCacheResponseConfiguration<
        TProps,
        TControllers,
        TServices,
        TQuery
      >();

      return configure(res, responseConfiguration.fifteenMinutes);
    }
  }
}

export { NextServerSideRequestHandler };
