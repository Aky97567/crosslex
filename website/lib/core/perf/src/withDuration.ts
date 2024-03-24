import { performance } from 'perf_hooks';

type AnyAsyncFunc<TResult> = () => Promise<TResult>;

type WithDurationOptions = {
  decimalPlaces?: number;
};

type WithDurationResult<TResult> = [TResult, number];

const round = (value: number, decimalPlaces: number = 0) => {
  const factorOfTen = Math.pow(10, decimalPlaces);

  return Math.round(value * factorOfTen) / factorOfTen;
};

const withDuration = async <TResult>(
  func: AnyAsyncFunc<TResult>,
  options?: WithDurationOptions,
): Promise<WithDurationResult<TResult>> => {
  const start = performance.now();

  const result = await func();

  return [result, round(performance.now() - start, options?.decimalPlaces)];
};

export { withDuration };
