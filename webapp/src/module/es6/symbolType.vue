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

        },
        operate1 () {
          let key = Symbol();
          let key1 = Symbol();
          console.log(typeof key); //symbol
          console.log(key === key1); //false

          let obj = {
            name: 'zs',
            age: 23
          };
          obj[key] = 'unique';
          console.log(obj); //{name: "zs", age: 23, Symbol(): "unique"}
          console.log(obj[key]);  //unique

          let str1 = Symbol.for('hello');
          let str2 = Symbol.for('hello');
          console.log(str1 === str2); //true
          console.log(Symbol.keyFor(str1)); //hello

        }
      },
      mounted() {
        // this.operate();
        this.operate1();
      }
    }
</script>

<style scoped>

</style>
