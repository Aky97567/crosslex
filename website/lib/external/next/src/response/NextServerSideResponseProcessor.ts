import { ServerResponse } from 'http';

import { NextCacheConfig } from '../config';
import { ContentType } from '../contentType';
import { NextRequestResult } from '../result';
import { NextResponseProcessor } from './NextResponseProcessor';

class NextServerSideResponseProcessor implements NextResponseProcessor {
  private canWriteResponse = true;
  constructor(
    private response: ServerResponse,
    private cacheOptions?: NextCacheConfig,
    private contentType?: ContentType,
  ) {}

  decorate<TProps>(
    result: NextRequestResult<TProps>,
  ): NextRequestResult<TProps> {
    const resultHasProps = Object.hasOwn(result, 'props');
    this.decorateCache(resultHasProps);
    this.decorateContentType();
    // @ts-ignore
    const errorStatusCode = resultHasProps && result.props?.error ? result.props?.error?.response?.status ?? 400 : null;
    if (errorStatusCode) {
      this.response.statusCode = errorStatusCode;
    }

    return result;
  }

  write(chunk: any, { endResponse = true, setHeaders = false } = {}) {
    if (setHeaders) {
      this.decorateCache();
      this.decorateContentType();
    }

    this.response.write(chunk);

    if (endResponse) {
      this.response.end();
      this.canWriteResponse = false;
    }
  }

  private decorateCache(canSetHeader: boolean = true) {
    if (!this.canWriteResponse || !this.cacheOptions || !canSetHeader) {
      return;
    }

    const {
      maxAge = 0,
      staleWhileRevalidate,
      edgeCacheTags = [],
    } = this.cacheOptions;
    const revalidation = staleWhileRevalidate
      ? `stale-while-revalidate=${staleWhileRevalidate}`
      : 'must-revalidate';

    this.response.setHeader(
      'Cache-Control',
      `public, s-maxage=${maxAge}, ${revalidation}`,
    );

    this.response.setHeader('Edge-Cache-Tag', edgeCacheTags.join(','));
  }

  private decorateContentType() {
    if (!this.canWriteResponse || !this.contentType) {
      return;
    }

    switch (this.contentType) {
      case ContentType.Xml:
        this.response.setHeader(
          'Content-Type',
          'application/xml; charset=utf-8',
        );
        break;
    }
  }
}

export { NextServerSideResponseProcessor };
