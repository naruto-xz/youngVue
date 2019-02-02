import route from "../module/route/index.vue" //带子路由
import module from "../module/module.js" //子路由下的模块配置
import vue from "../module/vue/index.vue"
import webpack from "../module/webpack/index.vue"
import es6 from "../module/es6/index.vue"
import es5 from "../module/es5/index.vue"
import css3 from "../module/css3/index.vue"
import components from "../components/index.vue"

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
    redirect: "/vue"
  },
  {
    path: "/vue",
    component: vue
  },
  {
    path: "/webpack",
    component: webpack
  },
  {
    path: "/es6",
    component: es6
  },
  {
    path: "/es5",
    component: es5
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
export default routes
