import {
  ExecutionContext,
  NextServerSideRequestHandler,
} from '@whitelotus/lib-ext-next';

import { ApplicationDependencyInitializer } from './initialization';

type CrossplexView = {};
type Controllers = {};
type Services = {};
type Query = {};

type LearnPageContext = ExecutionContext<
  CrossplexView,
  Controllers,
  Services,
  Query
>;

class CrossplexServerSideRequest extends NextServerSideRequestHandler<
  CrossplexView,
  Controllers,
  Services,
  Query
> {
  constructor(locale?: string) {
    super(
      'Dynamic Landing Page',
      new ApplicationDependencyInitializer(),
      locale,
    );
  }
  protected async executeRequest(context: LearnPageContext) {
    return context.response.ok({});
  }
}

export { CrossplexServerSideRequest };
