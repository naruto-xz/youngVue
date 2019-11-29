<template>
    <div>
      <h5>{{title}}</h5>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          title: "数组"
        }
      },
      methods:{
        // 数组操作的相关方法：push,pop,shift,unshift,slice,splice,sort,reverse,indexOf
        operate(){
          // var arr = [1,2,3,4];
          // arr.push(5);  console.log(arr);  //[1,2,3,4,5]
          // arr.pop();  console.log(arr);  //[1,2,3]
          // arr.shift();  console.log(arr);  //[2,3,4]
          // arr.unshift(5);  console.log(arr);  //[5,1,2,3,4]
          //
          // 浅复制，不会改变原数组，复制出一个新的数组
          // var arr1 = arr.slice(0,3);
          // console.log(arr); //[1,2,3,4]
          // console.log(arr1); //[1,2,3]
          //
          // arr.splice(1);  console.log(arr);  //[1]
          // arr.splice(1,2);  console.log(arr);  //剔除,两个参数，第一个为从数组的第几项开始(从1开始)，第二个往后剔除几位 //[1,4]
          // arr.splice(1,0,5);  console.log(arr);  //插入，三个参数，第一项从数组的几项开始，第二个往后剔除几位，第三项依次往后为插入的值，[1,5,2,3,4]
          //
          // arr.sort(); console.log(arr); //[1,2,3,4]
          // arr.reverse(); console.log(arr); //[4,3,2,1]
          //
          // var index = arr.indexOf(2); console.log(index); //返回数组下标  //1
          // if(Array.isArray(arr)){
          //   console.log(true)    //true  //专门判断是否为数组
          // }
          // var arr1 = arr.toString();  console.log(arr1);  //转换为字符串  //'1,2,3,4'
          // var arr1 = arr.join(",");  console.log(arr1); //转换为字符串  //'1,2,3,4'
          //
          // var arr1 = [5,6];
          // var arr2 = arr.concat(arr1);  console.log(arr2);  //合并数组  //[1,2,3,4,5,6]
        },
        operate1(){
          let arr = [1,2,3,4];
          //数组本身改变
          arr.push(5);  console.log(arr); //[1,2,3,4,5]
          arr.pop();  console.log(arr); //[1,2,3,4]
          arr.shift();  console.log(arr); //[2,3,4]
          arr.unshift(5); console.log(arr); //[5,2,3,4]
          //上面这四个方法如果赋值，返回的是数组的长度: 如 let a = arr.push(5); console.log(a)  //4

          arr.splice(2, 1); console.log(arr); //[5,2,4]   // let a = arr.splice(2, 1); console.log(a); // 该方法的返回值是删除的元素形成的数组 [3]
          arr.splice(2, 0, 3);  console.log(arr); //[5,2,3,4]
          arr.splice(2, 1, 1);  console.log(arr); //[5,2,1,4]

          arr.reverse();  console.log(arr); //[4,1,2,5]
          arr.sort(); console.log(arr); //[1,2,4,5]


          //需要重新赋值
          let arr1 = [1,2,3,4];
          let arr2 = arr1.slice(1,3);  console.log(arr2); //[2,3]
          let a = [1,2];
          let b = [3,4];
          let c= a.concat(b); console.log(c); //[1,2,3,4]
          let index = arr1.indexOf(2);  console.log(index); //1
          let str = arr1.toString();  console.log(str); //"1,2,3,4"
          let str1 = arr1.join(); console.log(str1);  //"1,2,3,4"

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
