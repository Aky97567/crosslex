import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { CookieOptions, Request, Response } from 'express';

import { AuthService } from './auth.service';
import { TokenPair } from './token.service';
import { SignupInput } from './dto/signup.input';
import { LoginInput } from './dto/login.input';
import { AuthPayload } from './models/auth-payload.model';

// @nestjs/graphql's GqlParamsFactory only understands ROOT/ARGS/CONTEXT/
// INFO — it has no case for the core @Res()/@Req() decorators. Their
// numeric RouteParamtypes values happen to collide with GqlParamtype's
// (RESPONSE === CONTEXT === 1), so @Res() silently resolves to the whole
// GraphQL context object instead of the response, and .cookie() on that
// throws "res.cookie is not a function" — caught by the e2e suite, not by
// any build or boot check. @Context() is the only decorator actually wired
// for GraphQL resolvers; req/res both come from AppModule's GraphQLModule
// context factory.
type GqlContext = { req: Request; res: Response };

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @Mutation(() => AuthPayload)
  async signup(
    @Args('input') input: SignupInput,
    @Context() context: GqlContext,
  ): Promise<AuthPayload> {
    const tokenPair = await this.authService.signup(input);
    this.setRefreshTokenCookie(context.res, tokenPair);
    return { accessToken: tokenPair.accessToken };
  }

  @Mutation(() => AuthPayload)
  async login(
    @Args('input') input: LoginInput,
    @Context() context: GqlContext,
  ): Promise<AuthPayload> {
    const tokenPair = await this.authService.login(input);
    this.setRefreshTokenCookie(context.res, tokenPair);
    return { accessToken: tokenPair.accessToken };
  }

  private getRefreshCookieOptions(): CookieOptions {
    return {
      httpOnly: true,
      sameSite: 'lax',
      secure: this.configService.get('JWT_KEY_SOURCE') === 'secrets-manager',
      domain: this.configService.get<string>('COOKIE_DOMAIN') || undefined,
    };
  }

  private setRefreshTokenCookie(res: Response, tokenPair: TokenPair): void {
    res.cookie('refreshToken', tokenPair.refreshToken, {
      ...this.getRefreshCookieOptions(),
      maxAge: tokenPair.refreshTokenExpiresAt.getTime() - Date.now(),
    });
  }

  private clearRefreshTokenCookie(res: Response): void {
    res.clearCookie('refreshToken', this.getRefreshCookieOptions());
  }

  @Mutation(() => AuthPayload)
  async refresh(@Context() context: GqlContext): Promise<AuthPayload> {
    const rawRefreshToken = context.req.cookies?.refreshToken;
    if (!rawRefreshToken) {
      throw new UnauthorizedException('No refresh token presented');
    }

    let tokenPair: TokenPair;
    try {
      tokenPair = await this.authService.refresh(rawRefreshToken);
    } catch (error) {
      // The presented cookie is now known-invalid (expired, reused, or
      // unrecognized) — clear it so the client stops resending a dead
      // token on every subsequent request instead of leaving it to expire
      // naturally client-side.
      this.clearRefreshTokenCookie(context.res);
      throw error;
    }

    this.setRefreshTokenCookie(context.res, tokenPair);
    return { accessToken: tokenPair.accessToken };
  }

  @Mutation(() => Boolean)
  async logout(@Context() context: GqlContext): Promise<boolean> {
    const rawRefreshToken = context.req.cookies?.refreshToken;
    if (rawRefreshToken) {
      await this.authService.logout(rawRefreshToken);
    }

    this.clearRefreshTokenCookie(context.res);

    return true;
  }
}
