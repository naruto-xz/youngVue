<template>
    <div>
      <h5>{{title}}</h5>
    </div>
</template>

<script>
    // var example = require('./commomA.js');
    // require(['./requireA.js'],function (value) {
    //   console.log(value.x); //5
    //   setTimeout(()=>{
    //     console.log(value.add());
    //   },3000)
    // });
    // define(function (require) {
    //   var value = require('./seaA.js')
    //   console.log(value.x); //5
    //   setTimeout(()=>{
    //     console.log(value.add());
    //   },3000)
    // });
    export default {
      data(){
        return {
          title: '模块化'
        }
      },
      methods:{
        operator(){
          // console.log(example.x); //5
          // console.log(example.add(1));  //6
        }
      },
      mounted() {
        this.operator();
      }
    }
</script>

<style scoped>

</style>
