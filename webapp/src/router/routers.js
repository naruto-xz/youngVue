import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../page/hello/HelloWorld.vue'
// import risk from '../page/risk/risk.vue'
import dataCenter from '../page/dataCloud/dataCenter.vue'
import todoIndex from '../page/toDoList/index.vue'


Vue.use(Router);  //表示使用router

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // {
    //   path: '/risk',
    //   name: 'risk',
    //   component: risk
    // }
    {
      path: '/dataCenter',
      name: 'dataCenter',
      component: dataCenter
    },
    {
      path: '/todo',
      name: 'todo',
      component: todoIndex
    }
    // {
    //   path: '/xui-component',
    //   name: 'xui-component',
    //   component: ''
    // }
  ]
})
