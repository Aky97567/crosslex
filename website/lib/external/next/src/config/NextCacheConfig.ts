enum Seconds {
  OneWeek = 604800,

  OneDay = 86400,

  FifteenMinutes = 900,

  TenSeconds = 10,
}

type NextCacheConfig = {
  maxAge?: Seconds;
  staleWhileRevalidate?: Seconds;
  edgeCacheTags?: string[];
};

export { Seconds };
export type { NextCacheConfig };
