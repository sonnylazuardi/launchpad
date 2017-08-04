var npm = require('npm-programmatic');
var rollup = require('rollup');
var fs = require('fs');

npm
  .install(['CompuIves/custom-prettier-codesandbox'], {
    // cwd to seperate directory should be working but it isn't???
    cwd: './node_modules',
    save: false,
  })
  .then(function() {
    console.log('Success!!');
    rollup
      .rollup({
        entry: 'node_modules/prettier/index.js',
      })
      .then(function(bundle) {
        bundle.write({
          dest: 'prettierBundle/prettier.js',
          format: 'iife',
          sourceMap: 'inline'

        });
      })
      .then(function() {
        rollup
          .rollup({
            entry: 'node_modules/prettier/parser-babylon.js',
          })
          .then(function(bundle) {
            bundle.write({
              dest: 'prettierBundle/prettier.js',
              format: 'iife',
              sourceMap: 'inline'
            });
          });
      })
      .then(function() {
        rollup
          .rollup({
            entry: 'node_modules/prettier/parser-json.js',
          })
          .then(function(bundle) {
            bundle.write({
              dest: 'prettierBundle/prettier.js',
              format: 'iife',
              sourceMap: 'inline'
            });
          });
      })
      .then(function() {
        rollup
          .rollup({
            entry: 'node_modules/prettier/parser-postcss.js',
          })
          .then(function(bundle) {
            bundle.write({
              dest: 'prettierBundle/prettier.js',
              format: 'iife',
              sourceMap: 'inline'
            });
          });
      });
  })/*.then(function() {
    npm.uninstall(['prettier'], {
      cwd: './node_modules',
    });
  })
  */
