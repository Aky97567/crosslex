enum LogLevel {
  Trace = 'trace',
  Debug = 'debug',
  Info = 'info',
  Warn = 'warn',
  Error = 'error',
}

type LogEntry = {
  contextId: string;
  level: LogLevel;
  module: string;
  message: string;
  data?: Record<string, any>;
};

type LogOptions = {
  minLevels: {
    [module: string]: LogLevel;
  };
  format: 'default' | 'ecs';
};

interface LogTarget {
  (logEntry: LogEntry): void;
}

export { LogLevel };
export type { LogEntry, LogOptions, LogTarget };
