<template>
    <div>
      <!--<date></date>-->
      <!--数组-->
      <!--<array></array>-->
      <!--数组迭代方法-->
      <!--<iteration-method></iteration-method>-->
      <!--对象-->
      <!--<base-object></base-object>-->
      <!--字符串-->
      <string></string>
    </div>
</template>

<script>
  // import date from "./date.vue"
  import array from "./array.vue"
  import iterationMethod from "./iterationMethod.vue"
  import baseObject from "./object.vue"
  import string from "./string.vue"

  export default {
     components:{
       array,
       iterationMethod,
       baseObject,
       string
     }
  }
</script>

<style scoped>

</style>
