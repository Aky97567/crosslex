import {
  BadRequestException,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import * as argon2 from 'argon2';

// argon2's real exports are frozen (jest.spyOn can't redefine them), and
// the no-enumeration test below needs to assert verify() actually ran —
// not just that the two rejection paths produce the same error. Mocking
// the whole module with a jest.fn() wrapping the real implementation
// keeps every other test's hashing/verification genuinely real while
// making just this one call trackable.
jest.mock('argon2', () => {
  const actual = jest.requireActual('argon2');
  return { ...actual, verify: jest.fn(actual.verify) };
});

import { AuthService } from './auth.service';
import { TokenService } from './token.service';
import { Prisma } from '../generated/prisma/client';
import type { PrismaService } from '../prisma/prisma.service';

const FAKE_TOKEN_PAIR = {
  accessToken: 'access',
  refreshToken: 'refresh',
  refreshTokenExpiresAt: new Date(),
};

describe('AuthService', () => {
  let prisma: {
    user: { create: jest.Mock; findUnique: jest.Mock };
  };
  let tokenService: {
    issueTokenPair: jest.Mock;
    rotateRefreshToken: jest.Mock;
    revokeFamilyByRawToken: jest.Mock;
  };
  let service: AuthService;

  beforeEach(async () => {
    prisma = {
      user: { create: jest.fn(), findUnique: jest.fn() },
    };
    tokenService = {
      issueTokenPair: jest.fn().mockResolvedValue(FAKE_TOKEN_PAIR),
      rotateRefreshToken: jest.fn().mockResolvedValue(FAKE_TOKEN_PAIR),
      revokeFamilyByRawToken: jest.fn().mockResolvedValue(undefined),
    };

    service = new AuthService(
      prisma as unknown as PrismaService,
      tokenService as unknown as TokenService,
    );
    // Real hook — this is what computes the dummy hash used by login's
    // no-enumeration path below.
    await service.onModuleInit();
  });

  describe('signup', () => {
    it('rejects a password equal to the (lowercased) email before ever hitting the DB', async () => {
      await expect(
        service.signup({ email: 'a@b.com', password: 'A@B.COM' }),
      ).rejects.toThrow(BadRequestException);

      expect(prisma.user.create).not.toHaveBeenCalled();
    });

    it('stores only an argon2id hash, never the raw password', async () => {
      prisma.user.create.mockResolvedValue({
        id: 'user-1',
        email: 'a@b.com',
        passwordHash: 'irrelevant',
      });

      await service.signup({ email: 'a@b.com', password: 'correct horse battery staple' });

      const data = prisma.user.create.mock.calls[0][0].data;
      expect(data.passwordHash).not.toBe('correct horse battery staple');
      expect(await argon2.verify(data.passwordHash, 'correct horse battery staple')).toBe(
        true,
      );
    });

    it('turns a unique-constraint violation into a clean ConflictException', async () => {
      prisma.user.create.mockRejectedValue(
        new Prisma.PrismaClientKnownRequestError('Unique constraint failed', {
          code: 'P2002',
          clientVersion: 'test',
        }),
      );

      await expect(
        service.signup({ email: 'a@b.com', password: 'correct horse battery staple' }),
      ).rejects.toThrow(ConflictException);
    });

    it('re-throws any other Prisma error unchanged', async () => {
      const dbError = new Prisma.PrismaClientKnownRequestError('Connection lost', {
        code: 'P1001',
        clientVersion: 'test',
      });
      prisma.user.create.mockRejectedValue(dbError);

      await expect(
        service.signup({ email: 'a@b.com', password: 'correct horse battery staple' }),
      ).rejects.toBe(dbError);
    });

    it('issues a token pair for the newly created user on success', async () => {
      prisma.user.create.mockResolvedValue({ id: 'user-1' });

      const result = await service.signup({
        email: 'a@b.com',
        password: 'correct horse battery staple',
      });

      expect(tokenService.issueTokenPair).toHaveBeenCalledWith('user-1');
      expect(result).toBe(FAKE_TOKEN_PAIR);
    });
  });

  describe('login', () => {
    it('issues a token pair for correct credentials', async () => {
      const passwordHash = await argon2.hash('correct horse battery staple');
      prisma.user.findUnique.mockResolvedValue({ id: 'user-1', passwordHash });

      const result = await service.login({
        email: 'a@b.com',
        password: 'correct horse battery staple',
      });

      expect(tokenService.issueTokenPair).toHaveBeenCalledWith('user-1');
      expect(result).toBe(FAKE_TOKEN_PAIR);
    });

    it('rejects a wrong password with the same message as an unknown email', async () => {
      const passwordHash = await argon2.hash('correct horse battery staple');
      prisma.user.findUnique.mockResolvedValue({ id: 'user-1', passwordHash });

      await expect(
        service.login({ email: 'a@b.com', password: 'wrong password entirely' }),
      ).rejects.toThrow('Invalid credentials');

      prisma.user.findUnique.mockResolvedValue(null);

      await expect(
        service.login({ email: 'nobody@b.com', password: 'wrong password entirely' }),
      ).rejects.toThrow('Invalid credentials');
    });

    it('rejects with UnauthorizedException, not a lower-level error, for an unknown email', async () => {
      prisma.user.findUnique.mockResolvedValue(null);

      await expect(
        service.login({ email: 'nobody@b.com', password: 'anything' }),
      ).rejects.toThrow(UnauthorizedException);
    });

    it('still calls argon2.verify for an unknown email (no early return before the hash check)', async () => {
      // This is the actual no-enumeration mechanism: skipping verify() for a
      // nonexistent user would make the two rejection paths take
      // measurably different time, leaking which one occurred.
      (argon2.verify as jest.Mock).mockClear();
      prisma.user.findUnique.mockResolvedValue(null);

      await expect(
        service.login({ email: 'nobody@b.com', password: 'anything' }),
      ).rejects.toThrow();

      expect(argon2.verify).toHaveBeenCalledTimes(1);
    });
  });

  describe('refresh', () => {
    it('delegates directly to TokenService.rotateRefreshToken', async () => {
      const result = await service.refresh('raw-token');

      expect(tokenService.rotateRefreshToken).toHaveBeenCalledWith('raw-token');
      expect(result).toBe(FAKE_TOKEN_PAIR);
    });
  });

  describe('logout', () => {
    it('delegates directly to TokenService.revokeFamilyByRawToken', async () => {
      await service.logout('raw-token');

      expect(tokenService.revokeFamilyByRawToken).toHaveBeenCalledWith(
        'raw-token',
      );
    });
  });
});
