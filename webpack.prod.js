const merge = require('webpack-merge')
const CSSExtractor = require('mini-css-extract-plugin')
const { scssLoader, scssModuleLoader } = require('./webpack.utils')
const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [scssLoader(true), scssModuleLoader(true)],
  },
  plugins: [
    new CSSExtractor({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
})
