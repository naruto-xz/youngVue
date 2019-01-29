<template>
    <div>
      <h4>{{title}}</h4>
      <!--<div>常用方法</div>-->
      <!--<base-grammer-one></base-grammer-one>-->
      <!--数组扩展-->
      <!--<array-extend></array-extend>-->
      <!--对象扩展-->
      <obj-extend></obj-extend>

    </div>
</template>

<script>
    import baseGrammerOne from "./baseGrammerOne.vue"
    import arrayExtend from "./arrayExtend.vue"
    import objExtend from "./objExtend.vue"
    export default {
      components:{
        baseGrammerOne,
        arrayExtend,
        objExtend
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
