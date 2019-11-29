<template>
    <div>
      <h5>{{title}}</h5>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          title: "es6基础语法一"
        }
      },
      methods:{

      },
      mounted() {
        // // 1.let和const只在其块级作用域内生效
        // // 事例一
        // if(true){
        //   var a = 1;
        //   let b = 1;
        //   const c = 1;
        // }
        // console.log(a); //1
        // console.log(b); //ReferenceError
        // console.log(c); //ReferenceError
        // //事例2
        // // es5 没有块级作用域，此时的i相当于一个全局变量，每次递增都会改变这个全局变量，最终i不变时，其实i的值为3
        // //所以arr[0] = function () {return i*2;}  其结果为  function () {return 3*2;}  值为6
        // var arr = [];
        // for(var i = 0; i<=2; i++){
        //   arr[i] = function () {
        //     return i*2;
        //   }
        // }
        // console.log(arr[0]()); //6
        // console.log(arr[1]()); //6
        // console.log(arr[2]()); //6
        //
        // //e6加入了块级作用域的概念，使用let定义变量，则此时i相当于一个局部变量，每次递增相当于在当前函数内生成了一个新的局部作用域，i就是当前局部作用域中的局部变量
        // //所以arr[0] = function () {return i*2;}  其结果为  function () {return 0*2;}  值为0
        // var arr1 = [];
        // for(let j = 0; j<=2; j++){
        //   arr1[j] = function () {
        //     return j*2;
        //   }
        // }
        // console.log(arr1[0]()); //0
        // // console.log(arr1[1]()); //2
        // // console.log(arr1[2]()); //4

        // 2.let和const声明的变量不存在变量提升
        // if(true){
        //   console.log(a); //undefined
        //   console.log(b); //ReferenceError
        //   console.log(c); //ReferenceError
        //   var a = 1;
        //   let b = 1;
        //   const c = 1;
        // }

        //3.let和const声明的变量都存在暂时性死区
        // var a = 1;
        // if(true){
        //   a =  2; //会报错;
        //   let a = 3;
        //   const a = 3;
        // }

        // 4.let和const不允许在相同作用域重复声明变量
        // if(true){
        //   var a = 1;
        //   var a = 2;
        //   console.log(a); //2
        //
        //   let b = 1;
        //   let b = 2;
        //   console.log(b); //ReferenceError
        // }

        // const不同之处
        // const PI = 3.14;
        // PI = 3.15; //ReferenceError

        // 块级作用域

        //es5
        // var temp = new Date();
        // function f() {
        //   console.log(temp);  //undefined   //变量提升了
        //   if(false){
        //     var temp = 'hello word';
        //   }
        // }
        // f();

        // for(let i = 0; i<3; i++){
        //   console.log(i);
        // }
        // console.log(i); //3


        // {
        //   function a() {
        //     console.log(1);
        //   }
        //   a();  //1
        //   {
        //     function a() {
        //       console.log(2);
        //     }
        //     a();  //2
        //   }
        // }





      }
    }
</script>

<style scoped>

</style>
