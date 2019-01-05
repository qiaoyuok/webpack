const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  entry:path.join(__dirname,'./src/main.js'),
  output:{
    path:path.join(__dirname,'./mui/'),
    filename:'./bundle.js'
  },

  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ],

  module:{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
      {test:/\.vue/,use:"vue-loader"},
    ]
  },

  resolve:{
    alias:{
      "vue$":"vue/mui/vue.js"
    }
  },

  mode:'development'
}
