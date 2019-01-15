<template>
    <div>
      <h4>{{title}}</h4>
      <!--生命周期-->
      <life-cycle></life-cycle>
      <!--基础语法-->
      <base-grammer></base-grammer>
    </div>
</template>

<script>
    import lifeCycle from "./lifeCycle.vue"
    import baseGrammer from "./baseGrammer.vue"
    export default {
      components:{
        lifeCycle,
        baseGrammer
      },
      data(){
        return {
          title: "vue知识库"
        }
      }
    }
</script>

<style scoped>

</style>
