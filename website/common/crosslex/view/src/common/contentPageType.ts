type ContentPageType = 'learn' | 'quiz';

type HasContentPageType<TPageType extends ContentPageType> = {
  type: TPageType;
};

export type { HasContentPageType };
