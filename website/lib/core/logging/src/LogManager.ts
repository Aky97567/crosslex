/**
 * @remarks
 * Source: https://adrianhall.github.io/cloud/2019/06/30/building-an-efficient-logger-in-typescript/
 */
import { EventEmitter } from 'events';

import { LogLevel, LogOptions, LogTarget } from './LogEntry';
import { Logger, LoggerImpl } from './Logger';
import { formatMessage, EcsMessage } from './ecs';

class LogManager extends EventEmitter {
  private options: LogOptions = {
    minLevels: {
      '': LogLevel.Info,
    },
    format: 'ecs',
  };

  private constructor(private id: string) {
    super();

    this.configure = this.configure.bind(this);
    this.getLogger = this.getLogger.bind(this);
    this.registerTarget = this.registerTarget.bind(this);
    this.registerConsoleLogger = this.registerConsoleLogger.bind(this);
  }

  private static instances = new Map<string, LogManager>();

  public static getInstance(instanceId: string) {
    if (!LogManager.instances.has(instanceId)) {
      LogManager.instances.set(instanceId, new LogManager(instanceId));
    }

    return LogManager.instances.get(instanceId) as LogManager;
  }

  public static disposeInstance(instanceId: string) {
    LogManager.instances.delete(instanceId);
  }

  // Prevent the console logger from being added twice
  private consoleLoggerRegistered: boolean = false;

  public configure(options: LogOptions): LogManager {
    this.options = Object.assign({}, this.options, options);

    return this;
  }

  public getLogger(module: string): Logger {
    let minLevel: LogLevel | undefined;
    let match = '';

    for (const key in this.options.minLevels) {
      if (module.startsWith(key) && key.length >= match.length) {
        minLevel = this.options.minLevels[key];
        match = key;
      }
    }

    return new LoggerImpl(this, module, minLevel, this.id);
  }

  public registerTarget(listener: LogTarget): LogManager {
    this.on('log', listener);

    return this;
  }

  public registerConsoleLogger(): LogManager {
    if (this.consoleLoggerRegistered) {
      return this;
    }

    this.registerTarget(entry => {
      const { contextId, level, message, module, data } = entry;
      const msg: string | EcsMessage =
        this.options.format === 'ecs'
          ? formatMessage(entry)
          : `[${contextId}][${module}] ${message}`;

      let log: (message?: any, ...optionalParams: any[]) => void;

      switch (level) {
        case LogLevel.Trace:
          log = console.trace;
          break;
        case LogLevel.Debug:
          log = console.debug;
          break;
        case LogLevel.Info:
          log = console.info;
          break;
        case LogLevel.Warn:
          log = console.warn;
          break;
        case LogLevel.Error:
          log = console.error;
          break;
        default:
          log = (msg, data) => {
            const fullMessage = `{${level}} ${msg}`;
            if (data) {
              console.log(fullMessage, data);
            } else {
              console.log(fullMessage);
            }
          };
          break;
      }

      if (data) {
        log(msg, data);
      } else {
        log(msg);
      }
    });

    this.consoleLoggerRegistered = true;

    return this;
  }
}

export { LogManager };
