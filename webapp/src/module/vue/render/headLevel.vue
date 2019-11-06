<!--传统写法-->
<!--<template>-->
  <!--<h1 v-if="level === 1">-->
    <!--<slot></slot>-->
  <!--</h1>-->
  <!--<h2 v-else-if="level === 2">-->
    <!--<slot></slot>-->
  <!--</h2>-->
  <!--<h3 v-else-if="level === 3">-->
    <!--<slot></slot>-->
  <!--</h3>-->
  <!--<h4 v-else-if="level === 4">-->
    <!--<slot></slot>-->
  <!--</h4>-->
  <!--<h5 v-else-if="level === 5">-->
    <!--<slot></slot>-->
  <!--</h5>-->
  <!--<h6 v-else-if="level === 6">-->
    <!--<slot></slot>-->
  <!--</h6>-->
<!--</template>-->

<script>
    export default {
      props: ['level'],
      data(){
        return {

        }
      },
      //render函数写法  Render 函数通过 createElement 参数来创建 Virtual Dom ，结构精简了很多。
      // 你的.vue文件不应该包含template标签，因为你已经使用了render函数，render本身就是做了template的事，有render不能有template。
      // 如果再写template,预编译器会忽略掉render。

      // render(createElement, context) {
      //   return createElement(
      //     'h'+this.level,
      //     this.$slots.default
      //   )
      // }

      render(h) {
        return h(
          'h' + this.level,
          this.$slots.default
        )
      }

    }
</script>

<style scoped>

</style>
