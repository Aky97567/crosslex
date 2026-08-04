# Build context must be website/ (the Yarn workspace root), not this
# directory — Yarn needs every workspace's package.json present to resolve
# the lockfile correctly. See docker-compose.yml's `build.context`.

FROM node:22-slim AS build
WORKDIR /workspace
RUN corepack enable
# node:22-slim has no OpenSSL — Prisma's CLI needs it to detect which
# engine build to use, and silently falls back to guessing without it.
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

# Full monorepo source (node_modules/dist/.git excluded via .dockerignore).
# Installing every workspace's deps here, not just this package's, is a
# deliberate simplification — this image is for local dev/test infra, not
# a size-optimized deploy artifact. Revisit with Yarn's `focus` or a
# Turborepo-style prune if/when this becomes a real deploy image.
COPY . .
RUN yarn install --immutable

WORKDIR /workspace/backend/api/crosslex
# `prisma migrate dev`/`db push` don't auto-run `generate` in this Prisma
# version — the generated client has to exist before `nest build` compiles
# src/, since PrismaService imports from it directly.
RUN npx prisma generate
RUN yarn build

FROM node:22-slim AS runtime
WORKDIR /workspace
RUN corepack enable
# Same reason as the build stage — `prisma migrate deploy` runs here too.
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

# node_modules is hoisted across the workspace by Yarn's node-modules
# linker, so both the root and the package's own node_modules are needed.
COPY --from=build /workspace/node_modules ./node_modules
COPY --from=build /workspace/backend/api/crosslex/node_modules ./backend/api/crosslex/node_modules
COPY --from=build /workspace/backend/api/crosslex/dist ./backend/api/crosslex/dist
COPY --from=build /workspace/backend/api/crosslex/package.json ./backend/api/crosslex/package.json
# prisma/ (schema + migrations) is needed at runtime too — the container
# runs `prisma migrate deploy` before starting the server, not just the
# already-generated client.
COPY --from=build /workspace/backend/api/crosslex/prisma ./backend/api/crosslex/prisma
COPY --from=build /workspace/backend/api/crosslex/prisma.config.ts ./backend/api/crosslex/prisma.config.ts

WORKDIR /workspace/backend/api/crosslex
EXPOSE 4000
# Migrate then start — keeps `docker compose up` a genuine one-command
# path to a working server against a fresh Postgres volume, no manual
# migrate step required first.
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main.js"]
