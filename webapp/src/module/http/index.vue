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
          // this.$http.get('get.php',{params : {a:1,b:2}}).then(res=>{
          //   console.log('success');
          // });
          // this.$http.post('/post.php',{a:1,b:2}).then(res=>{
          //   console.log('success');
          // });

          // this.$http.get(
          //   '/static/data/test.json'
          // ).then(res=>{
          //   console.log(res);
          // });

          // this.axios.get('/static/data/test.json', {params: {a:1,b:2}}).then(res => {
          //   console.log(res.data.apple);  //苹果
          // });
          // this.axios.post('/static/data/test.json', {a:1,b:2}).then(res => {
          //   console.log(res.data.apple);  //苹果
          // });
          //封装完成后的请求
          // store.getName().then(res=>{
          //   console.log(res.apple); //苹果
          // })

        }
      },
      mounted() {
        this.operate();
      }
    }
</script>

<style scoped>

</style>
