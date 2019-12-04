<template>
    <div>
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
    // import moduleA from './moduleA.js' //接收整个对象
    // import {name, age, eat} from './moduleA.js' //接收对应的值

    //ES6与CommomJS区别
    import example from './commomB.js';
    import {count,add} from './moduleB.js';


    export default {
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
        },
        operator1 () {
          //1.默认导出
          // let age = moduleA.age;
          // console.log(moduleA); //{age: 23}
          // console.log(age); //23

          //2.变量导出
          // let name1 = name;  console.log(name1);
          // let age1 = age;  console.log(age1);
          // let eat1 = eat; eat1();

          //3.动态加载
          if (true) {
            // import moduleA from './moduleA.js';  //报错
            let promise = import('./moduleA.js');
            console.log(promise); //Promise

            promise.then(res => {
              console.log(res); //default: {age: 23}
              console.log(res.default); //{age: 23}
            })

          }

        }
      },
      mounted() {
        // this.operator();
        this.operator1();
      }
    }
</script>

<style scoped>

</style>
