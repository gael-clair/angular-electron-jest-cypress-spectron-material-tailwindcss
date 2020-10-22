const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  verbose: true,
  coverageDirectory: '../coverage/electron/ut',
  collectCoverageFrom: ['src/**/*.ts', '!src/main.ts'],
  transform: { '\\.ts$': ['ts-jest'] },
  globals: {
    'ts-jest': {
      tsConfig: 'electron/tsconfig.spec.json',
    },
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'Unit tests',
        outputDirectory: 'reports/electron',
        outputName: 'ut.xml',
      },
      [
        '../node_modules/jest-html-reporter',
        {
          pageTitle: 'Unit tests Report',
          outputPath: 'reports/electron/ut.html',
          includeFailureMsg: true,
        },
      ],
    ],
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>',
  }),
};
