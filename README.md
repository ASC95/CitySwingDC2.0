# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Personal notes
- Indenting a README.md on Github requries two spaces
- The angular cli is a globally installed npm package on my machine.
- $ ng new {name} $ scaffolds a new Angular project in a directory called {name} that contains:  
  - folders: e2e, node_modules, src
  - files: .angular-cli.json, karma.conf.js, package-lock.json, package.json, protractor.conf.js, README.md, tsconfig.json, and tslint.json
- The src folder initially contains:
  - folders: app, assets, environments
  - files: favicon.ico, index.html, main.ts, polyfill.ts, styles.css, test.ts, tsconfig.app.json, tsconfig.spec.json, typings.d.ts
- $ ng serve $ builds the app, starts the dev server, and watches files
- $ ng generate component {name} $ creates a new component folder in src/app called {name}. It also adds an import statement to app.module.ts for the component

Is my website an SPA? I don't know.
TODO: provide basic styling to the navbar