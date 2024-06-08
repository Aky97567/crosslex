import {
  ExecutionContext,
  NextServerSideRequestHandler,
} from '@whitelotus/lib-ext-next';

import { ApplicationDependencyInitializer } from './initialization';

type CrosslexView = {};
type Controllers = {};
type Services = {};
type Query = {};

type LearnPageContext = ExecutionContext<
  CrosslexView,
  Controllers,
  Services,
  Query
>;

class CrosslexServerSideRequest extends NextServerSideRequestHandler<
  CrosslexView,
  Controllers,
  Services,
  Query
> {
  constructor(locale?: string) {
    super('Dynamic Landing Page', new ApplicationDependencyInitializer(), {
      locale,
    });
  }
  protected async executeRequest(context: LearnPageContext) {
    return context.response.ok({});
  }
}

export { CrosslexServerSideRequest };
