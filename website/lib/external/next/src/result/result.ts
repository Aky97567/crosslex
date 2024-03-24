import { GetServerSidePropsResult, GetStaticPropsResult } from 'next/types';

import { NextResponseProcessor } from '../response';

export type NextRequestResult<TProps> =
  | GetStaticPropsResult<TProps>
  | GetServerSidePropsResult<TProps>;

export type ServerErrorOptions = {
  message: string;
  data?: Record<string, unknown>;
};

export namespace NextResult {
  export const NotFound = <TProps>() =>
    ({ notFound: true } as NextRequestResult<TProps>);

  export const PermanentRedirect = <TProps>(destination: string) =>
    ({
      redirect: { statusCode: 301, destination },
    } as NextRequestResult<TProps>);

  export const ServerError = <TProps>(
    options: ServerErrorOptions,
    responseProcessor?: NextResponseProcessor,
  ) => {
    const result = {
      props: {
        error: options,
      },
    } as NextRequestResult<TProps>;

    if (responseProcessor) {
      return responseProcessor.decorate(result);
    }

    return result;
  };

  export const Success = <TProps>(
    props: TProps,
    responseProcessor?: NextResponseProcessor,
  ) => {
    const result = { props } as NextRequestResult<TProps>;

    if (responseProcessor) {
      return responseProcessor.decorate(result);
    }

    return result;
  };

  export const TemporaryRedirect = <TProps>(destination: string) =>
    ({
      redirect: { statusCode: 302, destination },
    } as NextRequestResult<TProps>);
}
