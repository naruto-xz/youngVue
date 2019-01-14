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


import route from "./module/route/index.vue"
import module from "./module/router/module.js"
import es6 from "./module/es6/index.vue"
import ecmaScript from "./module/ecmaScript/index.vue"
import animate from "./module/animate/index.vue"
import css3 from "./module/css3/index.vue"
import components from "./components/index.vue"


var routes = [
  {
    name: "route",
    // path: "/route/:id",
    path: "/route",
    component: route,
    children: [
      {
        name: "apple",
        path: "apple",
        component: module.apple,
        beforeEnter(to,from,next){  //进入该路由之前，先进路由独享守卫
          console.log("2.再走局部路由独享守卫");
          next();
        }
      },
      {
        name: "orange",
        path: "orange",
        alias: "o",
        component: module.orange
      },
      {
        name: "banana",
        path: "banana/:id",
        component: module.banana,
        meta: {record:"元信息"} //元信息
      },
      {
        name: 'pass',
        path: 'pass/:id',
        component: module.pass,
        props: true
      }
    ]
  },
  {
    path: "/",
    redirect: "/route"
  },
  {
    path: "/es6",
    component: es6
  },
  {
    path: "/ecmaScript",
    component: ecmaScript
  },
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
];

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
    template:"<app/>"
});
*/


