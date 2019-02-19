<template>
    <div>
      <h4>{{title}}</h4>
      <!--<div>常用方法</div>-->
      <!--<let-and-const></let-and-const>-->
      <!--数组扩展-->
      <!--<array-extend></array-extend>-->
      <!--对象扩展-->
      <!--<obj-extend></obj-extend>-->
      <!--字符串扩展-->
      <!--<string-extend></string-extend>-->
      <!--数值扩展-->
      <!--<number-extend></number-extend>-->
      <!--函数扩展-->
      <!--<function-extend></function-extend>-->
      <!--变量解构赋值-->
      <!--<deconstruction></deconstruction>-->
      <!--模块化-->
      <!--<module></module>-->
      <!--promise对象-->
      <!--<promise></promise>-->
      <!--set和map结构-->
      <!--<set-and-map></set-and-map>-->
      <!--generator函数-->
      <generator></generator>
    </div>
</template>

<script>
    import letAndConst from "./letAndConst.vue"
    import arrayExtend from "./arrayExtend.vue"
    import objExtend from "./objExtend.vue"
    import stringExtend from "./stringExtend.vue"
    import numberExtend from "./numberExtend.vue"
    import functionExtend from "./functionExtend.vue"
    import deconstruction from "./deconstruction.vue"
    import module from "./module/module.vue"
    import promise from "./promise.vue"
    import setAndMap from "./setAndMap.vue"
    import generator from "./high/generator.vue"
    export default {
      components:{
        letAndConst,
        arrayExtend,
        objExtend,
        stringExtend,
        numberExtend,
        functionExtend,
        deconstruction,
        module,
        promise,
        setAndMap,
        generator
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
