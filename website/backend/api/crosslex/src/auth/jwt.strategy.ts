import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { getJwtPublicKey } from './jwt-key.provider';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private publicKeyPromise: Promise<string> | null = null;

  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      algorithms: ['RS256'],
      secretOrKeyProvider: (
        _request: unknown,
        _rawJwtToken: unknown,
        done: (err: Error | null, key?: string) => void,
      ) => {
        // Cache the promise, not the resolved value, and assign it
        // synchronously (no await between the check and the assignment)
        // — that's what stops concurrent requests during the first
        // resolution from each triggering their own redundant fetch.
        if (!this.publicKeyPromise) {
          this.publicKeyPromise = getJwtPublicKey(this.configService).catch(
            (err) => {
              // Don't let one transient failure become permanent — reset
              // so the next call gets to retry instead of replaying this
              // same rejection forever.
              this.publicKeyPromise = null;
              throw err;
            },
          );
        }

        this.publicKeyPromise.then(
          (key) => done(null, key),
          (err) => done(err instanceof Error ? err : new Error(String(err))),
        );
      },
    });
  }

  async validate(payload: { sub: string }): Promise<{ userId: string }> {
    return { userId: payload.sub };
  }
}
