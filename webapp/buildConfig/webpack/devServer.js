const path = require('path');

module.exports = {
  // contentBase: 'dist',
  port: 8080,
  host: '0.0.0.0', //host建议配置成0.0.0.0这样localhost和内网ip都能访问，方便调试
  overlay: {
    error: true   //编译过程中有什么错误，就呈现出来在网页端
  }
  // hot: true,   //只局部刷新修改组件的部分，而不是整个页面进行刷新
  // open: true,  //启动dev的时候会自动打开网页
  // historyFallback: {    //把webpack不认识的地址映射到index.html文件上
  //
  // }


    // contentBase: 'build',
    // hot: true,
    // inline: true,
    // host: '0.0.0.0',
    // port: 3000,
    // disableHostCheck: true,
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
    //     '/tree/*': {
    //         target: 'http://localhost:8080/',
    //         secure: false,
    //         changeOrigin: true
    //     },
    //     // '/test-upload/*': {
    //     //     target: 'http://192.168.0.114:9120/',
    //     //     secure: false,
    //     //     changeOrigin: true,
    //     //     pathRewrite: {
    //     //         '^/test-upload': '/'
    //     //     }
    //     // }
    // }
};
