// import Vue from 'vue'
// 在webpack中使用  import Vue from 'vue' 导入的Vue 是阉割版的

// 第一种导入方式
// import Vue from '../node_modules/vue/mui/vue'

import Vue from 'vue'   //并在webpack.config.js中配置resolve
// resolve:{
//   alias:{
//     "vue$":"vue/mui/vue.js"  //设置导入vue的报的路径
//   }
// },

import login from './login.vue'

// 默认webpack无法打包，vue后缀的文件，需要安装相应的 loader
// npm i vue-loader vue-template-compiler -D
// 在webpack.commfig.js中配置 匹配规则
// {test:/\.vue$/,use:'vue-loader'}

var vm = new Vue({
  el:'#app',
  data:{
    msg:'你好啊'
  },
  render:function (crementElements) {
    return crementElements(login)
  }
})
