<template>
    <div>
      <h4>{{title}}</h4>
      <base-grammer></base-grammer>
    </div>
</template>

<script>
    import baseGrammer from "./baseGrammer.vue"
    export default {
      components:{
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
