<template>

</template>

<script>
export default {
  methods: {
    operator(){
      //最简单直接的闭包原理
      function a() {
        let s = 'abc';
        return function b() {
          return s;
        }
      }
      let f = a();
      let res = f();
      console.log(res);

      //实际应用  (变量会一直保存在内存中)
      function c() {
        let num = 1;
        return function b() {
          return num++;
        }
      }
      let f1 = c();
      console.log(f1());  //1
      console.log(f1());  //2

      //模块模式
      let f2 = function () {
        let name = 'zs';
        let age = 23;
        return {
          name: name,
          getAge(){
            return age;
          }
        }
      };
      let age = f2().getAge();
      console.log(age);
    }
  },
  mounted () {
    this.operator();
  }
}
</script>

<style scoped>

</style>
