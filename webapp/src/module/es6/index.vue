<template>
    <div>
      <h4>{{title}}</h4>
      <div>常用方法</div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          title: "es6相关知识"

        }
      },
      methods: {

      },
      mounted() {

        // es5 没有块级作用域，此时的i相当于一个全局变量，每次递增都会改变这个全局变量，最终i不变时，其实i的值为3
        //所以arr[0] = function () {return i*2;}  其结果为  function () {return 3*2;}  值为6
        const arr = [];
        for(var i = 0; i<=2; i++){
          arr[i] = function () {
            return i*2;
          }
        }
        console.log(arr[0]()); //6
        console.log(arr[1]()); //6
        console.log(arr[2]()); //6

        //e6加入了块级作用域的概念，使用let定义变量，则此时i相当于一个局部变量，每次递增相当于在当前函数内生成了一个新的局部作用域，i就是当前局部作用域中的局部变量
        //所以arr[0] = function () {return i*2;}  其结果为  function () {return 0*2;}  值为0
        const arr1 = [];
        for(let j = 0; j<=2; j++){
          arr1[j] = function () {
            return j*2;
          }
        }
        console.log(arr1[0]()); //0
        // console.log(arr1[1]()); //2
        // console.log(arr1[2]()); //4






      }
    }
</script>

<style scoped>

</style>
