type WithContent<TContent extends Record<string, unknown>> = {
  content: TContent;
};

type ContentLayout<TContent extends Record<string, unknown>> =
  WithContent<TContent>;

export type { ContentLayout };
