type ContentPageType = 'learn';

type HasContentPageType<TPageType extends ContentPageType> = {
  type: TPageType;
};

export type { HasContentPageType };
