import { join } from 'path';

import { SeedConfig } from './seed.config';
import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    this.ENABLE_SCSS = true;
    
    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      { src: 'hammerjs/hammer.min.js', inject: 'libs' },
      { src: 'web-animations-js/web-animations.min.js', inject: 'libs' },
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR,
      //'node_modules/moment/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS,
      //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
    ];

    let additionalPackages: ExtendPackages[] = [
      {
        name: '@angular/material',
        path: 'node_modules/@angular/material/bundles/material.umd.js',
        packageMeta: {
          defaultExtension: 'js'
        }
      },
      {
        name: '@angular/cdk',
        path: 'node_modules/@angular/cdk/bundles/cdk.umd.js'
      },
      {
        name: '@angular/cdk/a11y',
        path: 'node_modules/@angular/cdk/bundles/cdk-a11y.umd.js'
      },
      {
        name: '@angular/cdk/bidi',
        path: 'node_modules/@angular/cdk/bundles/cdk-bidi.umd.js'
      },
      {
        name: '@angular/cdk/coercion',
        path: 'node_modules/@angular/cdk/bundles/cdk-coercion.umd.js'
      },
      {
        name: '@angular/cdk/collections',
        path: 'node_modules/@angular/cdk/bundles/cdk-collections.umd.js'
      },
      {
        name: '@angular/cdk/keycodes',
        path: 'node_modules/@angular/cdk/bundles/cdk-keycodes.umd.js'
      },
      {
        name: '@angular/cdk/observers',
        path: 'node_modules/@angular/cdk/bundles/cdk-observers.umd.js'
      },
      {
        name: '@angular/cdk/overlay',
        path: 'node_modules/@angular/cdk/bundles/cdk-overlay.umd.js'
      },
      {
        name: '@angular/cdk/platform',
        path: 'node_modules/@angular/cdk/bundles/cdk-platform.umd.js'
      },
      {
        name: '@angular/cdk/portal',
        path: 'node_modules/@angular/cdk/bundles/cdk-portal.umd.js'
      },
      {
        name: '@angular/cdk/rxjs',
        path: 'node_modules/@angular/cdk/bundles/cdk-rxjs.umd.js'
      },
      {
        name: '@angular/cdk/scrolling',
        path: 'node_modules/@angular/cdk/bundles/cdk-scrolling.umd.js'
      },
      {
        name: '@angular/cdk/table',
        path: 'node_modules/@angular/cdk/bundles/cdk-table.umd.js'
      }
    ];

    this.addPackagesBundles(additionalPackages);
    
    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')('/api', { ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}
