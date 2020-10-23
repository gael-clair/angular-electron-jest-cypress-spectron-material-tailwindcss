[![Angular Logo](https://www.vectorlogo.zone/logos/angular/angular-icon.svg)](https://angular.io/) [![Electron Logo](https://www.vectorlogo.zone/logos/electronjs/electronjs-icon.svg)](https://electronjs.org/) [![Jest Logo](https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg)](https://jestjs.io/) <a href="https://www.cypress.io/"><img src="https://raw.githubusercontent.com/cypress-io/cypress-icons/master/src/logo/cypress-io-logo-round.svg" width="64"></a> <a href="https://www.electronjs.org/spectron"><img src="https://www.electronjs.org/images/spectron-icon.svg" width="64"></a> <a href="https://material.angular.io/"><img src="https://material.angular.io/assets/img/angular-material-logo.svg" width="64"></a> [![Tailwind CSS Logo](https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg)](https://tailwindcss.com/)

<p>
<a href="https://github.com/gael-clair/angular-electron-jest-cypress-spectron-material-tailwindcss/blob/main/LICENSE"><img src="https://img.shields.io/github/license/gael-clair/angular-electron-jest-cypress-spectron-material-tailwindcss" alt="License" /></a><br/>
<a href="https://github.com/gael-clair/angular-electron-jest-cypress-spectron-material-tailwindcss/issues"><img src="https://img.shields.io/github/issues/gael-clair/angular-electron-jest-cypress-spectron-material-tailwindcss" alt="Issues" /></a><br/>
<a href="https://github.com/gael-clair/angular-electron-jest-cypress-spectron-material-tailwindcss/actions"><img src="https://img.shields.io/github/workflow/status/gael-clair/angular-electron-jest-cypress-spectron-material-tailwindcss/checks" alt="Build Passing"></a><br/>
<a href='https://coveralls.io/github/gael-clair/angular-electron-jest-cypress-spectron-material-tailwindcss?branch=main'><img src='https://coveralls.io/repos/github/gael-clair/angular-electron-jest-cypress-spectron-material-tailwindcss/badge.svg?branch=main' alt='Coverage Status' /></a><br/>
<!-- <a href='https://coveralls.io/github/gael-clair/angular-electron-jest-cypress-spectron-material-tailwindcss?branch=main'><img src='https://coveralls.io/repos/github/gael-clair/angular-electron-jest-cypress-spectron-material-tailwindcss/badge.svg?branch=main' alt='Coverage Status' /></a><br/> -->
<!-- <a href="https://github.com/gael-clair/angular-electron-jest-cypress-spectron-material-tailwindcss"><img src="https://github.com/gael-clair/angular-electron-jest-cypress-spectron-material-tailwindcss/workflows/checks/badge.svg" /></a><br/> -->
<a href="http://commitizen.github.io/cz-cli/"><img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitizen friendly" /></a><br/>
</p>

## Table of Contents

- [About this project](#about-this-project)
  - [Credits](#credits)
  - [Built with](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Build](#build)
    - [Development](#development)
    - [Unit tests](#unit-tests)
    - [Integration tests](#integration-tests)
    - [End-To-End tests](#end-to-end-tests)
    - [Lint](#lint)
    - [Format](#format)
    - [Documentation](#documentation)
- [Continuous Integration](#continuous-integration)
  - [Configure secrets](#configure-secrets)
  - [Workflow steps](#workflow-steps)
  - [Checks on Pull Requests](#checks-on-pull-requests)
  - [Coveralls configuration](#coveralls-configuration)
- [Angular](#angular)
  - [Customization](#customization)
  - [UI Design](#ui-design)
    - [TailwindCSS](#tailwindcss)
    - [Material](#material)
  - [Unit tests with Jest](#unit-tests-with-jest)
  - [Integration tests with Cypress](#integration-tests-with-cypress)
  - [Extending TSLint](#extending-tslint)
  - [Formatting with Prettier](#formatting-with-prettier)
  - [Style linting with Stylelint](#style-linting-with-stylelint)
  - [Git hooks](#git-hooks)
  - [Documentation generation](#documentation-generation)
- [Electron](#electron)
  - [Unit tests with Jest](#unit-tests-with-jest-1)
  - [End-to-End tests with Spectron](#end-to-end-tests-with-spectron)
  - [Build application](#build-application)
- [Dependencies](#dependencies)
  - [Added](#added)
  - [Removed (if project generated without _--minimal=true_ option)](#removed--if-project-generated-without----minimal-true--option-)

## About this project

This project is using Electron to create an Angular app using Jest instead of Karma, Cypress instead of Protractor, Angular Material and TailwindCSS. Moreover, formatting, style linting, documentation generation and git hooks (for linting) have been added to be more complete. This README explains all modifications made to initial Angular project.

### Credits

This project is fully inspired by [angular-electron](https://github.com/maximegris/angular-electron/) by Maxime Gris, but with addition of TailwindCSS, Jest, Material, Stylelint, Compodoc and several tools.

### Built with

- [Node.js v12 (Javascript Engine)](https://nodejs.org/)
- [Yarn v1 (Package Manager)](https://classic.yarnpkg.com/)
- [Angular v10.1.6 (Single Page Application)](https://angular.io/)
- [Electron](https://www.electronjs.org/)

## Getting Started

Before you begin we recommend you read about the basic building blocks that assemble this application:

- Electron - Electron's [official website](https://www.electronjs.org/) documentation will explain all the aspects of an app development.
- Angular - Angular's [official Website](https://angular.io/) is a great starting point. You can also use [Thinkster Popular Guide](http://www.thinkster.io/), and [Egghead Videos](https://egghead.io/).
- Node.js - Start by going through [node.js Official Website](http://nodejs.org/) and this [StackOverflow Thread](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js), which should get you going with the Node.js platform in no time.

### Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

- Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
- Node.js 12 - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
- Yarn (v1) - You're going to use the [Yarn Package Manager](http://bower.io/) to manage your packages and dependencies. Follow these [instructions](https://yarnpkg.com/getting-started/) to install Yarn.

### Installation

1.  Clone the repo

```git
$ git clone https://github.com/gael-clair/angular-electron.git YOUR_REPO_FOLDER
```

2.  Get into repo folder

```shell script
$ cd YOUR_REPO_FOLDER
```

3.  Add your repo as origin

```git
$ git remote remove origin
$ git remote add origin YOUR_REPO_URL
```

4. Update project name in `package.json`

5. Install dependencies

```shell script
$ npm install
```

### Usage

#### Build

```shell script
# build application in production mode
$ yarn build

# build angular app
$ yarn ng:tw:build

# build angular app in production mode
$ yarn ng:tw:build:prod

# build electron app
$ yarn electron:build

# build electron app in production mode
$ yarn electron:build:prod
```

#### Development

```shell script
# starts angular development server with live reload and open electron in watch mode
$ yarn start
```

#### Unit tests

```shell script
# starts angular and electron unit tests
$ yarn test

# starts angular and electron unit tests with source/test files watch
$ yarn test:watch

# starts angular and electron unit tests in CI mode with coverage (coverage in coverage folder and reports in reports folder)
$ yarn test:ci

# starts angular unit tests
$ yarn ng:test

# starts angular unit tests with source/test files watch
$ yarn ng:test:watch

# starts angular unit tests with coverage
$ yarn ng:test:cov

# starts angular unit tests in CI mode with coverage (coverage in coverage folder and reports in reports folder)
$ yarn ng:test:ci

# starts electron unit tests
$ yarn electron:test

# starts electron unit tests with source/test files watch
$ yarn electron:test:watch

# starts electron unit tests with coverage
$ yarn electron:test:cov

# starts electron unit tests in CI mode with coverage (coverage in coverage folder and reports in reports folder)
$ yarn electron:test:ci
```

#### Integration tests

```shell script
# starts angular and open cypress
$ yarn ng:e2e

# starts angular and run cypress
$ yarn ng:e2e:ci
```

#### End-To-End tests

```shell script
# builds angular and electron app and starts jest tests with spectron
$ yarn e2e

# builds angular and electron app and starts jest tests in CI mode with spectron
$ yarn e2e:ci
```

#### Lint

```shell script
# lints source and test files
$ yarn lint

# lints source and test files and fixes errors if possible
$ yarn lint:fix

# lints source and test files and generate a report (report at reports/lint.xml)
$ yarn lint:ci

# lints style files
$ yarn lint:style

# lints style files and fixes errors if possible
$ yarn lint:style:fix

# lints style files and generate a report (report at reports/style.xml)
$ yarn lint:style:ci
```

#### Format

```shell script
# formats source and test files
$ yarn format
```

#### Documentation

```shell script
# generates angular project documentation
$ yarn ng:doc
```

## Continuous Integration

The repo includes a [Github Action](https://github.com/features/actions) configuration for continuous integration (workflow file `.github/workflows/checks.yml`) It is also integrated with [Coveralls](https://coveralls.io/) during workflow process.

### Configure secrets

To let electron-builder publish new release, you have to had to repository secrets a Github token with *write:package* permission. When token generated go to `Repo Settings > Secrets > New secret` add a secret with *GH_TOKEN* name and token as value.
It will be automatically exposed as en environment variable in the workflow.

### Workflow steps

- Install (with cache)
- Build
- Lint
- Angular unit tests
- Coveralls upload result of angular unit tests
- Angular integration tests
- Coveralls upload result of angular integration tests
- Electron unit tests
- Coveralls upload result of electron unit tests
- End-to-End tests
- Build release artifacts
- Upload of coverage reports artifact
- Upload of test reports artifact

### Checks on Pull Requests

To be sure to pass checks before merging a Pull Request you should add required checks in `Repo Settings > Branches > Branch protection rules > Require status checks to pass before merging` :

- Coveralls - angular-unit-tests
- Coveralls - angular-integration-tests
- Coveralls - electron-unit-tests
- checks (build, lint, test)
- coverage/coveralls

### Coveralls configuration

To add a check failure if coverage percentage is under a certain threshold, go to the repository page on Coveralls and go to `Settings > PULL REQUESTS ALERTS > COVERAGE THRESHOLD FOR FAILURE` and set minimal value for coverage percentage (for example 80\%).

## Angular

This project is based on [Angular](https://angular.io/). The @angular/cli command used to generate this project is:

```shell script
$ npx @angular/cli new angular-electron --routing=true --style=scss --minimal=true
```

### Customization

1. Rename `tsconfig.json` to `tsconfig.base.json`.

2. Move `tsconfig.app.json` and `tsconfig.spec.json` to `src` folder.

3. Update `tsconfig.base.json` with:

```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": ".",
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "esModuleInterop": true, // add
    "allowSyntheticDefaultImports": true, // add
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "es2015",
    "module": "es2020",
    "lib": ["es2018", "dom"]
  }
}
```

4. Update `src/tsconfig.app.json` with:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app"
  },
  "files": [
    "main.ts", // remove src/
    "polyfills.ts" // remove src/
  ],
  "include": [
    "**/*.d.ts" // remove src/
  ]
}
```

4. Update `src/tsconfig.spec.json` with:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": ["jasmine"]
  },
  "files": [
    "test.ts", // remove src/
    "polyfills.ts" // remove src/
  ],
  "include": [
    "**/*.spec.ts", // remove src/
    "**/*.d.ts" // remove src/
  ]
}
```

5. Create `src/tsconfig.json` with:

```json
{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "paths": {
      "@app/core/*": ["src/app/core/*"],
      "@app/core": ["src/app/core"],
      "@app/shared/*": ["src/app/shared/*"],
      "@app/shared": ["src/app/shared"],
      "@app/features/*": ["src/app/features/*"],
      "@app/features": ["src/app/features"],
      "@app/env": ["src/environments/environment"],
      "@app/types": ["src/app/types"],
      "@test/utils": ["src/test.utils.ts"]
    }
  }
}
```

6. Update `angular.json > projects > angular-electron > architect > build > options` with:

```json
{
  "build": {
    "builder": "@angular-devkit/build-angular:browser",
    "options": {
      "outputPath": "src/dist", // update
      "index": "src/index.html",
      "main": "src/main.ts",
      "polyfills": "src/polyfills.ts",
      "tsConfig": "src/tsconfig.app.json", // add src/
      "aot": true,
      "assets": ["src/favicon.ico", "src/assets"],
      "styles": ["src/styles.scss"],
      "scripts": []
    }
  }
}
```

7. Update `angular.json > projects > angular-electron > architect > lint > options > tsConfig` with:

```json
{
  "lint": {
    "builder": "@angular-devkit/build-angular:tslint",
    "options": {
      "tsConfig": [
        "src/tsconfig.app.json", // add src/
        "src/tsconfig.spec.json" // add src/
      ],
      "exclude": ["**/node_modules/**"]
    }
  }
}
```

### UI Design

#### TailwindCSS

[TailwindCSS](https://tailwindcss.com/) is used with Material to provide UI components and utilities.

1. Add tailwind dependencies:

```shell script
$ yarn add -D tailwindcss ng-tailwindcss
```

2. Create file `tailwind.config.js` with:

```shell script
$ npx tailwind init
```

3. Create file `src/tailwind.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Create file `ng-tailwind.js` file with:

```shell script
$ npx ngtw configure
```

5. Update file `ng-tailwind.js` to be compatible with windows and linux:

```javascript
module.exports = {
  // Tailwind Paths
  configJS: 'tailwind.config.js',
  sourceCSS: 'src/tailwind.css', // if created on windows, replace \\ with /
  outputCSS: 'src/styles.css', // if created on windows, replace \\ with /
  // Sass
  sass: false,
  // PurgeCSS Settings
  purge: false,
  keyframes: false,
  fontFace: false,
  rejected: false,
  whitelist: [],
  whitelistPatterns: [],
  whitelistPatternsChildren: [],
  extensions: ['.ts', '.html', '.js'],
  extractors: [],
  content: [],
};
```

6. Update `angular.json > projects > angular-electron > architect > build`:

```json
{
  "build": {
    "options": {
      "styles": ["src/styles.scss", "src/styles.css"] // add styles.css file a source file for styles
    }
  }
}
```

7. To build `src/styles.css` before using app (serving, building or testing) be sure to run:

```shell script
# build Tailwind CSS
$ ngtw build

# build Tailwind CSS with purge of unused elements
$ ngtw build --purge
```

8. To constantly build `src/styles.css` when source files are modified, use watch mode in parallel to serve mode:

```shell script
$ ngtw watch
```

9. Add `src/styles.css` to `.gitignore` file.

#### Material

This project is using Material Design with [@angular/material](https://material.angular.io/) installed with:

1. Install dependencies:

```shell script
$ yarn add @angular/cdk hammerjs
```

2. Run schematics to add Material to project:

```shell script
$ yarn ng add @angular/material
# Theme: Purple/Green
# No global Angular Material typography styles
# With browser animations for Angular Material
```

3. Add selected style file in `angular.json > projects > angular-electron > architect > build > options > styles`:

```json
{
  "styles": [
    "./node_modules/@angular/material/prebuilt-themes/purple-green.css", // add material style
    "src/styles.scss",
    "src/styles.css"
  ]
}
```

### Unit tests with Jest

Unit testing is based initially on the use of Karma/Jasmine but this project uses Jest instead. To add Jest:

1.  Install Jest and related dependencies

```shell script
$ yarn add -D jest jest-preset-angular jest-junit ts-jest @types/jest jest-html-reporter
```

2.  Remove `types` property and `test.ts` from `files` property from `tsconfig.spec.json`:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec"
  },
  "files": ["polyfills.ts"],
  "include": ["**/*.spec.ts", "**/*.d.ts"]
}
```

3. Create `src/jest.config.js` with:

```javascript
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
```

4.  Create `src/setupJest.ts` with:

```javascript
import 'jest-preset-angular';

const mock = () => {
  let storage: { [key: string]: string } = {};
  return {
    getItem: (key: string) => (key in storage ? storage[key] : null),
    setItem: (key: string, value: string) => (storage[key] = value || ''),
    removeItem: (key: string) => delete storage[key],
    clear: () => (storage = {}),
  };
};

Object.defineProperty(window, 'localStorage', { value: mock() });
Object.defineProperty(window, 'sessionStorage', { value: mock() });
Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance'],
    };
  },
});
Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>',
});
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});
```

5.  Remove Angular test target in `angular.json > projects > angular-electron > architect > test`

6.  If you generated the project without `--minimal=true`:

    1.  Some useless files could be deleted:

    ```shell script
    $ rm karma.conf.js src/test.ts
    ```

    2.  Remove Karma dependencies:

    ```shell script
    $ yarn remove karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter
    ```

### Integration tests with Cypress

1.  Install cypress-schematic and dependencies (for coverage)

```shell script
$ yarn add -D @briebug/cypress-schematic wait-on
```

2.  Add schematics to project

```shell script
$ yarn ng add @briebug/cypress-schematic --noBuilder

# Remove Protractor
```

3. Update `cypress/tsconfig.json` with:

```json
{
  "extends": "../tsconfig.base.json", // refer to base json
  "compilerOptions": {
    "outDir": "../out-tsc/cypress", // change
    "sourceMap": false
  },
  "include": ["../node_modules/cypress", "**/*.ts"]
}
```

4. Update `angular.json > projects > angular-electron > architect > lint` switching typescript config file for e2e from `e2e/tsconfig.json` to `cypress/tsconfig.json`:

```json
{
  "lint": {
    "builder": "@angular-devkit/build-angular:tslint",
    "options": {
      "tsConfig": ["src/tsconfig.app.json", "src/tsconfig.spec.json", "cypress/tsconfig.json"], // replace e2e/ with cypress/
      "exclude": ["**/node_modules/**"]
    }
  }
}
```

5.  To add coverage to cypress:

    1. Install dependencies

    ```shell script
    $ yarn add -D ngx-build-plus istanbul-instrumenter-loader @istanbuljs/nyc-config-typescript source-map-support ts-node @cypress/code-coverage nyc istanbul-lib-coverage
    ```

    2.  Create file `cypress/coverage.webpack.js` with:

    ```javascript
    module.exports = {
      module: {
        rules: [
          {
            test: /\.(js|ts)$/,
            loader: 'istanbul-instrumenter-loader',
            options: { esModules: true },
            enforce: 'post',
            include: require('path').join(__dirname, '../src/app'),
            exclude: [/\.(e2e|spec)\.ts$/, /node_modules/, /(ngfactory|ngstyle)\.js/],
          },
        ],
      },
    };
    ```

    3. Update `angular.json > projects > angular-electron > architect > e2e` with:

    ```json
    {
      "e2e": {
        "builder": "ngx-build-plus:dev-server",
        "options": {
          "browserTarget": "angular-electron:build",
          "extraWebpackConfig": "./cypress/coverage.webpack.js"
        }
      }
    }
    ```

    4. Create file `.nycrc.json` with:

    ```json
    {
      "extends": "@istanbuljs/nyc-config-typescript",
      "report-dir": "./coverage/angular/ti"
    }
    ```

    5. Add to file `cypress/support/index.d.ts`:

    ```typescript
    import '@cypress/code-coverage/support';
    ```

    6. Update file `cypress/plugins/index.js` with:

    ```typescript
    const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor');
    const registerCodeCoverageTasks = require('@cypress/code-coverage/task');

    module.exports = (on, config) => {
      on('file:preprocessor', cypressTypeScriptPreprocessor);
      return registerCodeCoverageTasks(on, config); // activate coverage task
    };
    ```

    7. To run tests coverage with cypress, after command `yarn e2e` use:

    ```shell script
    $ cypress run
    ```

    8.  If you generated project without `--minimal=true` you could delete some file and configuration:

        1.  Remove Jasmine dependencies:

        ```shell script
        $ yarn remove jasmine-core jasmine-spec-reporter @types/jasmine @types/jasminewd2
        ```

        2. Remove e2e folder.

### Extending TSLint

1.  Install TSLint preset for Angular:

```shell script
$ yarn add -D tslint-angular
```

2.  Add _tslint-angular_ preset to extends array in `tslint.json`:

```json
{
  "extends": ["tslint:recommended", "tslint-angular"]
}
```

### Formatting with Prettier

1.  Install Prettier and dependencies to deal with Typescript and linters:

```shell script
$ yarn add -D prettier tslint-config-prettier tslint-plugin-prettier
```

2.  Create Prettier configuration file `.prettierrc.json` with:

```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "endOfLine": "lf",
  "printWidth": 120,
  "tabWidth": 2
}
```

3.  To prevent TSLint to use rules that Prettier will take care of, activate prettier in rules and add `tslint-plugin-prettier` to rulesDirectory in `tslint.json`:

```json
{
  "extends": ["tslint:recommended", "tslint-angular", "tslint-config-prettier"],
  "rulesDirectory": ["codelyzer", "tslint-plugin-prettier"] // add rules
  "rules": {
    "prettier": true // apply prettier rules
  }
}
```

4. Create file `.prettierignore` with:

```text
/.nyc_output
/coverage
/electron/dist
/reports
/src/styles.css
/src/dist
```

### Style linting with Stylelint

In order to add linting of style files (css and scss), [Stylelint](https://stylelint.io/) is used with some rules presets.

1.  Install Stylelint dependencies:

```shell script
$ yarn add -D stylelint stylelint-config-recommended stylelint-junit-formatter stylelint-no-unsupported-browser-features stylelint-config-prettier stylelint-prettier make-dir
```

2.  Create Stylelint configuration `.stylelintrc.json` file with:

```json
{
  "extends": ["stylelint-prettier/recommended", "stylelint-config-recommended", "stylelint-config-prettier"],
  "plugins": ["stylelint-no-unsupported-browser-features", "stylelint-prettier"],
  "rules": {
    "prettier/prettier": true,
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["tailwind"]
      }
    ],
    "plugin/no-unsupported-browser-features": [
      true,
      {
        "severity": "warning"
      }
    ],
    "no-empty-source": null
  },
  "junit-formatter": {
    "outputPath": "reports/style.xml"
  }
}
```

### Git hooks

One pre-commit git hook is activated with [Husky](https://github.com/typicode/husky) to call [Lint-staged](https://github.com/okonet/lint-staged) to format and lint files to be commited. If one operation fails commit is canceled. One commit-msg git hook is set to let [@commitlint/cli](https://commitlint.js.org/) lint commit message to ensure that it follows conventional-changelog format.

To configure git hooks you have to:

1.  Add husky, commitlint and cz-conventional-changelog dependencies:

```shell script
yarn add -D husky lint-staged @commitlint/cli @commitlint/config-conventional cz-conventional-changelog commitizen
```

2.  Create file `.cz.json` with:

```json
{
  "path": "cz-conventional-changelog"
}
```

3.  Create file `.commitlintrc.json` with:

```json
{
  "extends": ["@commitlint/config-conventional"]
}
```

4.  Create file `.huskyrc.json` with:

```json
{
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
    "pre-commit": "lint-staged"
  }
}
```

5.  Create a file `.lintstagedrc` with JSON configuration:

```json
{
  "*.{json,js,ts,tsx,md,html,yml}": "prettier --write",
  "*.{scss,css}": "stylelint --fix",
  "*.{ts,tsx,js,jsx}": "tslint --fix"
}
```

### Documentation generation

[Compodoc](https://compodoc.app/) is used to write documentation.

1. Add dependencies

```shell script
$ yarn add -D @compodoc/compodoc
```

## Electron

1. Install Electron and its dependencies:

```shell script
$ yarn add -D electron
```

2. Create folder `electron/src`.

3. Create file `electron/tsconfig.json` with:

```json
{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "module": "commonjs"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["src/**/*.spec.ts"]
}
```

3. Create file `electron/main.ts` with:

```typescript
import { app, BrowserWindow, screen } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow = null;
const args = process.argv.slice(1);
const serve = args.some((val) => val === '--serve');

function createWindow(): BrowserWindow {
  const size = screen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    center: true,
    width: size.width / 2,
    height: size.height / 2,
    webPreferences: {
      nodeIntegration: false, // disabled for security reasons
      allowRunningInsecureContent: true, // to serve from localhost
      contextIsolation: true, // enabled for security reasons
      enableRemoteModule: false, // disabled for security reasons
      preload: path.resolve(__dirname, 'preload.js'),
    },
  });

  if (serve) {
    win.webContents.openDevTools();
    require('electron-reload')(path.join(__dirname), {
      electron: path.join(__dirname, '../../node_modules/.bin/electron'),
      argv: ['--serve'],
    });
    win.loadURL('http://localhost:4200');
  } else {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, '../../src/dist/index.html'),
        protocol: 'file:',
        slashes: true,
      }),
    );
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

  return win;
}

function main(): void {
  try {
    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    // Added 400 ms to fix the black background issue while using transparent window.
    // More detais at https://github.com/electron/electron/issues/15947
    app.on('ready', () => {
      setTimeout(createWindow, 400);
    });

    // Quit when all windows are closed.
    app.on('window-all-closed', () => {
      // On OS X it is common for applications and their menu bar
      // to stay active until the user quits explicitly with Cmd + Q
      if (process.platform !== 'darwin') {
        app.quit();
      }
    });

    app.on('activate', () => {
      // On OS X it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (win === null) {
        createWindow();
      }
    });
  } catch (e) {
    // Catch Error
    // throw e;
  }
}

main();
```

4. For security reasons, context isolation is activated, and node integration and remote deactivated. To let renderer process communicate in a controlled manner we expose utilities functions to propose a secure manner to communicate with main process. Create file `electron/src/preload.ts` with:

```typescript
import { contextBridge, ipcRenderer } from 'electron';

const IN_EVENTS = [];
const OUT_EVENTS = [];

contextBridge.exposeInMainWorld('eventsApi', {
  send: (channel, ...data): void => {
    if (IN_EVENTS.includes(channel)) {
      ipcRenderer.send(channel, ...data);
    }
  },
  receive: (channel, cb): void => {
    if (OUT_EVENTS.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => cb(...args));
    }
  },
  invoke: async (channel, ...data): Promise<any> => {
    if (IN_EVENTS.includes(channel)) {
      return await ipcRenderer.invoke(channel, ...data);
    }
  },
});
```

### Unit tests with Jest

1. Create file `electron/tsconfig.spec.json` for unit tests with:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../out-tsc/electron/spec"
  },
  "include": ["**/*.spec.ts"]
}
```

2. Create file `electron/jest.config.js` with:

```javascript
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  verbose: true,
  coverageDirectory: '../coverage/electron/ut',
  collectCoverageFrom: ['src/**/*.ts', '!src/**/index.d.ts'],
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
          outputPath: 'reports/electron/ut/ut.html',
          includeFailureMsg: true,
        },
      ],
    ],
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>',
  }),
};
```

3. Write your tests in `*.spec.ts` files.

### End-to-End tests with Spectron

1. Install Spectron:

```shell script
$ yarn add -D spectron
```

2. Create folder `e2e/src`.

3. Create file `e2e/tsconfig.json` with:

```json
{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "../out-tsc/e2e"
  },
  "include": ["src/**/*.e2e.ts"]
}
```

4. Create file `e2e/jest.config.js` with:

```javascript
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
```

### Build application

1. Install `electron-builder`:

```shell script
$ yarn add -D electron-builder
```

2. Create file `electron-builder.json` with:

```json
{
  "appId": "com.electron.angular-electron",
  "productName": "angular-electron",
  "directories": {
    "output": "release/"
  },
  "files": ["electron/dist", "src/dist"],
  "win": {
    "icon": "src/dist/assets/icons/favicon.ico",
    "target": ["portable"]
  },
  "mac": {
    "icon": "src/dist/assets/icons/favicon.ico",
    "target": ["dmg"]
  },
  "linux": {
    "icon": "src/dist/assets/icons/favicon.256x256.png",
    "target": ["AppImage"]
  }
}
```

## Dependencies

### Added

- Init

  - [npm-run-all](https://www.npmjs.com/package/npm-run-all)
  - [make-dir](https://www.npmjs.com/package/make-dir)
  - [make-dir-cli](https://www.npmjs.com/package/make-dir-cli)

  ```shell script
  yarn add -D npm-run-all make-dir make-dir-cli
  ```

- Git hooks:

  - [husky](https://github.com/typicode/husky)
  - [@commitlint/cli](https://commitlint.js.org/)
  - [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)
  - [commitizen](https://www.npmjs.com/package/commitizen)
  - [cz-conventional-changelog](https://www.npmjs.com/package/cz-conventional-changelog)
  - [lint-staged](https://www.npmjs.com/package/lint-staged)

  ```shell script
  yarn add -D husky @commitlint/cli @commitlint/config-conventional commitizen cz-conventional-changelog lint-staged
  ```

- UI design:

  - [@angular/material](https://material.angular.io/)
  - [@angular/cdk](https://www.npmjs.com/package/@angular/cdk)
  - [hammerjs](https://hammerjs.github.io/)
  - [tailwindcss](https://tailwindcss.com/)
  - [ng-tailwindcss](https://www.npmjs.com/package/ng-tailwindcss)

  ```shell script
  # Material (added with ng add @angular/material command)
  $ yarn add @angular/material @angular/cdk hammerjs

  # TailwindCSS
  $ yarn add -D tailwindcss ng-tailwindcss
  ```

- Testing:

  - [jest](https://jestjs.io/)
  - [jest-junit](https://www.npmjs.com/package/jest-junit)
  - [jest-preset-angular](https://www.npmjs.com/package/jest-preset-angular)
  - [jest-html-reporter](https://www.npmjs.com/package/jest-html-reporter)
  - [ts-jest](https://www.npmjs.com/package/ts-jest)
  - [@types/jest](https://www.npmjs.com/package/@types/jest)
  - [istanbul-instrumenter-loader](https://www.npmjs.com/package/istanbul-instrumenter-loader)
  - [ngx-build-plus](https://www.npmjs.com/package/ngx-build-plus)
  - [wait-on](https://www.npmjs.com/package/wait-on)
  - [@briebug/cypress-schematic](https://www.npmjs.com/package/@briebug/cypress-schematic)
  - [@istanbuljs/nyc-config-typescript](https://www.npmjs.com/package/@istanbuljs/nyc-config-typescript)
  - [source-map-support](https://www.npmjs.com/package/source-map-support)
  - [ts-node](https://www.npmjs.com/package/ts-node)
  - [@cypress/code-coverage](https://www.npmjs.com/package/@cypress/code-coverage)
  - [nyc](https://www.npmjs.com/package/nyc)
  - [istanbul-lib-coverage](https://www.npmjs.com/package/istanbul-lib-coverage)

  ```shell script
  $ yarn add -D jest jest-junit jest-preset-angular ts-jest @types/jest jest-html-reporter ngx-build-plus istanbul-instrumenter-loader @istanbuljs/nyc-config-typescript source-map-support ts-node @cypress/code-coverage nyc istanbul-lib-coverage wait-on @briebug/cypress-schematic
  ```

- Documentation:

  - [@compodoc/compodoc](https://compodoc.app/)

  ```shell script
  $ yarn add -D @compodoc/compodoc
  ```

- Formatting:

  - [prettier](https://prettier.io/)
  - [tslint-config-prettier](https://www.npmjs.com/package/tslint-config-prettier)
  - [tslint-plugin-prettier](https://www.npmjs.com/package/tslint-plugin-prettier)

  ```shell script
  $ yarn add -D prettier tslint-config-prettier tslint-plugin-prettier
  ```

- Linting:

  - [tslint-angular](https://www.npmjs.com/package/tslint-angular)
  - [stylelint](https://stylelint.io/)
  - [stylelint-config-recommended](https://www.npmjs.com/package/stylelint-config-recommended)
  - [stylelint-junit-formatter](https://www.npmjs.com/package/stylelint-junit-formatter)
  - [stylelint-no-unsupported-browser-features](https://www.npmjs.com/package/stylelint-no-unsupported-browser-features)
  - [stylelint-config-prettier](https://www.npmjs.com/package/stylelint-config-prettier)
  - [stylelint-prettier](https://www.npmjs.com/package/stylelint-prettier)

  ```shell script
  $ yarn add -D tslint-angular stylelint stylelint-config-recommended stylelint-junit-formatter stylelint-no-unsupported-browser-features stylelint-config-prettier stylelint-prettier
  ```

- Electron

  - [electron](https://www.electronjs.org/)
  - [electron-builder](https://www.npmjs.com/package/electron-builder)
  - [spectron](https://www.electronjs.org/spectron)

  ```shell script
  $ yarn add -D electron electron-builder spectron
  ```

### Removed (if project generated without _--minimal=true_ option)

- jasmine-core
- jasmine-spec-reporter
- karma
- karma-chrome-launcher
- karma-coverage-istanbul-reporter
- karma-jasmine
- karma-jasmine-html-reporter
- protractor
- @types/jasmine
- @types/jasminewd2

```shell script
$ yarn remove jasmine-core jasmine-spec-reporter karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter protractor @types/jasmine @types/jasminewd2
```
