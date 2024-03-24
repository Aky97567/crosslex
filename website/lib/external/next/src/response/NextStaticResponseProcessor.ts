import { NextRequestResult } from '../result';
import { NextResponseProcessor } from './NextResponseProcessor';

class NextStaticResponseProcessor implements NextResponseProcessor {
  decorate<TProps>(
    result: NextRequestResult<TProps>,
  ): NextRequestResult<TProps> {
    return result;
  }

  write() {}
}

export { NextStaticResponseProcessor };
