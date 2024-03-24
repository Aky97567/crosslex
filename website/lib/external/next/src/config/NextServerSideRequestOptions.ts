import { ContentType } from '../contentType';
import { NextCacheConfig } from './NextCacheConfig';

type NextServerSideRequestOptions = {
  cache?: NextCacheConfig;
  contentType?: ContentType;
};

export type { NextServerSideRequestOptions };
