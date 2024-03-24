interface HostContext {
  readonly id: string;
  readonly hostName: string;
  readonly locale?: string;
  readonly locales: string[];
  readonly query: Record<string, string | string[] | undefined>;
  readonly unlocalized: boolean;
}

export type { HostContext };
