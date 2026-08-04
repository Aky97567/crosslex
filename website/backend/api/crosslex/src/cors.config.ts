import type { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

// Shared by main.ts and every e2e spec's test app bootstrap — one place
// for this logic, not N copies that can silently drift apart (exactly
// what happened before test/reset-database.ts existed).
export function getCorsOptions(): CorsOptions {
  return {
    // Comma-separated allowlist, empty/unset means no cross-origin browser
    // requests are allowed — a safe default, not a crash, unlike
    // DATABASE_URL/JWT_KEY_SOURCE. Only local values exist today; stage/prod
    // are deliberately not decided yet (depends on real deployment).
    origin: (process.env.CORS_ALLOWED_ORIGINS ?? '')
      .split(',')
      .map((origin) => origin.trim())
      .filter(Boolean),
    // Required for the httpOnly refresh cookie to actually be sent/stored
    // cross-origin — without this, the browser won't include credentials
    // on the request or accept the Set-Cookie response.
    credentials: true,
  };
}
