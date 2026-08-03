import { createHash } from 'node:crypto';
import { UnauthorizedException } from '@nestjs/common';

import { TokenService } from './token.service';
import type { PrismaService } from '../prisma/prisma.service';

function sha256(value: string): string {
  return createHash('sha256').update(value).digest('hex');
}

// A `RefreshToken` row shaped exactly like what Prisma would return —
// tests build on this rather than duplicating the shape inline.
function makeRow(overrides: Partial<Record<string, unknown>> = {}) {
  return {
    id: 'row-id',
    tokenHash: 'irrelevant-for-these-tests',
    familyId: 'family-1',
    userId: 'user-1',
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
    revokedAt: null,
    createdAt: new Date(),
    ...overrides,
  };
}

describe('TokenService', () => {
  let jwt: { sign: jest.Mock };
  let prisma: {
    refreshToken: {
      create: jest.Mock;
      findUnique: jest.Mock;
      updateMany: jest.Mock;
    };
  };
  let configService: { get: jest.Mock };
  let service: TokenService;

  beforeEach(() => {
    jwt = { sign: jest.fn().mockReturnValue('signed.access.token') };
    prisma = {
      refreshToken: {
        create: jest.fn().mockResolvedValue(undefined),
        findUnique: jest.fn(),
        updateMany: jest.fn(),
      },
    };
    configService = { get: jest.fn().mockReturnValue(undefined) };

    service = new TokenService(
      jwt as never,
      prisma as unknown as PrismaService,
      configService as never,
    );
  });

  describe('issueTokenPair', () => {
    it('signs the access token with the user id as sub', async () => {
      await service.issueTokenPair('user-1');
      expect(jwt.sign).toHaveBeenCalledWith({ sub: 'user-1' });
    });

    it('starts a new family (familyId === id) when none is passed', async () => {
      await service.issueTokenPair('user-1');

      const data = prisma.refreshToken.create.mock.calls[0][0].data;
      expect(data.id).toBe(data.familyId);
      expect(data.userId).toBe('user-1');
    });

    it('carries the lineage forward when a familyId is passed (rotation)', async () => {
      await service.issueTokenPair('user-1', 'existing-family');

      const data = prisma.refreshToken.create.mock.calls[0][0].data;
      expect(data.familyId).toBe('existing-family');
      // The row's own id must still be fresh, not reused from the family.
      expect(data.id).not.toBe('existing-family');
    });

    it('stores the SHA-256 hash of the returned raw refresh token, never the raw value', async () => {
      const { refreshToken } = await service.issueTokenPair('user-1');

      const data = prisma.refreshToken.create.mock.calls[0][0].data;
      expect(data.tokenHash).toBe(sha256(refreshToken));
      expect(data.tokenHash).not.toBe(refreshToken);
    });

    it('defaults expiry to 30 days when REFRESH_TOKEN_TTL_DAYS is unset', async () => {
      configService.get.mockReturnValue(undefined);
      const before = Date.now();

      const { refreshTokenExpiresAt } = await service.issueTokenPair('user-1');

      const expectedMs = before + 30 * 24 * 60 * 60 * 1000;
      expect(refreshTokenExpiresAt.getTime()).toBeGreaterThanOrEqual(
        expectedMs - 1000,
      );
      expect(refreshTokenExpiresAt.getTime()).toBeLessThanOrEqual(
        expectedMs + 1000,
      );
    });

    it('honors REFRESH_TOKEN_TTL_DAYS when set', async () => {
      configService.get.mockReturnValue('7');
      const before = Date.now();

      const { refreshTokenExpiresAt } = await service.issueTokenPair('user-1');

      const expectedMs = before + 7 * 24 * 60 * 60 * 1000;
      expect(refreshTokenExpiresAt.getTime()).toBeGreaterThanOrEqual(
        expectedMs - 1000,
      );
      expect(refreshTokenExpiresAt.getTime()).toBeLessThanOrEqual(
        expectedMs + 1000,
      );
    });

    it('returns the same refreshTokenExpiresAt instant that was persisted to the DB', async () => {
      const { refreshTokenExpiresAt } = await service.issueTokenPair('user-1');
      const data = prisma.refreshToken.create.mock.calls[0][0].data;
      expect(data.expiresAt).toBe(refreshTokenExpiresAt);
    });
  });

  describe('rotateRefreshToken', () => {
    it('rejects a token that does not match any stored hash', async () => {
      prisma.refreshToken.findUnique.mockResolvedValue(null);

      await expect(service.rotateRefreshToken('unknown')).rejects.toThrow(
        UnauthorizedException,
      );
      expect(prisma.refreshToken.updateMany).not.toHaveBeenCalled();
    });

    it('rejects a naturally expired token without touching the family', async () => {
      prisma.refreshToken.findUnique.mockResolvedValue(
        makeRow({ expiresAt: new Date(Date.now() - 1000) }),
      );

      await expect(service.rotateRefreshToken('raw')).rejects.toThrow(
        'Refresh token expired',
      );
      expect(prisma.refreshToken.updateMany).not.toHaveBeenCalled();
    });

    it('rotates a valid, unrevoked token: revokes it and issues a new pair in the same family', async () => {
      const row = makeRow({ id: 'row-1', familyId: 'family-1', userId: 'user-1' });
      prisma.refreshToken.findUnique.mockResolvedValue(row);
      prisma.refreshToken.updateMany.mockResolvedValue({ count: 1 });

      const pair = await service.rotateRefreshToken('raw');

      expect(prisma.refreshToken.updateMany).toHaveBeenCalledWith({
        where: { id: 'row-1', revokedAt: null },
        data: { revokedAt: expect.any(Date) },
      });
      // Second call is the new row created by issueTokenPair, carrying the
      // same family forward — not a second revocation.
      const createData = prisma.refreshToken.create.mock.calls[0][0].data;
      expect(createData.familyId).toBe('family-1');
      expect(createData.userId).toBe('user-1');
      expect(pair.accessToken).toBe('signed.access.token');
    });

    it('treats a concurrent-reuse race (updateMany count 0) as theft: revokes the whole family and rejects', async () => {
      const row = makeRow({ id: 'row-1', familyId: 'family-1' });
      prisma.refreshToken.findUnique.mockResolvedValue(row);
      // First updateMany call: the atomic rotate-attempt itself (loses the race).
      prisma.refreshToken.updateMany.mockResolvedValueOnce({ count: 0 });
      // Second updateMany call: revokeFamily's own update.
      prisma.refreshToken.updateMany.mockResolvedValueOnce({ count: 3 });

      await expect(service.rotateRefreshToken('raw')).rejects.toThrow(
        'Refresh token reuse detected',
      );

      expect(prisma.refreshToken.updateMany).toHaveBeenCalledTimes(2);
      expect(prisma.refreshToken.updateMany).toHaveBeenNthCalledWith(2, {
        where: { familyId: 'family-1', revokedAt: null },
        data: { revokedAt: expect.any(Date) },
      });
      // No new pair should ever be issued on the reuse-detected path.
      expect(prisma.refreshToken.create).not.toHaveBeenCalled();
    });

    it('looks the presented token up by its SHA-256 hash, never the raw value', async () => {
      prisma.refreshToken.findUnique.mockResolvedValue(null);

      await expect(service.rotateRefreshToken('raw-value')).rejects.toThrow();

      expect(prisma.refreshToken.findUnique).toHaveBeenCalledWith({
        where: { tokenHash: sha256('raw-value') },
      });
    });
  });

  describe('revokeFamily', () => {
    it('revokes every non-revoked row in the family', async () => {
      await service.revokeFamily('family-1');

      expect(prisma.refreshToken.updateMany).toHaveBeenCalledWith({
        where: { familyId: 'family-1', revokedAt: null },
        data: { revokedAt: expect.any(Date) },
      });
    });
  });

  describe('revokeFamilyByRawToken', () => {
    it('revokes the family for a recognized raw token', async () => {
      prisma.refreshToken.findUnique.mockResolvedValue(
        makeRow({ familyId: 'family-9' }),
      );

      await service.revokeFamilyByRawToken('raw');

      expect(prisma.refreshToken.updateMany).toHaveBeenCalledWith({
        where: { familyId: 'family-9', revokedAt: null },
        data: { revokedAt: expect.any(Date) },
      });
    });

    it('is a no-op for an unrecognized raw token', async () => {
      prisma.refreshToken.findUnique.mockResolvedValue(null);

      await service.revokeFamilyByRawToken('unknown');

      expect(prisma.refreshToken.updateMany).not.toHaveBeenCalled();
    });
  });
});
