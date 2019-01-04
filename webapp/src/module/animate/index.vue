<template>
    <div class="animate">
      <h3>{{title}}</h3>
      <div class="select-option" v-for="item in list" @click="show(item.value)">{{item.name}}</div>
      <transition v-if="'transition'==currentModule"></transition>
    </div>
</template>

<script>
  import transition from './transition.vue'
  export default {
      components:{
        transition
      },
      data(){
        return {
          title: "过渡&动画",
          list: [{name:'过渡',value:"transition"},{name:'动画',value:'animate'}],
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
  .animate{
    .select-option{
      display: inline-block;
      background: #beefbe;
      padding: 10px;
      margin-right: 10px;
      cursor: pointer;
    }
  }
</style>
