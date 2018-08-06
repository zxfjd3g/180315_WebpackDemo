const path = require('path') // 能读取文件路径相关信息的包
// __dirname: node内置的一个变量, 值为当前文件所在目录的绝对路径(当前是demo2)
const HtmlPlugin = require('html-webpack-plugin')  // 向外暴露构造函数


/*
得到指定目录(必须是项目文件夹下目录)的绝对路径
 */
function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  //1. 入口
  entry: './src/main.js', // 入口js的相对路径(执行命令所在的目录)
  // 2. 出口
  output: {
    path: resolve('dist'), // 所有打包生成的文件(js/css/img/html...)的基础路径, 必须是绝对路径
    filename: 'bundle.js'  // 文件名(可以带路径)
  },
  // 3. 模块加载器
  module: {
    rules: [
      // 将es6编译为es5
      {
        test: /\.js$/,   // 用来匹配处理模块文件的正则
        loader: 'babel-loader', // 加载器包名
        include: [resolve('src')] // 只针对哪些文件夹下的模块进行处理
      },
      // 加载css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']  // style(css('xxx.css'))
      },

      // 加载less
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']  // style(css(less('xxx.less')))
      },
      // 加载img
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: 'file-loader'
      },
    ]
  },

  // 4. 插件
  plugins: [ // 插件的实例对象
      new HtmlPlugin({
        template: 'index.html', // 在执行命令所在目录查找
        filename: 'index.html', // 在output.path指定的目录下
        inject: true // 向页面中自动引入打包生成的js/css
      })
  ]
}