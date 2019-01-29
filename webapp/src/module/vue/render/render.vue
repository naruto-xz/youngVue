<template>
  <div>
    <!--render函数-->
    <!--<head-level :level="level">hello render</head-level>-->
    <!--createElement用法-->
    <!--<create-element></create-element>-->
    <!--使用 JavaScript 代替模板功能-->
    <javascript-element></javascript-element>
  </div>
</template>

<script>
  import headLevel from "./headLevel.vue"
  import createElement from "./createElement.vue"
  import javascriptElement from "./javascriptElement.vue"
  export default {
    components: {
      headLevel,
      createElement,
      javascriptElement
    },
    data(){
      return {
        level: 2
      }
    },
  }
</script>

<style scoped>

</style>
