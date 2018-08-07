/*
生产环境的配置
 */
const baseConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')

module.exports = merge(baseConfig, {// 开发环境特有的配置

})