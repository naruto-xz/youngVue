<template>
    <div>
      <data-header></data-header>
      <div class=".data-center-title">{{title}}</div>
    </div>
</template>

<script>
    import dataHeader from '../dataCloud/dataHeader.vue'
    export default {
        name: "dataCenter",
        data () {
          return {
            title: '数据中心'
          }
        },
        components: {
          dataHeader
        }
    }
</script>

<style scoped>
  .data-center-title{
    color: blue;
  }
</style>
