/**
 * @remarks
 * Source: https://adrianhall.github.io/cloud/2019/06/30/building-an-efficient-logger-in-typescript/
 */
import EventEmitter from 'events';

import { LogEntry, LogLevel } from './LogEntry';

interface LoggerFactory {
  (namespace: string): Logger;
}

interface Logger {
  trace(message: string, data?: Record<string, any>): void;

  debug(message: string, data?: Record<string, any>): void;

  info(message: string, data?: Record<string, any>): void;

  warn(message: string, data?: Record<string, any>): void;

  error(message: string, data?: Record<string, any>): void;
}

class LoggerImpl implements Logger {
  private logManager: EventEmitter;
  private minLevel: number;
  private module: string;
  private readonly levels: { [key: string]: number } = {
    trace: 1,
    debug: 2,
    info: 3,
    warn: 4,
    error: 5,
  };

  constructor(
    logManager: EventEmitter,
    module: string,
    minLevel: LogLevel | undefined,
    private id: string,
  ) {
    this.logManager = logManager;
    this.module = module;
    this.minLevel = this.levelToInt(minLevel);
  }

  /**
   * Converts a string level (trace/debug/info/warn/error) into a number
   *
   * @param minLevel
   */
  private levelToInt(minLevel?: LogLevel): number {
    if (!!minLevel && minLevel in this.levels) {
      return this.levels[minLevel];
    }

    return 99;
  }

  /**
   * Central logging method.
   * @param logLevel
   * @param message
   */
  public log(
    logLevel: LogLevel,
    message: string,
    data?: Record<string, any>,
  ): void {
    const level = this.levelToInt(logLevel);

    if (level < this.minLevel) {
      return;
    }

    const logEntry: LogEntry = {
      contextId: this.id,
      level: logLevel,
      module: this.module,
      message,
    };

    if (data) {
      logEntry.data = data;
    }

    this.logManager.emit('log', logEntry);
  }

  public trace(message: string, data?: Record<string, any>): void {
    this.log(LogLevel.Trace, message, data);
  }

  public debug(message: string, data?: Record<string, any>): void {
    this.log(LogLevel.Debug, message, data);
  }

  public info(message: string, data?: Record<string, any>): void {
    this.log(LogLevel.Info, message, data);
  }

  public warn(message: string, data?: Record<string, any>): void {
    this.log(LogLevel.Warn, message, data);
  }

  public error(message: string, data?: Record<string, any>): void {
    this.log(LogLevel.Error, message, data);
  }
}

export { LoggerImpl };
export type { Logger, LoggerFactory };
