import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { createHash, randomBytes, randomUUID } from 'crypto';

import { PrismaService } from '../prisma/prisma.service';

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
  // Carried out so callers (e.g. the resolver setting the refresh cookie's
  // maxAge) reuse this exact instant instead of re-deriving their own from
  // REFRESH_TOKEN_TTL_DAYS — a second calculation could drift from this one
  // (e.g. a fixed-duration ms multiplication vs this setDate() call disagree
  // across a DST transition).
  refreshTokenExpiresAt: Date;
}

// Fallback used only if REFRESH_TOKEN_TTL_DAYS isn't set.
const DEFAULT_REFRESH_TOKEN_TTL_DAYS = 30;

@Injectable()
export class TokenService {
  constructor(
    private readonly jwt: JwtService,
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  /**
   * Issues a fresh access+refresh pair. Pass an existing familyId when this
   * call is a rotation (carry the lineage forward); omit it for a brand new
   * login (starts a new family).
   */
  async issueTokenPair(userId: string, familyId?: string): Promise<TokenPair> {
    // id is always fresh, every call. familyId only coincides with id on a
    // brand new family (no familyId passed in) — on a rotation, familyId is
    // the *existing* lineage id, and this row still needs its own new id.
    const newTokenId = randomUUID();
    const resolvedFamilyId = familyId ?? newTokenId;

    const accessToken = this.jwt.sign({ sub: userId });

    const rawRefreshToken = randomBytes(32).toString('hex');
    const tokenHash = createHash('sha256')
      .update(rawRefreshToken)
      .digest('hex');

    const ttlDays =
      Number(this.configService.get('REFRESH_TOKEN_TTL_DAYS')) ||
      DEFAULT_REFRESH_TOKEN_TTL_DAYS;
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + ttlDays);

    await this.prisma.refreshToken.create({
      data: {
        id: newTokenId,
        tokenHash,
        familyId: resolvedFamilyId,
        userId,
        expiresAt,
      },
    });

    return {
      accessToken,
      refreshToken: rawRefreshToken,
      refreshTokenExpiresAt: expiresAt,
    };
  }

  async rotateRefreshToken(presentedTokenValue: string): Promise<TokenPair> {
    const existing = await this.findByRawToken(presentedTokenValue);

    if (!existing) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    if (existing.expiresAt < new Date()) {
      throw new UnauthorizedException('Refresh token expired');
    }

    const { count } = await this.prisma.refreshToken.updateMany({
      where: { id: existing.id, revokedAt: null },
      data: { revokedAt: new Date() },
    });

    if (count === 0) {
      // Reuse detected — this token was already revoked.
      // Revoke the entire family to invalidate all tokens in this lineage.
      await this.revokeFamily(existing.familyId);
      throw new UnauthorizedException('Refresh token reuse detected');
    }

    return this.issueTokenPair(existing.userId, existing.familyId);
  }

  async revokeFamily(familyId: string): Promise<void> {
    await this.prisma.refreshToken.updateMany({
      where: { familyId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }

  private async findByRawToken(rawToken: string) {
    const tokenHash = createHash('sha256').update(rawToken).digest('hex');
    return this.prisma.refreshToken.findUnique({ where: { tokenHash } });
  }

  async revokeFamilyByRawToken(rawRefreshToken: string): Promise<void> {
    const existing = await this.findByRawToken(rawRefreshToken);
    if (existing) {
      await this.revokeFamily(existing.familyId);
    }
  }
}
