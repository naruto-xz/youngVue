const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");   //path就是node.js内置的package，用来处理路径的。
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const config = {
	mode: "development",
	entry: path.resolve(__dirname, "../src/main.js"),
  output: {
    // filename: "bundle.js",
    filename: "[name]-[hash].js",  //优化后
    path: path.resolve(__dirname,"../dist"),   //打包后的文件存放的地方
    libraryTarget: 'umd'  //也就是将打包的文件，生成为umd规范，适用于各种环境
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname,"../node_modules")  //排除，不需要编译的目录，提高编译速度
      },
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: loader => [require("autoprefixer")()]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: loader => [require("autoprefixer")()]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "less-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: loader => [require("autoprefixer")()]
            }
          }
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png|woff|svg|eot|ttf)\??.*$/,
        use: [
          {
            //url-loader的作用是可以把图片转换成base64代码，直接写在js文件里面，而不用生成一个新的文件，尤其是几kb小的图片，可以减少http请求
            //url-loader实际上是把file-loader封装了一下，判断图片文件的大小如果小于10000字节，就把图片以base64代码的形式写到js文件中去
            //当然，如果图片较大，编码会消耗性能。因此url-loader提供了一个limit参数，小于limit字节的文件会被转为DataURl，大于limit的还会使用file-loader进行copy。
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name].[hash:7].[ext]'
            }
          }
        ],
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html"),  //是个大坑，必须指定打包时的index模板，否则vue找不到要挂载的元素.（为新生成的index.html指定模版）
      hash: true, // 会在打包好的bundle.js后面加上hash串,
      // minify:{ //压缩HTML文件
      //   removeComments:true,    //移除HTML中的注释
      //   collapseWhitespace:true    //删除空白符与换行符
      // }
    }),
    new VueLoaderPlugin()
  ],
	devServer: require("./devServer"),

  //resolve（解析）,项能设置模块如何被解析。
  resolve:{
    // 告诉 webpack 解析模块时应该搜索的目录。默认是 modules: ['node_modules']，如果你想要添加一个目录到模块搜索目录，此目录优先于node_modules搜索：path.resolve(__dirname, "../node_modules")
    modules: [path.resolve(__dirname, "../node_modules")],
    //alias 创建 import 或 require 的别名，来确保模块引入变得更简单。 （也可以在给定对象的键后的末尾添加 $，以表示精准匹配：）
    alias: {
      // vue$: "vue/dist/vue.js",  //使用完整版，默认是不含编译器的运行时版本
      jquery: "jquery/dist/jquery.min.js",
      component: path.resolve(__dirname, '../src/module/vue/component'),
      // xyz$: path.resolve(__dirname, 'path/to/file.js') //精确匹配，所以path/to/file.js 被解析和导入
    },
    //extensions用于配置程序可以自行补全哪些文件后缀,能够使用户在引入模块时不带扩展。 (使用此选项，会覆盖默认数组，这就意味着webpack将不再尝试使用默认扩展来解析模块)
    extensions: [".js", ".vue", ".coffee", ".html", ".css", ".scss", ".less"] ,
  },
  performance: {
    hints: "warning"
  }
};
module.exports = config;  //这里的module.exports=config相当于export default config 。由于目前还没有安装支持ES6的编译插件，因此不能直接使用 ES6的语法，否则会报错。
