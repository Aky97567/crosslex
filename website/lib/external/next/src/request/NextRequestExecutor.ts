import { Logger } from '@whitelotus/lib-core-logging';
import { withDuration } from '@whitelotus/lib-core-perf';
import { Check } from '@whitelotus/lib-core-types';
import { HostContext } from '@whitelotus/lib-sys-runtime';

import {
  NextResponseProcessor,
  NextResponseProcessorFactory,
  WriteOptions,
} from '../response';
import { NextRequestResult, NextResult } from '../result';
import {
  Dependencies,
  DependencyInitializer,
  ExecutionContext,
  InitializedControllers,
} from '../requestContext';
import { QueryExtractor } from './QueryExtractor';

type ExecuteRequest<
  TProps extends Record<string, unknown>,
  TControllers extends InitializedControllers,
  TServices extends Record<string, unknown>,
  TQuery extends Record<string, unknown>,
> = (
  context: ExecutionContext<TProps, TControllers, TServices, TQuery>,
) => Promise<NextRequestResult<TProps>>;

class NextRequestExecutor<
  TProps extends Record<string, unknown>,
  TControllers extends InitializedControllers,
  TServices extends Record<string, unknown>,
  TQuery extends Record<string, unknown>,
> {
  private dependencies: Dependencies<TControllers, TServices>;
  private executionContext: ExecutionContext<
    TProps,
    TControllers,
    TServices,
    TQuery
  >;
  private logger: Logger;
  private query?: TQuery;
  private responseHandler?: NextResponseProcessor;

  constructor(
    protected host: HostContext,
    requestType: string,
    routeName: string,
    private executeRequest: ExecuteRequest<
      TProps,
      TControllers,
      TServices,
      TQuery
    >,
    dependencyInitializer: DependencyInitializer<
      TControllers,
      TServices,
      TQuery
    >,
    queryExtractor?: QueryExtractor<TQuery>,
    configureResponse?:
      | NextResponseProcessorFactory<TProps, TControllers, TServices, TQuery>
      | undefined,
  ) {
    this.run = this.run.bind(this);
    this.ok = this.ok.bind(this);
    this.notFound = this.notFound.bind(this);
    this.permanentRedirect = this.permanentRedirect.bind(this);
    this.serverError = this.serverError.bind(this);
    this.temporaryRedirect = this.temporaryRedirect.bind(this);
    this.write = this.write.bind(this);

    this.query = queryExtractor ? queryExtractor.extract(this.host) : undefined;
    this.dependencies = dependencyInitializer.initialize(this.host, this.query);
    this.logger = this.dependencies.core.getLogger(
      `Next > ${requestType} Request > ${routeName}`,
    );
    this.executionContext = {
      dependencies: this.dependencies,
      host: this.host,
      logger: this.logger,
      query: this.query as TQuery,
      response: {
        notFound: this.notFound,
        ok: this.ok,
        permanentRedirect: this.permanentRedirect,
        serverError: this.serverError,
        temporaryRedirect: this.temporaryRedirect,
        write: this.write,
      },
    };
    this.responseHandler = configureResponse
      ? configureResponse(this.executionContext)
      : undefined;
  }

  public async run(): Promise<NextRequestResult<TProps>> {
    this.logger.info('A request was executed', {
      hostName: this.host.hostName,
      locale: this.host.locale,
      query: this.query,
    });

    try {
      const [response, duration] = await withDuration(() =>
        this.executeRequest(this.executionContext),
      );

      this.logger.info('A request was completed', {
        duration: `${duration}ms`,
      });

      return response;
    } catch (error) {
      console.log('error', { error });

      return this.serverError(
        'An unanticipated error occurred while loading the page',
        { error },
      );
    }
  }

  protected ok(props: TProps) {
    return NextResult.Success<TProps>(props, this.responseHandler);
  }

  protected notFound() {
    this.logger.info("A request was made for a page that doesn't exist");

    return NextResult.NotFound<TProps>();
  }

  protected permanentRedirect(redirectUrl: string) {
    if (!Check.isString(redirectUrl)) {
      return this.serverError(
        'A redirect status came back without a redirect url',
      );
    }

    return NextResult.PermanentRedirect<TProps>(redirectUrl);
  }

  protected serverError(message: string, data: Record<string, unknown> = {}) {
    const serializedData = JSON.parse(JSON.stringify(data));

    this.logger.error('A request could not be adequately processed', {
      ...data,
      message,
      context: this.host,
    });

    return NextResult.ServerError<TProps>(
      { message, data: serializedData },
      this.responseHandler,
    );
  }

  protected temporaryRedirect(redirectUrl: string) {
    if (!Check.isString(redirectUrl)) {
      return this.serverError(
        'A redirect status came back without a redirect url',
      );
    }

    return NextResult.TemporaryRedirect<TProps>(redirectUrl);
  }

  protected write(chunk: any, options: WriteOptions) {
    if (!this.responseHandler) {
      this.logger.warn(
        'Attempted to write to the response but no response handler provided',
      );

      return;
    }

    this.responseHandler.write(chunk, options);
  }
}

export { NextRequestExecutor };
