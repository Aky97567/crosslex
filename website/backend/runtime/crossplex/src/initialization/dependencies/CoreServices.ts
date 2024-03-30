import { LogLevel, LogManager } from '@whitelotus/lib-core-logging';
import {
  HostContext,
  ServiceContainer,
  SystemServices,
} from '@whitelotus/lib-sys-runtime';

class CoreServicesContainer implements ServiceContainer<SystemServices> {
  private logManager: LogManager;

  constructor(private host: HostContext) {
    this.logManager = this.initializeLogger();
  }

  get getLogger() {
    return this.logManager.getLogger;
  }

  dispose() {
    LogManager.disposeInstance(this.host.id);
  }

  private initializeLogger() {
    const { hostName, id, query } = this.host;
    const showVerboseLogs =
      hostName.indexOf('localhost') >= 0 ||
      (!!query && !!query['verbose-logs']);

    const logManager = LogManager.getInstance(id);
    logManager.registerConsoleLogger().configure({
      minLevels: {
        '': showVerboseLogs ? LogLevel.Trace : LogLevel.Warn,
      },
      format: 'ecs',
    });

    return logManager;
  }
}

export { CoreServicesContainer };
