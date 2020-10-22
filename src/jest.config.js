const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'jest-preset-angular',
  verbose: true,
  setupFilesAfterEnv: ['./setupJest.ts'],
  coverageDirectory: '../coverage/angular/ut',
  collectCoverageFrom: ['app/**/*.ts', '!app/**/*(index|*.module|*.routes|index.d).ts'],
  globals: {
    'ts-jest': {
      tsConfig: 'src/tsconfig.spec.json',
    },
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'Unit tests',
        outputDirectory: 'reports/angular',
        outputName: 'ut.xml',
      },
    ],
    [
      '../node_modules/jest-html-reporter',
      {
        pageTitle: 'Unit tests Report',
        outputPath: 'reports/angular/ut.html',
        includeFailureMsg: true,
      },
    ],
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/..',
  }),
};
