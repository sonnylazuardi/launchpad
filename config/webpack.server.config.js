/* eslint-disable */

const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, "../server/index.js"),
  output: {
    path: path.join(__dirname + "/../build"),
    filename: "webtask.js",
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          "presets": [
            ["env", {
              "targets": {
                "node": 4
              },
            }]
          ],
          "plugins": [
            "syntax-flow",
            "transform-runtime",
            "transform-flow-strip-types",
            "transform-async-generator-functions",
            "transform-object-rest-spread",
          ],
        }
      },
    ]
  },
}
