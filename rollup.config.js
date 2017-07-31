import babel from 'rollup-plugin-babel';

export default {
  entry: 'node_modules/prettier/index.js',
  dest: 'prettier_build/prettier_build.js',
  format: 'iife',
  sourceMap: 'inline',
}

// might need to install babel dependencies
// run with ./node_modules/.bin/rollup -c

