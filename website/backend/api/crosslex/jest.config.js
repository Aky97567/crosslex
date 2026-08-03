// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { passWithNoTests, ...base } = require('../../../jest.config.base');

// Two projects, not one config: unit tests mock Prisma entirely and must
// never depend on Postgres or env vars being present. Only the e2e project
// needs jest-e2e-setup.ts (which requires TEST_DATABASE_URL and points
// DATABASE_URL at the test schema) — scoping it to a separate project
// keeps that requirement off every other test in this package.
module.exports = {
  passWithNoTests: true,
  projects: [
    {
      ...base,
      displayName: 'unit',
      testEnvironment: 'node',
      testPathIgnorePatterns: ['/node_modules/', '\\.e2e\\.test\\.ts$'],
    },
    {
      ...base,
      displayName: 'e2e',
      testEnvironment: 'node',
      testMatch: ['**/*.e2e.test.ts'],
      setupFiles: ['<rootDir>/test/jest-e2e-setup.ts'],
    },
  ],
};
