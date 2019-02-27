<template>
  <div></div>
</template>

<script>
    export default {
      methods:{
        operate(){

          var request = new XMLHttpRequest();
          request.onreadystatechange = function () {
            var DONE = this.DONE || 4;
            if (this.readyState === DONE){
              alert(this.readyState);
            }
          };
          request.open('GET', 'somepage.xml', true);  //接收三个参数：方法，地址，是否异步
          request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          request.send(null);


        }
      },
      mounted() {
        this.operate();
      }
    }
</script>

<style scoped>

</style>
