import { Validator, ValidatorResult } from 'jsonschema';

import { IdentifiedSchema } from './schema';
import { Truthy } from './types';

const validator = new Validator();
const schemas = new Map<string, IdentifiedSchema>();

type NonEmptyString<T extends string> = '' extends T ? never : T;

export type ValidationErrorCallback = (
  validationResult: ValidatorResult,
) => void;

export type TypeCheckOptions = {
  onValidationError?: ValidationErrorCallback;
};

export const isString = (val: unknown): val is string =>
  typeof val === 'string';

export const isNotEmpty = <TValue extends string>(
  val: TValue,
): val is NonEmptyString<TValue> => isString(val) && val !== '';

export const isDefined = <TValue>(val: TValue | undefined): val is TValue =>
  typeof val !== 'undefined';

export const isTruthy = <TValue>(val: unknown): val is Truthy<TValue> => !!val;

export const implementsType = <TResult>(
  obj: unknown,
  schema: IdentifiedSchema,
  { onValidationError }: TypeCheckOptions = {},
): obj is TResult => {
  if (!schemas.has(schema.id)) {
    validator.addSchema(schema, schema.id);
    schemas.set(schema.id, schema);
  }

  const result = validator.validate(obj, schema);

  if (!result.valid && onValidationError) {
    onValidationError(result);
  }

  return result.valid;
};
