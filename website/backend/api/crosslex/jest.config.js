// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { passWithNoTests, ...base } = require('../../../jest.config.base');

// Two projects, not one config: unit tests mock Prisma entirely and must
// never depend on Postgres or env vars being present. Only the e2e project
// needs jest-e2e-setup.ts (which requires TEST_DATABASE_URL and points
// DATABASE_URL at the test schema) — scoping it to a separate project
// keeps that requirement off every other test in this package.
// NestJS's own convention, not the monorepo base's: unit specs colocated
// with source as *.spec.ts, e2e specs in test/ as *.e2e-spec.ts. Scoping
// each project to its own directory (rather than an ignore-pattern hack)
// is what actually keeps the two apart now that both share the *.spec.ts
// suffix family.
module.exports = {
  passWithNoTests: true,
  projects: [
    {
      ...base,
      displayName: 'unit',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/src/**/*.spec.ts'],
    },
    {
      ...base,
      displayName: 'e2e',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/test/**/*.e2e-spec.ts'],
      setupFiles: ['<rootDir>/test/jest-e2e-setup.ts'],
    },
  ],
};
