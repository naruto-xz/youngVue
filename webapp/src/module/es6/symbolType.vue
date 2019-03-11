<template>
    <div></div>
</template>

<script>
    export default {
      data(){
        return {

        }
      },
      methods:{
        operate(){
          // let s = Symbol();
          // console.log(typeof s);  //symbol

          // let s1 = Symbol("hello");
          // let s2 = Symbol("hello");
          // console.log(s1);  //Symbol(hello)
          // console.log(s2);  //Symbol(hello)
          // console.log(s1==s2);  //false

          // let key = Symbol();
          // let obj = {
          //   [key]: "hello"
          // };
          // console.log(obj); //{Symbol(): "hello"}
          // console.log(obj[key]) //hello

          let s1 = Symbol.for("hello");
          let s2 = Symbol.for("hello");
          console.log(s1==s2);  //true
          console.log(Symbol.keyFor(s1)); //hello

        }
      },
      mounted() {
        this.operate();
      }
    }
</script>

<style scoped>

</style>
