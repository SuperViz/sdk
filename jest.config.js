const { argv } = require('yargs');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '<rootDir>/src/**/*.js'],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['html', 'lcov'].concat(argv.coverage ? ['text'] : []),
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/coverage/', '/e2e/'],
};
