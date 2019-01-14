const apple = ()=>import("./route/apple.vue");
// import apple from "../route/apple.vue"
import orange from "./route/orange.vue"
import banana from "./route/banana.vue"
import pass from "./route/pass.vue"

//把组件按组分块打包 //相同的注释，会被打包到同一个js文件中去
// const apple = ()=>import(/* webpackChunkName: "route" */"../route/apple.vue");
// const orange = ()=>import(/* webpackChunkName: "route" */"../route/orange.vue");
// const banana = ()=>import(/* webpackChunkName: "route" */"../route/banana.vue");
// const pass = ()=>import("../route/pass.vue");

// module.exports = {
//   apple: apple,
//   orange:orange
// };

export default{
  apple: apple,
  orange:orange,
  banana:banana,
  pass:pass
}
