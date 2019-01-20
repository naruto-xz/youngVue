<template>
    <div>
      <h4>{{title}}</h4>
      <!--<div>常用方法</div>-->
      <!--<base-grammer-one></base-grammer-one>-->
      <!--数组扩展-->
      <array-extend></array-extend>
    </div>
</template>

<script>
    import baseGrammerOne from "./baseGrammerOne.vue"
    import arrayExtend from "./arrayExtend.vue"
    export default {
      components:{
        baseGrammerOne,
        arrayExtend,
      },
      data(){
        return {
          title: "es6相关知识"
        }
      },
      methods: {

      },
      mounted() {








      }
    }
</script>

<style scoped>

</style>
