type ServiceContainer<TServices extends Record<string, unknown>> = {
  readonly [TKey in keyof TServices]: TServices[TKey];
};

export type { ServiceContainer };
