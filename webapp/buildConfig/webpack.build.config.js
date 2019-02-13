const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");   //path就是node.js内置的package，用来处理路径的。
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const config = {
  /**
   * 模式 提供 mode 配置选项，告知 webpack 使用相应模式的内置优化
   *
   * 1.会将 process.env.NODE_ENV 的值设为 development。启用 NamedChunksPlugin 和 NamedModulesPlugin。
   * 2.会将 process.env.NODE_ENV 的值设为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin,
   OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 UglifyJsPlugin.
   * 3.none 不选用任何默认优化选项
   */
  mode: "production",

  /**
   * 入口: 告诉webpack从哪里开始寻找依赖，并且编译
   */
  // 下面是简写， main是之后打包生成的js名称
  // entry: {
  //   main: path.resolve(__dirname, "../src/main.js")
  // }
  //配置多页面应用
  // module.exports = {
  //   entry: {
  //     pageOne: './src/pageOne/index.js',
  //     pageTwo: './src/pageTwo/index.js',
  //     pageThree: './src/pageThree/index.js'
  //   }
  // };
  entry: path.resolve(__dirname, "../src/main.js"),

  /**
   * 出口：用来配置编译后的文件储存位置和文件名
   *
   * 1.path.resolve()方法可以将路径或者路径片段解析成绝对路径 (相当于在shell命令下，从左到右运行一遍cd path命令，最终获取的绝对路径/文件名)
   * 2."__dirname"是node.js中的一个全局变量，（__dirname代表的是当前文件的绝对路径）它指向当前执行脚本所在的目录(即webpack.dev.config所在目录)。
   */
  output: {
    // filename: "bundle.js",
    filename: "[name]-[hash].js",  //优化后
    path: path.resolve(__dirname,"../dist")   //打包后的文件存放的地方
  },

  /**
   * loader 用于对模块的源代码进行转换。  (loader 可以使你在 import 或"加载"模块时预处理文件。)
   *
   * 1.test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
   * 2.use  属性，表示进行转换时，应该使用哪个 loader。
   */
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
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
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
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
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
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

  /**
   * 插件项 (插件的范围包括：打包优化、资源管理和注入环境变量,插件目的在于解决 loader 无法实现的其他事。）
   *
   */

  plugins:[
    /**
     * HtmlWebpackPlugin插件详解： （简单创建 HTML 文件，用于服务器访问）
     *
     * 例如：我们要为输出文件添加哈希值标记，避免老的不变的文件重新加载，避免新修改的文件受缓存影响。
     *
     * 在前后两次在终端输入webpack打包时，即使component中的所有文件都没有变化，资源是要重新加载一遍的。
     * 同理，在生产中，每次需要在代码中更新内容时，服务器都必须重新部署，然后再由所有客户端重新下载。
     * 而通过网络获取资源可能会很慢，那么我们怎么才能避免这个问题呢———给output中的bundle文件提供hash值标记
     *
     * 每次构建输出文件时，如果代码发生变化，输出的文件将生成不同的hash值，这时将重新加载资源，但如果代码无变化，输出文件hash值也不变化，系统就会默认使用原来缓存的输出文件。
     *
     */
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html"),  //是个大坑，必须指定打包时的index模板，否则vue找不到要挂载的元素.（为新生成的index.html指定模版）
      hash: true, // 会在打包好的bundle.js后面加上hash串,
      // minify:{ //压缩HTML文件
      //   removeComments:true,    //移除HTML中的注释
      //   collapseWhitespace:true    //删除空白符与换行符
      // }
    }),

    /**
     * webpack4得使用mini-css-extract-plugin这个插件来单独打包css。
     *
     */
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),

    new VueLoaderPlugin()
    // new webpack.HotModuleReplacementPlugin()
  ],

  //devServer是webpack提供的在开发中可以使用的一系列功能（有的是在js里配置，有的是在package.json里面的命令行工具cli配置)
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
};
module.exports = config;  //这里的module.exports=config相当于export default config 。由于目前还没有安装支持ES6的编译插件，因此不能直接使用 ES6的语法，否则会报错。
