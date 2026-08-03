import { config } from 'dotenv';
import { resolve } from 'node:path';

// Runs via jest's `setupFiles`, which executes before any test file (and
// therefore before AppModule/ConfigModule) is ever required. That ordering
// is what makes this work: dotenv's config() never overwrites a variable
// already present in process.env, so setting DATABASE_URL here — before
// ConfigModule.forRoot() loads .env for real — wins over the real
// DATABASE_URL for the lifetime of this test process. Every e2e test talks
// to the `test` Postgres schema, never local dev data.
config({ path: resolve(__dirname, '../.env') });

if (!process.env.TEST_DATABASE_URL) {
  throw new Error(
    'TEST_DATABASE_URL is not set — see website/.env.example',
  );
}

process.env.DATABASE_URL = process.env.TEST_DATABASE_URL;

// COOKIE_DOMAIN is a per-developer/environment customization, not part of
// the auth contract itself — pin it unset so cookie-attribute assertions
// stay deterministic regardless of whatever a developer's local .env
// happens to have set (e.g. while working on Phase 6). Set to '' rather
// than deleted: AppModule's own ConfigModule.forRoot() calls dotenv again
// later, which only skips keys already present via hasOwnProperty — a
// deleted key would get silently refilled from .env, an empty one won't.
process.env.COOKIE_DOMAIN = '';
