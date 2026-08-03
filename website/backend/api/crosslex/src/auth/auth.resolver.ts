import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { Res, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { CookieOptions, Request, Response } from 'express';

import { AuthService } from './auth.service';
import { TokenPair } from './token.service';
import { SignupInput } from './dto/signup.input';
import { LoginInput } from './dto/login.input';
import { AuthPayload } from './models/auth-payload.model';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @Mutation(() => AuthPayload)
  async signup(
    @Args('input') input: SignupInput,
    @Res({ passthrough: true }) res: Response,
  ): Promise<AuthPayload> {
    const tokenPair = await this.authService.signup(input);
    this.setRefreshTokenCookie(res, tokenPair);
    return { accessToken: tokenPair.accessToken };
  }

  @Mutation(() => AuthPayload)
  async login(
    @Args('input') input: LoginInput,
    @Res({ passthrough: true }) res: Response,
  ): Promise<AuthPayload> {
    const tokenPair = await this.authService.login(input);
    this.setRefreshTokenCookie(res, tokenPair);
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
  async refresh(
    @Context() context: { req: Request },
    @Res({ passthrough: true }) res: Response,
  ): Promise<AuthPayload> {
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
      this.clearRefreshTokenCookie(res);
      throw error;
    }

    this.setRefreshTokenCookie(res, tokenPair);
    return { accessToken: tokenPair.accessToken };
  }

  @Mutation(() => Boolean)
  async logout(
    @Context() context: { req: Request },
    @Res({ passthrough: true }) res: Response,
  ): Promise<boolean> {
    const rawRefreshToken = context.req.cookies?.refreshToken;
    if (rawRefreshToken) {
      await this.authService.logout(rawRefreshToken);
    }

    this.clearRefreshTokenCookie(res);

    return true;
  }
}
