<template>
    <div>
      <h4>过渡</h4>
      <div class="single-transition">
        <div>单个元素过渡</div>
        <button @click="toggle">toggle</button>
        <!--<transition name="fade">-->
          <!--<div v-if="show">hello</div>-->
        <!--</transition>-->
        <!--<transition name="bounce">-->
          <!--<div v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit., <br/>Mauris facilisis enim libero, at lacinia diam fermentum id. <br/>Pellentesque habitant morbi tristique senectus et netus.</div>-->
        <!--</transition>-->
      </div>
      <div class="most-transition-one">
        <div>多个元素过渡</div>
        <button @click="toggle1">toggle1</button>
        <transition name="fade" mode="out-in">
          <div v-if="show1" :key="show1">hello1</div>
          <div v-else>hello2</div>
          <!--<div :key="show1">{{show1?'hello1':'hello2'}}</div>-->
        </transition>
      </div>

      <div class="most-transition-two">
        <div>多个元素过渡</div>
        <button v-for="item in list" @click="select(item)">{{item}}</button>
        <transition name="fade" mode="out-in">
          <div v-if="currentValue == item" :key="item" v-for="item in list">{{item}}</div>
        </transition>
      </div>

      <div class="most-transition-two">
        <button @click="change('A')">A组件</button>
        <button @click="change('B')">B组件</button>
        <transition name="fade" mode="out-in">
          <component :is="view"></component>
        </transition>
      </div>

      <div class="most-transition-three">
        <button @click="add">Add</button>
        <button @click="remove">Remove</button>
        <transition-group name="list" tag="div">
          <div v-for="item in items" :key="item" class="list-item">{{item}}</div>
        </transition-group>
      </div>

      <multiple-transition :type="type">
        <div v-if="show">hello</div>
      </multiple-transition>

    </div>
</template>

<script>
  import componentA from './componentA.vue'
  import componentB from './componentB.vue'
  import multipleTransition from './multipleTransition.vue'
  export default {
    components: {
      componentA,
      componentB,
      multipleTransition
    },
    data(){
      return {
        show:true,
        show1: true,
        currentValue: '',
        list: ['add','delete','edit','search'],
        view: 'componentA',
        items: [1,2,3,4,5,6,7,8,9],
        nextNum: 10,
        type: 'time'
      }
    },
    methods:{
      toggle(){
        // this.type = 'multiple';
        this.show = !this.show;
      },
      toggle1(){
        this.show1 = !this.show1;
      },
      select(value){
        this.currentValue = value;
      },
      change(value){
        this.view = "component"+value
      },
      add(){
        this.items.splice(this.randomIndex(),0,this.nextNum++)
      },
      remove(){
        this.items.splice(this.randomIndex(),1)
      },
      randomIndex(){
        return Math.floor(Math.random()*this.items.length);
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
      transition: opacity 5s;
    }
    .bounce-enter-active{
      animation: bounce-in 5s;
    }
    .bounce-leave-active{
      animation: bounce-in 5s reverse;
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
  .most-transition-three{
    .list-item{
      display: inline-block;
      margin-right: 10px;
    }
    .list-enter,.list-leave-to{
      opacity: 0;
      transform: translateY(30px);
    }
    .list-enter-active,.list-leave-active{
      transition: all 1s;
    }
    .list-move{
      transition: transform 1s;
    }
  }
</style>
