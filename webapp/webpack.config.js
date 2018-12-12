// /*const path = require('path');
// module.exports = {
//   entry: '../webapp/src/main.js',
//   output: {
//     filename: 'bundle.js',
//     path: __dirname + '/dist'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.vue$/,
//         loader: 'vue-loader'
//       },
//       {
//         test: /\.css$/,
//         use: [
//           "vue-style-loader",
//           "css-loader"
//         ]
//       },
//       {
//         test: /\.(png|jpe?g|gif|svg)$/,
//         use: [
//           {
//             //url-loader的作用是可以把图片转换成base64代码，直接写在js文件里面，而不用生成一个新的文件，尤其是几kb小的图片，可以减少http请求
//             //url-loader实际上是把file-loader封装了一下，判断图片文件的大小如果小于10000字节，就把图片以base64代码的形式写到js文件中去
//             //当然，如果图片较大，编码会消耗性能。因此url-loader提供了一个limit参数，小于limit字节的文件会被转为DataURl，大于limit的还会使用file-loader进行copy。
//             loader: 'url-loader',
//             options: {
//               limit: 10000,
//               name: '[name].[hash:7].[ext]'
//             }
//           }
//         ],
//       },
//     ]
//   }
// };*/
//
//
// //webpack-dev-server生成环境
// const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const isDev = process.env.NODE_ENV == 'development'     //我们在package.json中设置的环境变量cross-env NODE_ENV=development是存在在process.env中的
// const config = {
//   entry: '../webapp/src/main.js',
//   output: {
//     filename: 'bundle.js',
//     path: __dirname + '/dist'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.vue$/,
//         loader: 'vue-loader'
//       },
//       {
//         test: /\.css$/,
//         use: ["vue-style-loader", "css-loader"]
//       },
//       {
//         test: /\.scss$/,
//         use: ["vue-style-loader", "css-loader", "postcss-loader", "sass-loader"]
//       },
//       {
//         test: /\.less$/,
//         use: ["vue-style-loader", "css-loader", "postcss-loader", "less-loader"]
//       },
//       {
//         test: /\.(gif|jpg|jpeg|png|woff|svg|eot|ttf)\??.*$/,
//         use: [
//           {
//             //url-loader的作用是可以把图片转换成base64代码，直接写在js文件里面，而不用生成一个新的文件，尤其是几kb小的图片，可以减少http请求
//             //url-loader实际上是把file-loader封装了一下，判断图片文件的大小如果小于10000字节，就把图片以base64代码的形式写到js文件中去
//             //当然，如果图片较大，编码会消耗性能。因此url-loader提供了一个limit参数，小于limit字节的文件会被转为DataURl，大于limit的还会使用file-loader进行copy。
//             loader: 'url-loader',
//             options: {
//               limit: 10000,
//               name: '[name].[hash:7].[ext]'
//             }
//           }
//         ],
//       },
//     ]
//   },
//   resolve: {
//     alias: {
//       vue: 'vue/dist/vue.js'
//     }
//   },
//   plugins:[
//     new webpack.DefinePlugin({
//       'process.dev':{
//         NODE_DEV: isDev ? '"development"' : '"production"'
//         //1.在这里写了，别的地方js是可以引用到的 2.开发环境和生产环境要区分打包,webpack会根据这个命令进行判断以哪种方式打包
//       }
//     }),
//     new HtmlWebpackPlugin({
//       template:'index.html'   //是个大坑，必须指定打包时的index模板，否则vue找不到要挂载的元素.
//     })
//   ]
// };
//
// if(isDev){
//   config.devtool = '#cheap-module-eval-source-map',   //进行代码的映射，在浏览器中可以正常调试
//   config.devServer = {
//     port: 8080,
//     host: '0.0.0.0', //host建议配置成0.0.0.0这样localhost和内网ip都能访问，方便调试
//     overlay: {
//       error: true   //编译过程中有什么错误，就呈现出来在网页端
//     },
//     hot: true,   //只局部刷新修改组件的部分，而不是整个页面进行刷新
//     // open: true,  //启动dev的时候会自动打开网页
//     // historyFallback: {    //把webpack不认识的地址映射到index.html文件上
//     //
//     // }
//   };
//   // config.plugins.push(
//   //   new webpack.HotModuleReplacementPlugin(),  //启用模块热替换(Enable Hot Module Replacement - HMR)
//   //   new webpack.NoEmitOnErrorsPlugin()  //在输出阶段时，遇到编译错误跳过
//   // )
// }
//
// module.exports = config;
//
