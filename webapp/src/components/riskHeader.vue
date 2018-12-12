<template>
    <h2 @click="tellFather">{{title}}{{message}}</h2>
</template>

<script>
    export default {
        name: "riskHeader",
        props: ['msg'],
        data: function () {
          return {
            title: '风险界面',
            message: this.msg,
            childPlan: '菜鸟计划开始'
          }
        },
      methods: {
        tellFather: function () {
            this.$emit('startPlan',this.childPlan);
        }
      }
    }
</script>

<style scoped>
  h2{
    color: palevioletred;
    cursor: pointer;
  }
</style>
