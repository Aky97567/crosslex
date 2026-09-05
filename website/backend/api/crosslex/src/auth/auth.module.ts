import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import type { StringValue } from 'ms';

import { PrismaModule } from '../prisma/prisma.module';
import { getJwtPrivateKey, getJwtPublicKey } from './jwt-key.provider';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';

const DEFAULT_JWT_ACCESS_TOKEN_TTL: StringValue = '15m';

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        privateKey: await getJwtPrivateKey(configService),
        publicKey: await getJwtPublicKey(configService),
        signOptions: {
          algorithm: 'RS256',
          expiresIn:
            configService.get<StringValue>('JWT_ACCESS_TOKEN_TTL') ??
            DEFAULT_JWT_ACCESS_TOKEN_TTL,
        },
      }),
    }),
  ],
  providers: [
    AuthResolver,
    AuthService,
    TokenService,
    JwtStrategy,
    JwtAuthGuard,
  ],
  exports: [JwtAuthGuard],
})
export class AuthModule {}
