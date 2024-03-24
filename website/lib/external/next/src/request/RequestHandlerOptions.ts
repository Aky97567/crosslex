import { QueryExtractor } from './QueryExtractor';

type RequestHandlerOptions<TQuery extends Record<string, unknown>> = {
  locale?: string;
  queryExtractor?: QueryExtractor<TQuery>;
};

export type { RequestHandlerOptions };
