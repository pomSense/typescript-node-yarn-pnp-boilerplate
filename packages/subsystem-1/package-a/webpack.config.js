// webpack.config.js
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const slsw = require('serverless-webpack')
const nodeExternals = require('webpack-node-externals')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const isLocal = slsw.lib.webpack.isLocal

module.exports = {
  mode: isLocal ? 'development' : 'production',
  entry: slsw.lib.entries,
  externals: [{ 'aws-sdk': 'commonjs aws-sdk' }],
  /** More on devtool source map options: https://webpack.js.org/configuration/devtool/ */
  devtool: isLocal ? 'eval-cheap-module-source-map' : false,
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [new TsconfigPathsPlugin()]
  },

  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
  target: 'node',
  stats: 'errors-only', // This surpresses warnings, such as, i.e. WARNING The requested module ... contains conflicting star exports for the name '__esModule' with the previous requested module ..
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,

        use: {
          // IMPORTANT: if you only put babel-loader here with NO options, then babel-loader will use .babelrc.
          // If you add options here, babel-loader will use configuration here and ignore .babelrc or babel.config.json
          loader: require.resolve('babel-loader'),
          options: {
            cacheCompression: false,
            cacheDirectory: path.resolve(__dirname, '.webpackCache')
          }
        }
      }
    ]
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
  optimization: isLocal // Don't need minify for local which is very slow when running local server and making changes
    ? {}
    : {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              ecma: undefined,
              parse: {},
              compress: {},
              mangle: true, // Note `mangle.properties` is `false` by default.
              module: false,
              // Deprecated
              output: null,
              format: null,
              toplevel: false,
              nameCache: null,
              ie8: false,
              keep_classnames: true,
              keep_fnames: false,
              safari10: false
            }
          })
        ]
      }
}
