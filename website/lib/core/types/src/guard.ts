import * as Check from './check';
import { IdentifiedSchema } from './schema';
import { Truthy } from './types';

// @todo: implement a custom error type here (or even passed in as part of the options).

export type GuardOptions = {
  errorMessage?: string;
  errorData?: Record<string, unknown>;
};

const formatData = (data: Record<string, unknown>) =>
  Object.entries(data).reduce((previousValue, [key, value]) => {
    let formattedEntry = `${key}: ${value}`;

    return previousValue.length > 0
      ? `${previousValue}, ${formattedEntry}`
      : formattedEntry;
  }, '');

const message = (
  options: GuardOptions | undefined,
  fallbackMessage: string,
) => {
  const dataString = options?.errorData
    ? ` (${formatData(options.errorData)})`
    : undefined;

  const message = options?.errorMessage || fallbackMessage;

  return dataString ? `${message} ${dataString}` : message;
};

const extendOptions = (
  options: GuardOptions,
  args: Record<string, unknown>,
) => {
  let data = Object.prototype.hasOwnProperty.call(options, 'data')
    ? options.errorData
    : {};

  return Object.assign({}, options, {
    data: {
      ...args,
      ...data,
    },
  });
};

export const isString: (
  value: unknown,
  options?: GuardOptions,
) => asserts value is string = (value, options = {}) => {
  if (!Check.isString(value)) {
    throw new Error(
      message(extendOptions(options, { value }), 'Value not string'),
    );
  }
};

export const isTruthy: <TValue>(
  value: unknown,
  options?: GuardOptions,
) => asserts value is Truthy<TValue> = (value, options = {}) => {
  if (!Check.isTruthy(value)) {
    throw new Error(
      message(extendOptions(options, { value }), 'Value not truthy'),
    );
  }
};

export const isDefined: <TValue>(
  value: TValue | undefined,
  options?: GuardOptions,
) => asserts value is TValue = (value, options = {}) => {
  if (!Check.isDefined(value)) {
    throw new Error(
      message(extendOptions(options, { value }), `Value undefined`),
    );
  }
};

export const isNotNull: <TValue>(
  value: TValue | null,
  options?: GuardOptions,
) => asserts value is TValue = (value, options = {}) => {
  if (value !== null) {
    throw new Error(message(extendOptions(options, { value }), `Value null`));
  }
};

type TypeTest<TValue> = (value: unknown) => value is TValue;

export const isType: <TValue>(
  value: unknown,
  test: string | TypeTest<TValue>,
  options?: GuardOptions,
) => asserts value is TValue = (value, test, options = {}) => {
  if (Check.isString(test)) {
    if (typeof value !== test) {
      throw new Error(
        message(
          extendOptions(options, { type: test, value }),
          'Value of incorrect type',
        ),
      );
    }
  } else {
    if (!test(value)) {
      throw new Error(
        message(extendOptions(options, { value }), 'Value of incorrect type'),
      );
    }
  }
};

export const implementsType: <TResult>(
  obj: unknown,
  schema: IdentifiedSchema,
  options?: GuardOptions & Check.TypeCheckOptions,
) => asserts obj is TResult = (obj, schema, options = {}) => {
  if (!Check.implementsType(obj, schema, options)) {
    throw new Error(
      message(
        extendOptions(options, { schema: schema.id }),
        'Object failed schema validation',
      ),
    );
  }
};
