<template>
    <div>
      <h4>过渡</h4>
      <div class="single-transition">
        <div>单个元素过渡</div>
        <button @click="toggle">toggle</button>
        <!--<transition name="fade">-->
          <!--<div v-if="show">hello</div>-->
        <!--</transition>-->
        <transition name="bounce">
          <div v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit., <br/>Mauris facilisis enim libero, at lacinia diam fermentum id. <br/>Pellentesque habitant morbi tristique senectus et netus.</div>
        </transition>
      </div>
      <div class="most-transition-one">
        <div>多个元素过渡</div>
        <button @click="toggle1">toggle1</button>
        <transition name="fade" mode="out-in">
          <!--<div v-if="show1" :key="show1">hello1</div>-->
          <!--<div v-else>hello2</div>-->
          <div :key="show1">{{show1?'hello1':'hello2'}}</div>
        </transition>
      </div>

      <div class="most-transition-two">
        <div>多个元素过渡</div>
        <button v-for="item in list" @click="select(item)">{{item}}</button>
        <transition name="fade" mode="out-in">
          <div v-if="currentValue == item" :key="item" v-for="item in list">{{item}}</div>
        </transition>
      </div>
    </div>
</template>

<script>
  export default {
    data(){
      return {
        show:true,
        show1: true,
        currentValue: '',
        list: ['add','delete','edit','search']
      }
    },
    methods:{
      toggle(){
        this.show = !this.show;
      },
      toggle1(){
        this.show1 = !this.show1;
      },
      select(value){
        this.currentValue = value;
      }
    }
  }
</script>

<style lang="less" scoped>
  .single-transition{
    .fade-enter,.fade-leave-to{
      opacity: 0;
    }
    .fade-enter-active,.fade-leave-active{
      transition: opacity 0.5s;
    }
    .bounce-enter-active{
      animation: bounce-in .5s;
    }
    .bounce-leave-active{
      animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }
  }
  .most-transition-one{
    .fade-enter,.fade-leave-to{
      opacity: 0;
    }
    .fade-enter-active,.fade-leave-active{
      transition: opacity 0.5s;
    }
  }
  .most-transition-two{
    .fade-enter,.fade-leave-to{
      opacity: 0;
    }
    .fade-enter-active,.fade-leave-active{
      transition: opacity 0.5s;
    }
  }
</style>
