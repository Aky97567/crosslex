type Action<TResult, TParams extends Array<unknown>> = (
  ...params: TParams
) => TResult;

type AsyncAction<TResult, TParams extends Array<unknown>> = Action<
  Promise<TResult>,
  TParams
>;

export type { Action, AsyncAction };
