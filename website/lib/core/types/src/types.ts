type Falsey = null | undefined | false | 0 | -0 | 0n | '';

type Truthy<T> = T extends Falsey ? never : T;

/** Add any types than should be considered as a value, say, DateTimeOffset */
type AllowedPrimitives = boolean | string | number | Date;

type Value<T> = T extends AllowedPrimitives ? T : RecursivePartial<T>;

/** @see https://stackoverflow.com/a/64060332/32935 */
type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U> ? Array<Value<U>> : Value<T[P]>;
};

type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>;

/** @see https://stackoverflow.com/questions/60389559/ */
type PublicInterface<T> = Pick<T, keyof T>;

type PickByValue<T, V> = Pick<
  T,
  { [K in keyof T]: T[K] extends V ? K : never }[keyof T]
>;

/** @see https://stackoverflow.com/a/60142095/32935 */
type RecordEntries<T> = {
  [K in keyof T]: [keyof PickByValue<T, T[K]>, T[K]];
}[keyof T][];

export type {
  Falsey,
  PartialRecord,
  PublicInterface,
  RecordEntries,
  RecursivePartial,
  Truthy,
};
