<template>
    <div class="css3">
      <h3>{{title}}</h3>
      <!--<basis></basis>-->
      <!--<flex></flex>-->
      <grad-layout></grad-layout>
      <!--<div class="select-option" v-for="item in list" @click="show(item.value)">{{item.name}}</div>-->
      <!--<transition v-if="'transition'==currentModule"></transition>-->
      <!--<transform v-if="'transform'==currentModule"></transform>-->
    </div>
</template>

<script>
    import basis from './basis.vue'
    import flex from './flex.vue'
    import gradLayout from './gradLayout.vue'
    import transition from './transition.vue'
    import transform from './transform.vue'
    export default {
        components:{
          basis,
          flex,
          gradLayout,
          transition,
          transform
        },
        data(){
          return {
            title: 'CSS3系列属性',
            list: [{name:'过渡',value:'transition'},{name:'转换',value:'transform'},{name:'渐变',value:'gradient'}],
            currentModule: ''
          }
        },
      methods:{
          show(value){
            this.currentModule = value;
          }
      }
    }
</script>

<style lang="less" scoped>
  .css3{
    .select-option{
      display: inline-block;
      background: #beefbe;
      padding: 10px;
      margin-right: 10px;
      cursor: pointer;
    }
  }
</style>
