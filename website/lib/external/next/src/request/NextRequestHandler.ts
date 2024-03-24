import { ExecutionContext, InitializedControllers } from '../requestContext';
import { NextRequestResult } from '../result';

abstract class NextRequestHandler<
  TProps extends Record<string, unknown>,
  TControllers extends InitializedControllers = {},
  TServices extends Record<string, unknown> = {},
  TQuery extends Record<string, unknown> = {},
> {
  protected constructor() {
    this.executeRequest = this.executeRequest.bind(this);
  }

  /**
   * Executes the request and returns the response data formatted for the view
   * @param context Contextual data and functionality to assist in proessing the request
   * @returns The response from the executed request
   */
  protected abstract executeRequest(
    context: ExecutionContext<TProps, TControllers, TServices, TQuery>,
  ): Promise<NextRequestResult<TProps>>;
}

export { NextRequestHandler };
