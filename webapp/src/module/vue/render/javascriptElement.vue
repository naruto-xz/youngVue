<!--<template>-->
    <!--<div v-show="show">展示</div>-->
<!--</template>-->

<script>
    export default {
      data(){
        return {
          show: false
        }
      },
      render(createElement, context) {
          if(this.show){
            return createElement('div','展示')
          }else{
            return createElement('div','不展示')
          }
      }
    }
</script>

<style scoped>

</style>
