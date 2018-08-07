/*
webpack开发环境配置
 */
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const { VueLoaderPlugin } = require('vue-loader');

module.exports = merge(baseConfig, {

  output: {
    filename: '[name].js',  // name是入口的名称
  },

  module: {
    rules: [
      // css
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      // stylus/styl
      {
        test: /\.(stylus|styl)$/,
        use: ['vue-style-loader', 'css-loader', 'stylus-loader'],
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ['vue-style-loader', 'css-loader'],
            styl: ['vue-style-loader', 'css-loader', "stylus-loader"],
          },
          // 声明在解析到指定标签的特定属性时转换为require引入相关模块
          transformToRequire: {
            video: 'src',
            source: 'src',
            img: 'src',
            image: 'xlink:href'
          }
        }
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
  ],

  // 开启开发环境下的: sourceMap调试
  devtool: 'cheap-module-eval-source-map',
})