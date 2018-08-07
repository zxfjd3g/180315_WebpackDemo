/*
生产环境的配置
 */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')
const baseConfig = require('./webpack.base.conf')

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = merge(baseConfig, {// 开发环境特有的配置

  // 入口
  entry: {
    // 指定第三方模块包含哪些
    vendor: ["jquery"]
  },

  // 出口
  output: {
    filename: 'static/js/[name].[chunkhash].js',
    publicPath: '/' // 在引用路径的左边加上/
  },

  // 模块加载器
  module: {
    rules: [
      // 加载css
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ // 抽取css
          use: 'css-loader'
        })
      },
      // stylus/styl
      {
        test: /\.(stylus|styl)$/,
        use: ExtractTextPlugin.extract({ // 抽取css
          use: ['css-loader', 'stylus-loader'],
        })
      },
    ]
  },

  plugins: [
    // 清理dist文件夹
    new CleanPlugin(['dist'], {
      root: resolve('')
    }),
    // 单独打包css
    new ExtractTextPlugin({
      filename: 'static/css/[name].[contenthash].css'
    }),

    // 第三方包模块单独打包
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    // 将webpack模板代码单独打包
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),

    // 压缩css
    new OptimizeCssPlugin(),
    // 压缩JS
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    // 根据代码内容生成hash作为模块的id(默认是下标)
    new webpack.HashedModuleIdsPlugin()
  ]
})