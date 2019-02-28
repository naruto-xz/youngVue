<template>
  <div>
    <!--<h5>{{title}}</h5>-->
  </div>
</template>

<script>
    import store from './store.js'
    export default {
      data(){
        return {
          title: 'http'
        }
      },
      methods:{
        operate(){
          // var request = new XMLHttpRequest();
          // request.onreadystatechange = function () {
          //   var DONE = this.DONE || 4;
          //   if (this.readyState === DONE){
          //     alert(this.readyState);
          //   }
          // };
          // request.open('GET', 'somepage.xml', true);  //接收三个参数：方法，地址，是否异步
          // request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          // request.send(null);

          // vue.js中没有$http服务,所有需要引入一个叫vue-resource.js的文件,vue提供了一款轻量的http请求库，vue-resource。
          // vue-resource除了提供http请求外，还提供了inteceptor拦截器功能，在访问前，访问后，做处理。

          // vue-resource语法-使用$http对象
          // 基于全局Vue对象使用http
          // Vue.http.get('/someUrl',[options]).then(successCallback, errorCallback);
          // Vue.http.post('/someUrl',[body],[options]).then(successCallback, errorCallback);
          // 在一个Vue实例内使用$http
          // this.$http.get('/someUrl',[options]).then(sucessCallback, errorCallback);
          // this.$http.post('/someUrl',[body],[options]).then(successCallback, errorCallback);

          // this.$http.get(
          //   '/static/data/test.json'
          // ).then(res=>{
          //   console.log(res);
          // });

          store.getName().then(res=>{
            console.log(res.apple); //苹果
          })

          // Accept: application/json, text/plain,    浏览器能够处理的内容类型
          // Accept-Encoding: gzip, deflate, br   浏览器能够处理的压缩编码
          // Accept-Language: zh-CN,zh;q=0.9,en;q=0.8   浏览器当前设置的语言
          // Connection: keep-alive   浏览器与服务器的连接类型
          // Cookie: themeValue=skinBlue; loginName=admin; tokenId=f56692d9445589189391db23c4f4b9ca   当前页面设置的任何cookie
          // Host: localhost:9999   发送请求的所在域
          // Referer: http://localhost:9999/index.html    发送请求的url
          // tokenId: f56692d9445589189391db23c4f4b9ca

        }
      },
      mounted() {
        this.operate();
      }
    }
</script>

<style scoped>

</style>
