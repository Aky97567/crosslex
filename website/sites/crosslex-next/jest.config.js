const nextJest = require('next/jest');
const createJestConfig = nextJest({ dir: './' });
const base = require('../../jest.config.base');
module.exports = createJestConfig({ ...base, testEnvironment: 'jsdom' });
