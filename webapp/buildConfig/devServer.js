const path = require('path');

module.exports = {
  contentBase: path.resolve(__dirname,"../dist"), //对外提供的访问内容的路径(contentBase表示的是告诉服务器从哪里提供内容)
  compress: true, //是否启用gzip压缩  压缩后大小明显减小
  port: 8082,
  host: '0.0.0.0', //host建议配置成0.0.0.0这样localhost和内网ip都能访问，方便调试
  overlay: {
    error: true   //编译过程中有什么错误，就呈现出来在网页端
  },
  // hot: true,   //只局部刷新修改组件的部分，而不是整个页面进行刷新 (不用开启)
  inline: true,
  disableHostCheck: true, //绕过热跟新检查

  // 默认情况下，不接受运行在 HTTPS 上，且使用了无效证书的后端服务器。如果你想要接受，修改配置如下：
  // proxy: {
  //   "/api": {
  //     target: "https://other-server.example.com",
  //     secure: false
  //   }
  // }

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
