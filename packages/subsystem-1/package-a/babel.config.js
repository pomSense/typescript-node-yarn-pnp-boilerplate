// IMPORTANT: .babelrc isn't applied to submodules (e.g. node_modules); you'll need babel.config.js for that. https://babeljs.io/docs/en/config-files
module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '16'
        }
      }
    ],
    ['@babel/preset-typescript']
  ]
  const plugins = [
    'babel-plugin-transform-typescript-metadata',

    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    'transform-es2015-modules-commonjs'
  ]

  return {
    presets,
    plugins,
    // silences warning: "[BABEL] Note: The code generator has deoptimised the styling of" during CI
    env: {
      development: {
        compact: false
      }
    }
  }
}
