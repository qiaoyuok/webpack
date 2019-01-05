
import Vue from 'vue'

import tem from './tem.vue'


import login from './login.vue'
import register from './register.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)    //必须使用 Vue.use()函数 否则报 没有定义 router-link 和 router-view 组件的错误

var router = new VueRouter({
  routes:[
    {path:'/login',component:login},
    {path:'/register',component:register},
  ]
})

var vm = new Vue({
  el:"#app",
  data:{
    msg:'娃哈哈'
  },
  // components:{
  //   tem
  // },
  router
})
