//导入jquery
import $ from 'jquery'
window.$ = $;

//导入公共工具包
import toolkit from "./commom/toolkit.js"
window.$toolkit = toolkit;

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

//注册一个全局组件
import globalComponent from "./module/vue/component/globalComponent.vue"
Vue.component("globalComponent",globalComponent);

//注册一个全局过滤器
Vue.filter("formateDate",(value)=>{
  var date = new Date(value);
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getMinutes()}`;
});

// import loading from "../src/test/loading.js"
// Vue.use(loading);
// window.aaa =  loading;

import routes from "./router/routeConfig.js"

var router = new Router({
  routes: routes
});
//只要路由跳转变化就会先进这个路由守卫里面
router.beforeEach((to,from,next)=>{
  console.log("1.先走全局路由守卫");
  next();
});

router.afterEach((to, from) => {
  //你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身
  console.log("最最后走全局后置路由守卫")
});

// router.beforeResolve((to,from,next)=>{
//   console.log("1.先走全局路由守卫");
//   next();
// });


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
    template:"<app/>"   //不可以用，因为这个要独立构建才可用
});
*/


