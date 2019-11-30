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
      <!--函数基础-->
      <!--<function-base></function-base>-->
      <!--闭包-->
      <!--<bi-bao></bi-bao>-->
      <!--BOM-->
      <!--<bom></bom>-->
      <!--面向对象编程-->
      <!--对象属性详解-->
      <!--<object-property></object-property>-->
      <!--原型与继承-->
      <object-detail></object-detail>


      <!--高级技巧-->
      <!--<hight-skill></hight-skill>-->
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
  import functionBase from "./functionBase.vue"
  import biBao from "./biBao.vue"
  import bom from "./bom.vue"
  import objectProperty from "./high/objectProperty.vue"
  import objectDetail from "./high/objectDetail.vue"

  import highSkill from "./high/highSkill.vue"


  export default {
     components:{
       array,
       iterationMethod,
       baseObject,
       string,
       math,
       date,
       regexp,
       functionBase,
       biBao,
       bom,
       objectProperty,
       objectDetail,
       highSkill
     }
  }
</script>

<style scoped>

</style>
