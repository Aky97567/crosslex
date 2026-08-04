# Decisions

Architectural/design decisions for `backend/api/crosslex` and the reasoning
behind them — not a changelog, not a process log. Process/branching/workflow
lives in `AGENTS.md`; this is for things a future reader (including future
you) would otherwise have to re-derive from scratch or, worse, get wrong by
assuming the obvious-looking alternative was never considered.

Each entry: **Decision**, **Why**, and **Alternatives considered** where a
real one existed. Newest section at the bottom; append, don't rewrite
history — if a decision gets reversed later, add a new entry saying so
rather than editing the old one away.

---

## Auth (Phase 3)

### D1 — httpOnly cookie + relay, not a JS-readable cookie
**Decision:** Refresh token travels only in an `httpOnly` cookie; the SPA
never reads it directly.
**Why:** The refresh token is the long-lived, high-value credential — an
httpOnly cookie is unreadable by any JS running on the page, so XSS cannot
exfiltrate it. This is the strongest part of the security story and the one
most likely to come up in a fintech interview (XSS vs. CSRF, and which
mitigation addresses which). Full reasoning recorded in
`2026-07-18-phase-3-instructions.md`.

### RS256, not HS256
**Decision:** JWTs are signed with RS256 (asymmetric), not HS256
(symmetric).
**Why:** A symmetric secret has to be shared with anything that verifies a
token — awkward and risky the moment there's more than one verifier (e.g. a
future split-out service, Phase 7's D2). RS256 lets the private key stay in
exactly one place (the signer) while the public key can be handed out freely
for verification.

### argon2id for passwords, SHA-256 for refresh tokens — not the same algorithm for both
**Decision:** Passwords are hashed with argon2id (slow, memory-hard).
Refresh tokens are hashed with SHA-256 (fast) before storage.
**Why:** These defend against different things. Passwords are low-entropy
secrets a human chose — slow hashing is the actual defense against
brute-force. Refresh tokens are 32 random bytes — already unguessable, so a
fast hash costs nothing in security and avoids paying argon2's real CPU cost
on every single refresh call.

### Refresh rotation via atomic conditional UPDATE, not read-then-write
**Decision:** Rotation does `updateMany({ where: { id, revokedAt: null },
data: { revokedAt: now } })` and branches on the returned count, rather than
reading the row, checking `revokedAt` in application code, then writing.
**Why:** The `revokedAt: null` check has to live in the `WHERE` clause, not
a separate read, or two concurrent requests presenting the same token could
both read "not yet revoked" before either writes — a classic check-then-act
race. `count === 0` on the update is the actual reuse signal.

### Login always calls argon2.verify(), even for a nonexistent user
**Decision:** `login()` verifies against a precomputed dummy hash when no
user is found, rather than returning early.
**Why:** No-account-enumeration isn't just about the error message being
identical for "wrong password" and "unknown email" — it's also about
*timing*. Skipping the hash for an unknown email would make that path
measurably faster, leaking which case occurred even with an identical error
string.

### Cookie-setting lives in the resolver via `@Context()`, not `@Res()`
**Decision:** `signup`/`login`/`refresh`/`logout` all read `res` off
`@Context()`, not a `@Res({ passthrough: true })` parameter.
**Why:** Not style — `@Res()` is fundamentally broken in this stack.
`@nestjs/graphql`'s `GqlParamsFactory` only understands ROOT/ARGS/CONTEXT/
INFO; it has no case for the core `@Res()`/`@Req()` decorators. Their
`RouteParamtypes` numeric values happen to collide with `GqlParamtype`'s
(`RESPONSE === CONTEXT === 1`), so `@Res()` silently resolves to the whole
GraphQL context object instead of the response — compiles fine, throws
`res.cookie is not a function` the instant it's actually called. Found by
the e2e suite, not by any build or boot check.

### `GraphQLModule.forRoot()` needs an explicit `context` factory
**Decision:** `context: ({ req, res }) => ({ req, res })` is set explicitly
in `app.module.ts`.
**Why:** `@nestjs/apollo`'s default context only forwards `req` — `res` is
silently absent otherwise, which was the second half of the bug above (even
after fixing `@Res()` → `@Context()`, `res` was still `undefined` until this
was added).

### `TokenService` stays inside `AuthModule` — doesn't get its own module
**Decision:** `TokenService` is a provider in `AuthModule`, not exported.
**Why:** A NestJS module should be a feature/domain boundary, not a
per-class wrapper. The rule that actually matters: does more than one
otherwise-independent feature need this? `PrismaService` does (hence
`PrismaModule`, imported by `AuthModule`) — `TokenService` doesn't, nothing
outside the auth flow issues/rotates/revokes tokens. Not being exported is
deliberate: it keeps `TokenService` genuinely private to the module, not
just conventionally private.

### AWS Secrets Manager: fetch by ARN, one raw PEM per secret
**Decision:** `JWT_KEY_SOURCE=secrets-manager` calls `GetSecretValueCommand`
with the configured `SecretId` (ARN or name), returns `SecretString`
directly — no JSON wrapping, no caching layer inside the provider itself.
**Why:** ARN over name lets IAM policies scope to the exact resource
(Secrets Manager appends a random suffix to every ARN, so name-based policy
matching is fragile). No caching here because the callers already handle
it correctly — `JwtModule.registerAsync`'s factory runs once at boot,
`JwtStrategy` already caches its own call via a cached promise (see below).

### `JwtStrategy` caches the *promise*, not the resolved key
**Decision:** `secretOrKeyProvider` stores `Promise<string>` in an instance
field, assigned synchronously (no `await` between the check and the
assignment), with the promise reset to `null` on rejection.
**Why:** Caching the resolved value naively (check-if-null, then `await`,
then assign) leaves a window where concurrent requests during the first
resolution all see the cache as empty and each trigger a redundant fetch —
harmless for a local file read, a real cost once this hits Secrets Manager
over the network. Resetting on rejection stops one transient failure from
poisoning every future request until a restart.

---

## Progress / schema (Phase 4)

### `Word.id` is a surrogate UUID — `wordKey` is not the primary key
**Decision:** `Word` has its own generated `id`; `wordKey` is a plain,
non-unique, indexed column.
**Why:** German has real homographs — "die Mutter" means both "mother" and
"nut" (hardware), same spelling, same article, same part of speech, only
the meaning differs. No composite of grammatical columns (`wordKey` +
`article`, even `wordKey` + `article` + `partOfSpeech`) can reliably
disambiguate every case, because a homograph's whole definition is that its
*form* is identical — only meaning differs, and meaning isn't a column you
can build a uniqueness constraint on. The surrogate id sidesteps the
problem entirely instead of chasing an unreachable "right" natural key.
**Alternatives considered:** `wordKey` as the primary key (rejected — can't
represent two words sharing a spelling); composite unique on grammatical
metadata (rejected — `Mutter`/`Mutter` proves no finite set of columns
reliably works).

### `Word` stays content-free
**Decision:** `Word` holds `id`/`wordKey`/`createdAt` only — no meaning,
theme, or exercise content.
**Why:** `mock/data/` is the sole authority on what a word means; nothing
server-side currently needs to know. Duplicating content into `Word` would
recreate a two-sources-of-truth problem for no functional gain today.
Revisit only if/when word content genuinely needs to be served from the API
(a separate, larger decision — see "Deferred" below).

### `WordProgress`: one composite unique index, not two
**Decision:** `@@unique([userId, wordId])`, no separate `@@index([userId])`.
**Why:** A composite unique index is a real b-tree index under the hood,
and Postgres supports leftmost-prefix matching — a query filtering on
`userId` alone (exactly what "give me this user's whole progress" needs,
per the scheduling algorithm's actual access pattern in
`docs/session-loop.md`) is already served by it. A second index would be
redundant.

### `ExerciseEvent` is indexed `(userId, wordId)`, not `(userId, occurredAt)`
**Decision:** The event log's index matches "this user's history for this
word," not a time-ordered activity feed.
**Why:** Index for the query you actually have. Nothing in the documented
product surface needs a chronological feed; the real, concrete need (per
the scheduling algorithm, and later the dashboard discussion) is per-word
history. Revisit if a genuinely time-windowed query shows up — adding an
index later costs nothing extra (no backfill, unlike a key-structure
change), so there's no reason to pre-empt it.

### `ExerciseEvent` denormalizes `wordId`/`exerciseType` even though `exerciseId` exists
**Decision:** `ExerciseEvent` keeps its own `wordId` and `exerciseType`
columns alongside the `exerciseId` FK, rather than relying purely on a join
through `Exercise`.
**Why:** `exerciseType` is a snapshot of what the exercise *was* at attempt
time — this table is an append-only audit log, and event logs snapshot
relevant facts rather than depending on a live join to data that might
later be edited or reclassified. `wordId` is kept mainly so the
`(userId, wordId)` index doesn't require joining through `Exercise` first.

### `Exercise.content` is `Json` + a type discriminator, not per-type tables
**Decision:** One `Exercise` table, `exerciseType: String`,
`content: Json`, rather than a table per exercise kind (or a base +
extension-table split).
**Why:** The four exercise kinds genuinely differ in shape (multiple-choice
variants vs. `typeTheWord`'s free-text recall), but this is
product-iteration-speed content — it's already changed once
(alpha-2026-05-05-session-polish) — and a schema requiring a migration for
every new exercise type or reshaped field is the wrong tradeoff for content
that changes at product-decision speed, not database-integrity speed. The
real cost: Postgres can't validate `content`'s shape, so that check moves to
the application boundary (a discriminated union validated before write).

### `userId` is never a GraphQL argument — always from `@CurrentUser()`
**Decision:** No mutation or query in `ProgressModule` accepts `userId` as
input. `JwtAuthGuard` is applied at the resolver-class level (not per
method), so any future method is covered automatically.
**Why:** This is the entire authorization model in one rule. The guard
proves *who you are* (authentication); the service's
`where userId = claim.sub` proves *what you may touch* (authorization) —
and the second only holds if the client can never supply `userId` itself.

### `wordId`/`exerciseType` are derived server-side from the `Exercise` row, not sent by the client
**Decision:** `recordExerciseResult`'s input is just `{ exerciseId,
correct }`. The service looks up `Exercise` to get `wordId`/`exerciseType`,
rather than trusting the client to also assert them.
**Why:** Same principle as the `userId` rule, one level down: don't let the
client tell the server something the server can and should derive itself
from data it already trusts. Requiring the client to send `wordId`
separately risks it disagreeing with the `exerciseId`'s real word — a
crafted or stale input, or just a bug — which would need its own
validation code to catch. Deriving it eliminates the whole problem class.

### No update/delete mutation exists for `ExerciseEvent`
**Decision:** The append-only invariant (mirroring `crosslex:exercise_log`'s
client-side rule from `AGENTS.md`) is enforced by simply never exposing a
mutation capable of violating it.
**Why:** The simplest possible enforcement of an invariant is not building
the capability to break it, rather than adding logic to prevent misuse of a
capability that didn't need to exist.

### Rejected: pruning `ExerciseEvent` to the last N rows per (user, word)
**Decision:** Explicitly rejected — the table keeps full history,
unbounded.
**Why:** The problem it would solve (efficient "last N" retrieval) is
already solved by the existing index — pruning doesn't make that query
faster. Storage isn't a real constraint at any realistic scale (tens of
thousands of rows per active user per year, and Postgres comfortably
indexes hundreds of millions). Pruning would destroy the audit trail and
any future analytics value, and adds a new failure surface (a delete path
that has to correctly identify only the right rows) to a table that's
currently trivial to reason about specifically because nothing in it can
ever be corrupted by a bad update/delete — because none exist.

### Deferred: dashboard rollup table / Redis cache
**Decision:** Not built now. If real usage ever makes trend-style dashboard
queries slow, the lever is a `(userId, occurredAt)` index first (cheap,
no backfill cost — unlike the key-structure decisions above, this can
always wait), and only a real precomputed rollup table or cache if that's
still not enough.
**Why:** `WordProgress` is a point-in-time snapshot by design — it
structurally cannot answer "what was my accuracy 3 weeks ago," only
`ExerciseEvent`'s raw log can. That's a known, accepted gap, not an
oversight — no dashboard feature is scoped yet, and solving its performance
before it exists is premature.

---

## Product scope (cross-cutting)

### Online-required, offline as a later opt-in feature — not offline-first
**Decision:** The backend assumes connectivity; a "keep words offline"
feature is explicitly deferred, not designed in from day one.
**Why:** Matches how most real products in this category actually sequence
it (Duolingo: online-first, offline download bolted on later, not built in
originally) — but worth remembering this doesn't by itself change where
word *content* lives. Bundling static content into the JS build is fully
compatible with an online-required app; those are two independent
decisions.

### Word content stays static/bundled — full DB migration deferred
**Decision:** `mock/data/` remains the source of truth for word content.
Moving it into Postgres (with a real content-authoring/seeding story) is a
separate, larger initiative, not something to fold into Progress module
work.
**Why:** Nothing currently needs the API to serve word content — the
`Word` table exists purely for referential integrity (see above). Scope
creep risk was real: this came up while designing a schema for progress
*tracking*, which doesn't require content modeling at all.

### Frontend auth integration deferred
**Decision:** No login/signup UI built yet.
**Why:** Not required for interview-prep depth — the backend work is
demonstrable and tested via GraphQL/supertest without a UI. Real product
work, but on a different track than what this build is currently
optimizing for.

### AWS deploy (Phase 5) deferred; Phase 4/6/7 rescoped around it
**Decision:** Phase 5 (VPC/RDS/RDS Proxy/Secrets Manager/Lambda) is
explicitly out of scope for the current interview-prep timeline. Phase 6's
cross-subdomain cookie work is rescoped to run locally via
`app.crosslex.local`/`api.crosslex.local` instead of real deployed
subdomains; Phase 7's Content module ships inline with the D2
service-split decision left as written reasoning rather than a build.
**Why:** Phase 5 is a new vendor and a new category of problem (cloud
infra debugging is far less predictable than application code), and
nothing in the target interview is AWS-specific. The Secrets Manager
*code path* was still implemented on request, ahead of when it's needed —
that doesn't change the scoping decision, it was just cheap to do while the
relevant file was already open.

---

## Testing conventions

### `backend/api/crosslex` uses NestJS's own spec-naming convention, not the monorepo default
**Decision:** Unit tests are colocated `*.spec.ts`; e2e tests live in
`test/` as `*.e2e-spec.ts`. The monorepo's shared `jest.config.base.js`
default (`*.test.ts`) is not used here.
**Why:** This package generates its own spec files via `nest g`, which
default to Nest's convention — fighting that on every scaffold isn't worth
it for one package's internal consistency. Each jest project is scoped by
directory (`src/` vs `test/`), not a suffix-ignore pattern, since both
families now share the `*.spec.ts` root.

### Unit tests mock Prisma entirely; e2e tests hit a real, dedicated Postgres `test` schema
**Decision:** Two separate jest projects (`unit`, `e2e`). Unit tests never
touch a database. E2e tests run the real app against a `test` schema on
the same local Postgres container as dev, never the dev schema itself.
**Why:** Mocked unit tests are fast and can't be flaky on infra, but can't
catch a forgotten `WHERE userId = ...` — only a real database enforces
real filtering. E2e tests prove the real thing works, including the parts
a mock can't (cookie attributes, guard/JWT chain, actual FK constraints).

### E2e spec files must run serially (`--runInBand`), not in parallel workers
**Decision:** `test:e2e` passes `--runInBand`. A shared `resetDatabase()`
helper (`test/reset-database.ts`) is used by every e2e spec's `beforeEach`,
not a per-file copy of the cleanup list.
**Why:** Jest parallelizes different spec *files* into separate worker
processes by default. All e2e specs share one real, mutable Postgres
schema (not one per worker) — so with more than one e2e file, one file's
`beforeEach` can wipe rows out from under another file's in-flight test.
Invisible with a single e2e file; surfaced immediately the moment a second
one (`progress.e2e-spec.ts`) was added. A shared reset helper additionally
prevents per-file cleanup lists from silently drifting out of sync as new
tables get added — the bug that caused this in the first place.
