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
      <!--<string></string>-->
      <!--数字-->
      <!--<math></math>-->
      <!--日期-->
      <!--<date></date>-->
      <!--正则表达式-->
      <!--<regexp></regexp>-->
    </div>
</template>

<script>
  import array from "./array.vue"
  import iterationMethod from "./iterationMethod.vue"
  import baseObject from "./object.vue"
  import string from "./string.vue"
  import math from "./math.vue"
  import date from "./date.vue"
  import regexp from "./regexp.vue"

  export default {
     components:{
       array,
       iterationMethod,
       baseObject,
       string,
       math,
       date,
       regexp
     }
  }
</script>

<style scoped>

</style>
