<template>
  <h3 class="header-title">{{title}}</h3>
</template>

<script>
    export default {
        name: "headerTab",
        data: function () {
          return {
            title: 'vue+vueRouter+webpack'
          }
        }
    }
</script>

<style scoped>
  .header-title{
    color: rosybrown;
  }
</style>
