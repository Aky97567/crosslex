import { join } from 'node:path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { AuthModule } from './auth/auth.module';
import { HealthModule } from './health/health.module';
import { ProgressModule } from './progress/progress.module';
import { WordsModule } from './words/words.module';

const REQUIRED_ENV_VARS = ['DATABASE_URL', 'JWT_KEY_SOURCE'] as const;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (config: Record<string, unknown>) => {
        for (const key of REQUIRED_ENV_VARS) {
          if (!config[key]) {
            throw new Error(`Missing required environment variable: ${key}`);
          }
        }
        if (
          config.JWT_KEY_SOURCE === 'file' &&
          (!config.JWT_PRIVATE_KEY_PATH || !config.JWT_PUBLIC_KEY_PATH)
        ) {
          throw new Error(
            'JWT_KEY_SOURCE=file requires JWT_PRIVATE_KEY_PATH and JWT_PUBLIC_KEY_PATH',
          );
        }
        return config;
      },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      sortSchema: true,
      // @nestjs/apollo's default context only forwards `req` — without
      // this, `res` is silently absent from the GraphQL context, and
      // every @Res({ passthrough: true }) resolver (login/signup/
      // refresh/logout, all setting or clearing the refresh cookie)
      // fails at runtime with "res.cookie is not a function".
      context: ({ req, res }: { req: unknown; res: unknown }) => ({
        req,
        res,
      }),
    }),
    AuthModule,
    HealthModule,
    ProgressModule,
    WordsModule,
  ],
})
export class AppModule {}
