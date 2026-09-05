import {
  BadRequestException,
  ConflictException,
  Injectable,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import * as argon2 from 'argon2';

import { PrismaService } from '../prisma/prisma.service';
import { TokenPair, TokenService } from './token.service';
import { SignupInput } from './dto/signup.input';
import { LoginInput } from './dto/login.input';
import { Prisma, User } from '../generated/prisma/client';

@Injectable()
export class AuthService implements OnModuleInit {
  constructor(
    private readonly prisma: PrismaService,
    private readonly tokenService: TokenService,
  ) {}

  // Used in login() when no user is found, so argon2.verify() still runs
  // its full, real computation instead of the "unknown email" path
  // returning early — skipping it would make that path measurably faster
  // than "known email, wrong password", leaking account existence via
  // timing even with an identical error message. Computed once at boot,
  // not per failed attempt, since argon2 is deliberately slow.
  private dummyHash: string;

  async onModuleInit() {
    this.dummyHash = await argon2.hash('dummy');
  }

  async signup(input: SignupInput): Promise<TokenPair> {
    if (input.password.toLowerCase() === input.email) {
      throw new BadRequestException(
        'Password must not be the same as your email',
      );
    }

    const passwordHash = await argon2.hash(input.password, {
      type: argon2.argon2id,
    });
    let user: User;
    try {
      user = await this.prisma.user.create({
        data: {
          email: input.email,
          passwordHash,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          'An account with this email already exists',
        );
      }
      throw error;
    }

    return this.tokenService.issueTokenPair(user.id);
  }

  async login(input: LoginInput): Promise<TokenPair> {
    const user = await this.prisma.user.findUnique({
      where: { email: input.email },
    });

    const passwordHash = user?.passwordHash ?? this.dummyHash;
    const isValid = await argon2.verify(passwordHash, input.password);

    if (!user || !isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.tokenService.issueTokenPair(user.id);
  }

  async refresh(rawRefreshToken: string): Promise<TokenPair> {
    return this.tokenService.rotateRefreshToken(rawRefreshToken);
  }

  async logout(rawRefreshToken: string): Promise<void> {
    await this.tokenService.revokeFamilyByRawToken(rawRefreshToken);
  }
}
