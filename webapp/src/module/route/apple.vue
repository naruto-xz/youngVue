<template>
    <div>{{title}}</div>
</template>

<script>
    export default {
      data(){
       return {
         title: "苹果"
       }
      },
      beforeRouteEnter(to,from,next){
        // console.log(this.title);  //当前无this
        console.log("3.最后走组件进入路由守卫");
        next((vm)=>{  //通过传一个回调给 next来访问组件实例。 vm就是当前组件实例.
          console.log(vm.title);
        });
      },
      beforeRouteUpdate(to,from,next){
        console.log("再走组件更新路由守卫");
      },
      

    }
</script>

<style scoped>

</style>
