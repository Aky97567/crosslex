import { Query, Resolver } from '@nestjs/graphql';
import { Health } from './health.model';

@Resolver(() => Health)
export class HealthResolver {
  @Query(() => Health)
  health(): Health {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
}
