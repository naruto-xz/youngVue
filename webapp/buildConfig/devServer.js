const path = require('path');

module.exports = {
  contentBase: path.resolve(__dirname,"../build"), //对外提供的访问内容的路径(contentBase表示的是告诉服务器从哪里提供内容)  构建目标文件件，放置静态资源
  compress: true, //是否启用gzip压缩  压缩后大小明显减小
  port: 8084,
  host: '0.0.0.0', //host建议配置成0.0.0.0这样localhost和内网ip都能访问，方便调试
  overlay: {
    error: true   //编译过程中有什么错误，就呈现出来在网页端
  },
  // hot: true,   //只局部刷新修改组件的部分，而不是整个页面进行刷新 (不用开启)
  inline: true,
  disableHostCheck: true, //绕过热跟新检查

  // 默认情况下，不接受运行在 HTTPS 上，且使用了无效证书的后端服务器。如果你想要接受，修改配置如下：
  proxy: {
    "/sugrec": {
      target: "https://www.baidu.com",
      changeOrigin: true,
      secure: false //如果是https接口，需要配置这个参数
    }
  }

    // proxy: {
    //     '/gateway/*': {
    //         target: 'http://192.168.60.203/',
    //         // pathRewrite: {
    //         //     '^/service': '/'
    //         // },
    //         secure: false,
    //         changeOrigin: true
    //     },
    //     '/vdtimg/*': {
    //         target: 'http://192.168.60.205/',
    //         secure: false,
    //         changeOrigin: true
    //     },
    // }
};
