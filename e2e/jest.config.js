const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  verbose: true,
  testMatch: ['**/*.e2e.ts'],
  transform: { '\\.ts$': ['ts-jest'] },
  globals: {
    'ts-jest': {
      tsConfig: 'e2e/tsconfig.json',
    },
  },
  testEnvironment: 'node',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'E2E tests',
        outputDirectory: 'reports/e2e',
        outputName: 'e2e.xml',
      },
      [
        '../node_modules/jest-html-reporter',
        {
          pageTitle: 'E2E tests Report',
          outputPath: 'reports/e2e/e2e.html',
          includeFailureMsg: true,
        },
      ],
    ],
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/..',
  }),
};
