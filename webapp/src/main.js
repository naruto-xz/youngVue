// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import router from './router/appRouter'
// import app from '../src/app.vue'


// Vue.config.productionTip = false;

/* eslint-disable no-new */
// new Vue({
  // components: { App },
  // template: '<App/>'

  // router,
  // compoments:{app}
  // template:"<app/>"


// }).$mount('body');


//慕课webpack

//导入jquery
import $ from 'jquery'
window.$ = $;

//导入公共工具包
import toolkit from "./web-component/src/commom/toolkit.js"
window.$toolkit = toolkit;
//导入公共辅助函数包
import helper from "./web-component/src/commom/helper.js";
window.$help = helper;

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);  //表示使用router
// import router from './router/routers'

//加载element-ui组件
import ElementUI from "element-ui";   //这是导入element-ui所以组件
import 'element-ui/lib/theme-chalk/index.css' //样式需要单独引入
Vue.use(ElementUI);
//当你只需要导入element-ui中的某一个组件的时候，就用下面这种方式
// import { Input } from "element-ui";
// Vue.use(Input);

import App from './app.vue'


// import '../src/css/test.css'
// import '../src/image/1.png'
//

// import loading from "../src/test/loading.js"
// Vue.use(loading);
// window.aaa =  loading;

import animate from "./module/animate/index.vue"
import css3 from "./module/css3/index.vue"
import components from "./components/index.vue"

var router = new Router({
  routes: [
    {
      path: "/animate",
      component: animate
    },
    {
      path: "/css3",
      component: css3
    },
    {
      path: "/components",
      component: components
    }
  ]
});


new Vue({
  router,
  el: '#app',   //挂载点
  render: (h) => h(App)  //起步文件，路由切换入口
});

/*
render: (h) => h(app)
等价于：
render: function (h) {
  return h(app);
}
而Vue在调用render方法时，会传入一个 createElement函数作为参数，也就是这里的 h 的实参是 createElement 函数
和下面这个是一个意思：目的是渲染这个app实例。
const app=new Vue({
    el:'#app',
    router,
    compoments:{app},
    template:"<app/>"
});
*/


