<template>
  <div>
    <div>{{title}}</div>
    <div>{{passId}}</div>
  </div>
</template>

<script>
    export default {
      props: ["id"],
      data(){
       return {
         title: "路由组件传参",
         passId: "",
       }
      },
      mounted() {
        // this.passId =  this.$route.params.id; //该组件强依赖于定义的路由，不能被其它地方再复用;
        this.passId =  this.id;   //靠路由传进来的id，不强依赖路由，可以在任何地方复用;
      }
    }
</script>

<style scoped>

</style>
