# Introduction
[![Basic Mean ADM template](https://nhutcorp.com/static/images/product/upload/thumb_mean2banner2_1504855702031.png)](https://nhutcorp.com/product/mean-2-fullstack-solution-with-angular-4-and-typescript-59b0f213512c3a2f48d5ad34)

Responsive admin template using pure [Angular 4](https://angular.io/) and [Material Design](https://material.angular.io/) for maximum speed possible on the Web Platform purpose.


# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7 but in order to be able to take advantage of the complete functionality we **strongly recommend node >=v6.5.0 and npm >=3.10.3**.


In order to start the seed use:


```bash
$ git clone --depth 1 https://github.com/nhutcorp/angular-template-adm.git
$ cd angular-seed

# install the project's dependencies
$ npm install
# fast install (via Yarn, https://yarnpkg.com)
$ yarn install  # or yarn

# watches your files and uses livereload by default
$ npm start

# dev build
$ npm run build.dev
# prod build, will output the production application in `dist/prod`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build.prod

```
_Does not rely on any global dependencies._

# How to start with AoT compilation

**Note** that AoT compilation requires **node v6.5.0 or higher** and **npm 3.10.3 or higher**.

In order to start the seed with AoT use:

```bash
# prod build with AoT compilation, will output the production application in `dist/prod`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build.prod.aot
```

# Tree-shaking with Rollup

This application provides full support for tree-shaking your production builds with Rollup, which can drastically reduce the size of your application. This is the highest level of optimization currently available.

To run this optimized production build, use:

```bash
# prod build with AoT compilation and Rollup tree-shaking, will output the production application in `dist/prod`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build.prod.rollup.aot
```

Your project will be compiled ahead of time (AOT), and then the resulting bundle will be tree-shaken and minified. During the tree-shaking process Rollup statically analyses your code, and your dependencies, and includes the bare minimum in your bundle.

**Notes**
- Beware of non-static/side-effectful imports. These cannot be properly optimized. For this reason, even though tree-shaking is taking place the developer still needs to be careful not to include non-static imports that are unnecessary, as those referenced imports will always end up in final bundle. Special attention should be given to RxJs, which makes heavy use of non-static/side-effectful imports: make sure you only add the operators you use, as any added operators will be included in your final production bundle.
- UMD modules result in code that cannot be properly optimized. For best results, prefer ES6 modules whenever possible. This includes third-party dependencies: if one is published in both UMD and ES6 modules, go with the ES6 modules version.
- During a production build, CommonJs modules will be automatically converted to ES6 modules. This means you can use them and/or require dependencies that use them without any issues.

# Internationalization

Put `i18n` attribute to your html tag to mark it for translation, more information here: https://angular.io/docs/ts/latest/cookbook/i18n.html

## Create a translation source file

```bash
# Your translation file will be generated here `dist/locale`
$ npm run i18n
```

## Production build with your language

```bash
# Build prod app with the language file `dist/locale/messages.en.xlf`
$ npm run build.prod.rollup.aot -- --lang en
```

# Configuration

Default application server configuration

```js
var PORT             = 5555;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
$ npm start -- --port 8080 --base /my-app/
```

# How to update?
```
git remote add upstream https://github.com/nhutcorp/angular-template-adm
git pull upstream master
```

# Change Log

You can follow the [Angular change log here](https://github.com/angular/angular/blob/master/CHANGELOG.md).

# License

MIT
