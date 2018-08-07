/*
开发环境与生产环境的公共基础配置
 */
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

/*
得到指定目录的绝对路径
 */
function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}


module.exports = {
  // 1. 入口(可以指定多个入口js)
  entry: {
    app: './src/main.js',  // 名称: 入口js路径
    // other: './src/other.js'
  },
  // 1. 出口
  output: {
    path: resolve('dist')  // 所有打包文件的基础路径
  },
  // 1. 模块加载器
  module: {
    rules: [
      // js: es6-->es5
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [resolve('src')]
      },
      // img
      {
        test: /\.(jpg|png|svg|gif)$/,
        loader: 'url-loader',  // 包装扩展file-loader
        options: {
          limit: 1024*40, // 进行图片base64编码处理的文件最大值
          name: 'static/img/[name].[hash:8].[ext]' // 生成的文件路径和文件名
        }
      }
    ]
  },
  // 1. 插件
  plugins: [
    new HtmlPlugin({
      template: 'index.html',
      filename: 'index.html',
      // inject: true
    })
  ]
}