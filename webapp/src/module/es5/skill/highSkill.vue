<template>

</template>

<script>
    export default {
      methods:{
        operate(){
          function isArray(value) {
            return Object.prototype.toString.call(value) == '[object Array]';
          }
          function isObject(value) {
            return Object.prototype.toString.call(value) == '[object Object]';
          }
        }
      },
      mounted() {
        this.operate();
      }
    }
</script>

<style scoped>

</style>
