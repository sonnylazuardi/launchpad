import babel from 'rollup-plugin-babel';

export default [ 
  { entry: 'node_modules/prettier/index.js',
    dest: 'prettierBundle/prettier.js',
    format: 'iife',
    sourceMap: 'inline',
  }, {
    entry: 'node_modules/prettier/parser-babylon.js',
    dest: 'prettierBundle/prettier.js',
    format: 'iife',
    sourceMap: 'inline'
  }, {
    entry: 'node_modules/prettier/parser-json.js',
    dest: 'prettierBundle/prettier.js',
    format: 'iife',
    sourceMap: 'inline'
  }, {
    entry: 'node_modules/prettier/parser-postcss.js',
    dest: 'prettierBundle/prettier.js',
    format: 'iife',
    sourceMap: 'inline'
  }
]

// might need to install babel dependencies
// run with ./node_modules/.bin/rollup -c

