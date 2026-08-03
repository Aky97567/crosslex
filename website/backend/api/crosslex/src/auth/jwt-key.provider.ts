import { readFileSync } from 'node:fs';
import { ConfigService } from '@nestjs/config';

type JwtKeySource = 'file' | 'secrets-manager';

async function resolveKey(
  configService: ConfigService,
  filePathVar: string,
  secretIdVar: string,
): Promise<string> {
  const source = configService.get<JwtKeySource>('JWT_KEY_SOURCE');

  if (source === 'secrets-manager') {
    // Phase 5: fetch configService.get(secretIdVar) from AWS Secrets
    // Manager once Track B exists. Deliberately unimplemented until then.
    throw new Error(
      `JWT_KEY_SOURCE=secrets-manager is not implemented yet ` +
        `(would read secret id from ${secretIdVar}) — see Phase 5.`,
    );
  }

  const path = configService.get<string>(filePathVar);
  if (!path) {
    throw new Error(`Missing required environment variable: ${filePathVar}`);
  }
  return readFileSync(path, 'utf8');
}

export function getJwtPrivateKey(
  configService: ConfigService,
): Promise<string> {
  return resolveKey(
    configService,
    'JWT_PRIVATE_KEY_PATH',
    'JWT_PRIVATE_KEY_SECRET_ID',
  );
}

export function getJwtPublicKey(
  configService: ConfigService,
): Promise<string> {
  return resolveKey(
    configService,
    'JWT_PUBLIC_KEY_PATH',
    'JWT_PUBLIC_KEY_SECRET_ID',
  );
}
