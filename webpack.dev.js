const merge = require('webpack-merge')
const { scssLoader, scssModuleLoader } = require('./webpack.utils')
const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval',
  module: {
    rules: [scssLoader(false), scssModuleLoader(false)],
  },
})
