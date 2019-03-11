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
      <!--函数-->
      <!--<function-detail></function-detail>-->
      <!--面向对象编程-->
      <!--<object-detail></object-detail>-->
      <!--BOM-->
      <!--<bom></bom>-->
      <!--DOM-->
      <dom></dom>
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
  import functionDetail from "./high/functionDetail.vue"
  import objectDetail from "./high/objectDetail.vue"
  import bom from "./bom.vue"
  import dom from "./dom.vue"

  export default {
     components:{
       array,
       iterationMethod,
       baseObject,
       string,
       math,
       date,
       regexp,
       functionDetail,
       objectDetail,
       bom,
       dom
     }
  }
</script>

<style scoped>

</style>
