import { readFileSync } from 'node:fs';
import { ConfigService } from '@nestjs/config';
import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from '@aws-sdk/client-secrets-manager';

type JwtKeySource = 'file' | 'secrets-manager';

// Module-level singleton, not constructed per-call — the client holds its
// own connection pool/credential resolution, so it's meant to be reused
// for the process lifetime. No explicit region: it resolves from the
// Lambda execution environment's own ambient AWS config.
let secretsManagerClient: SecretsManagerClient | null = null;

function getSecretsManagerClient(): SecretsManagerClient {
  if (!secretsManagerClient) {
    secretsManagerClient = new SecretsManagerClient({});
  }
  return secretsManagerClient;
}

async function fetchSecret(secretId: string): Promise<string> {
  const client = getSecretsManagerClient();
  const response = await client.send(
    new GetSecretValueCommand({ SecretId: secretId }),
  );

  // Each secret holds one raw PEM string (not JSON-wrapped) — matches the
  // one-secret-per-key model implied by having separate
  // JWT_PRIVATE_KEY_SECRET_ID / JWT_PUBLIC_KEY_SECRET_ID vars.
  if (!response.SecretString) {
    throw new Error(
      `Secret ${secretId} has no SecretString (binary secrets aren't supported here)`,
    );
  }
  return response.SecretString;
}

async function resolveKey(
  configService: ConfigService,
  filePathVar: string,
  secretIdVar: string,
): Promise<string> {
  const source = configService.get<JwtKeySource>('JWT_KEY_SOURCE');

  if (source === 'secrets-manager') {
    // Accepts either the secret's friendly name or its full ARN — passing
    // the ARN is the better practice once deployed: it lets IAM policies
    // scope to that exact resource instead of a name-based match (Secrets
    // Manager appends a random suffix to every ARN, so exact-name policy
    // matching is fragile).
    const secretId = configService.get<string>(secretIdVar);
    if (!secretId) {
      throw new Error(`Missing required environment variable: ${secretIdVar}`);
    }
    return fetchSecret(secretId);
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
