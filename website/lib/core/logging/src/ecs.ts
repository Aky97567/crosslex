// Logging messages using the ECS (Elastic Common Schema) specification,
// @see https://www.elastic.co/guide/en/ecs/current/ecs-reference.html

import type { LogEntry, LogLevel } from './LogEntry';

type EcsMessage = {
  '@timestamp': string;
  log: {
    level: LogLevel;
  };
  message: string;
  package: {
    module: string;
    build_version: string;
  };
  cloud: {
    service: {
      name: 'ECS' | 'EC2' | 'Lambda' | 'Kinesis';
    };
  };
};

const formatMessage = (logEntry: LogEntry): EcsMessage => {
  return {
    '@timestamp': new Date().toISOString(),
    log: {
      level: logEntry.level,
    },
    message: logEntry.message,
    package: {
      module: logEntry.module,
      build_version: '',
    },
    cloud: {
      service: {
        name: 'Lambda',
      },
    },
  };
};

export { formatMessage };
export type { EcsMessage };
