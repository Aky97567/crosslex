import { GetStaticPropsContext } from 'next';

import { NextStaticHostContext } from '../host';
import {
  DependencyInitializer,
  InitializedControllers,
} from '../requestContext';
import { NextRequestExecutor } from './NextRequestExecutor';
import { NextRequestHandler } from './NextRequestHandler';
import { RequestHandlerOptions } from './RequestHandlerOptions';

abstract class NextStaticRequestHandler<
  TProps extends Record<string, unknown>,
  TControllers extends InitializedControllers,
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

    this.getStaticProps = this.getStaticProps.bind(this);
  }

  public async getStaticProps(nextContext: GetStaticPropsContext) {
    const { run } = new NextRequestExecutor(
      new NextStaticHostContext(nextContext, this.options?.locale),
      'Static',
      this.routeName,
      this.executeRequest,
      this.dependenciesInitializer,
      this.options?.queryExtractor,
    );

    return await run();
  }
}

export { NextStaticRequestHandler };
