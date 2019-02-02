<template>
    <div>
      <h5>{{title}}</h5>
      <button @click="operator(1)">动态加载</button>
    </div>
</template>

<script>
    //AMD
    // var example = require('./commomA.js');
    // require(['./requireA.js'],function (value) {
    //   console.log(value.x); //5
    //   setTimeout(()=>{
    //     console.log(value.add());
    //   },3000)
    // });
    //CMD
    // define(function (require) {
    //   var value = require('./seaA.js')
    //   console.log(value.x); //5
    //   setTimeout(()=>{
    //     console.log(value.add());
    //   },3000)
    // });
    //ES6 Module
    // import moduleA from './moduleA.js'

    //ES6与CommomJS区别
    import example from './commomB.js';
    import {count,add} from './moduleB.js';


    export default {
      data(){
        return {
          title: '模块化',

        }
      },
      methods:{
        operator(value){
          // console.log(example.x); //5
          // console.log(example.add(1));  //6
          // console.log(moduleA.age); //23
          // moduleA();
          // if(value == 1){
            // import('./moduleA.js').then(res=>{
            //   console.log(res.default.age);
            // });
            // require(['./moduleA.js'],function (res) {
            //   console.log(res.default.age);
            // })
          // }

          //CommomJS
          console.log(example.count); //3
          example.add();
          console.log(example.count); //3

          //ES6
          console.log(count); //3
          add();
          console.log(count); //4
        }
      },
      mounted() {
        this.operator();
      }
    }
</script>

<style scoped>

</style>
