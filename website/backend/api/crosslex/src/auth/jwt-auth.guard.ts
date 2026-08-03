import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  override getRequest(context: ExecutionContext) {
    return GqlExecutionContext.create(context).getContext().req;
  }
}
