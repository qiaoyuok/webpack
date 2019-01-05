const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

// 这是一个JS的配置文件，通过node中的模块操作，向外暴漏了一个对象
module.exports = {
  entry: path.join(__dirname,'./src/main.js'), //入口，表示要使用webpack打包的那个文件
  output:{  //输出文件相关配置
    path:path.join(__dirname,'./mui') , // 指定打包好的文件 输出到哪个目录
    filename:'bundle.js'  //指定输出的文件
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template:path.join(__dirname,'./src/index.html'),
      filename:'index.html'
    })
  ],
  module:{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.less/,use:['style-loader','css-loader','less-loader']},
      {test:/\.scss/,use:['style-loader','css-loader','sass-loader']},
      {test:/\.(jpg|png|gif|bmp)$/,use:['url-loader?limit=191205&name=[hash:8]-[name].[ext]']},
      //图片URL匹配 ，当limit参数的值大于图片的字节数时 图片地址是base_64的，当等于时 显示的时一个真实的URL地址，
      // name参数可以使得图片显示真实得名字，和后缀
      // hash可以指定图片的名字前加上 hash值
      {test:/\.(ttf|eot|svg|woff|woff2)/,use:['url-loader']},
      {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
    ]
  },
  mode:'development'
}
