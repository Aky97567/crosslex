import { Logger } from '@whitelotus/lib-core-logging';
import { AsyncAction } from './action';

abstract class Controller {
  protected constructor(
    protected controllerName: string,
    protected logger: Logger,
  ) {}

  protected actionAsync<
    TResult,
    TParams extends Array<unknown>,
    TController extends Controller,
  >(
    actionName: string,
    act: AsyncAction<TResult, TParams>,
    thisObj: TController,
  ) {
    return async (...params: TParams) => {
      try {
        this.logger.info('A controller action was requested', {
          action: actionName,
          controller: this.controllerName,
        });

        return await act.call(thisObj, ...params);
      } catch (error) {
        this.logger.error(
          'An unhandled error occurred executing a controller action',
          {
            action: actionName,
            controller: this.controllerName,
            error,
          },
        );

        throw error;
      }
    };
  }
}

export { Controller };
