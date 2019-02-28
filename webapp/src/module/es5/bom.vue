<template>
  <div>
    <button @click="operate">打开新窗口</button>
  </div>
</template>

<script>
    export default {
      methods:{
        operate(){
          console.log(location.href); //http://localhost:8082/es5
          console.log(location.host); //localhost:8082
          console.log(location.protocol); //http:
          console.log(location.hostname); //localhost
          console.log(location.port); //8082

          location.reload();

          // window.open("http://www.baidu.com","_blank")
          // window.open("http://www.baidu.com","_self")
          // window.open("http://www.baidu.com","http://www.baidu.com")
        }
      },
      mounted() {
      }
    }
</script>

<style scoped>

</style>
