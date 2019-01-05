const path = require('path')

// 这是一个JS的配置文件，通过node中的模块操作，向外暴漏了一个对象
module.exports = {
  entry: path.join(__dirname, './src/main.js'), //入口，表示要使用webpack打包的那个文件
  output: {  //输出文件相关配置
    path: path.join(__dirname, './mui'), // 指定打包好的文件 输出到哪个目录
    filename: 'bundle.js'  //指定输出的文件
  },
  module: {
    rules: [
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
      {test: /\.vue$/, use: 'vue-loader'},
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/mui/vue.js'  //设置导入vue的报的路径
    }
  },
  mode: 'development'
}
