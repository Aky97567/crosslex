import { HostContext } from '@whitelotus/lib-sys-runtime';

interface QueryExtractor<TQuery extends Record<string, unknown>> {
  extract(context: HostContext): TQuery;
}

export type { QueryExtractor };
