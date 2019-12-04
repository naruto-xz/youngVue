<template>
    <div></div>
</template>

<script>
    export default {
      methods:{
        operate(){
          //凡是具有 Symbol.iterator 属性的数据结构都具有 Iterator 接口
          // const arr = [1, 2, 3];
          // const set = new Set(['a', 'b', 'c']);
          // const map = new Map([['a', 1]]);
          // const string = 'hello';

          // var obj = {age:23};
          // obj[Symbol.iterator] =  function* () {};
          // for(let item of obj){
          //   console.log(item);
          // }

          //具体应用
          //1.计算生成的数据结构
          // (Array、Set、Map都有三个方法)
          // keys(): 返回键名
          // values(): 返回键值
          // entries(): 返回键值对

          // var arr = ['a','b','c'];
          // for(let item of arr.keys()){
          //   console.log(item);  //0,1,2
          // }
          // for(let item of arr.values()){
          //   console.log(item);  //a,b,c
          // }
          // for(let item of arr.entries()){
          //   console.log(item);  //[0,a] [1,b] [2,c]
          // }

          //2.与其他遍历语法的比较
          // for循环，写法比较麻烦
          // foreach,无法中途跳出循环。break和return命令都不能奏效
          // for..in的几个缺点：
          // 某些情况下，for...in循环会任意顺序遍历键名
          // 数组的键名是数字，但for..in循环是以字符串作为键名，'0'、'1'、'2'
          // for...in循环不仅可以遍历数字键名，还会遍历手动添加的其它值，甚至包括原型链上的键



        },
        operate1 () {
          let arr = [5,4,8,2,10];
          // for (let i = 0; i<arr.length; i++) {
          //   console.log(arr[i]);
          // }
          for (let val of arr) {
            console.log(val);
          }

          let arr1 = new Set();
          arr1.add(6);
          arr1.add(7);
          arr1.add(8);
          for (let val of arr1.values()) {
            console.log(val); //6,,7,8
          }

          let arr2 =  new Map([['name', 'zs'], ['age',23]]);
          for (let val of arr2.values()) {
            console.log(val); //zs 23
          }

          let str = 'hello';
          for (let val of str) {
            console.log(val); //h e l l o
          }


          // function sum() {
          //   for (let i = 0; i<arr.length; i++) {
          //     if (arr[i] > 6) {
          //       return;  //终止循环，并跳出函数  //5,4  不打印test
          //       // break;   //5,4  //跳出循环,  打印test
          //       // continue; //5,4,2  跳出本次循环，进入下一次循环  打印test
          //     }
          //     console.log(arr[i]);
          //   }
          //   console.log('test');
          // }
          // sum();

          // arr.forEach(val => {
          //   if (val > 6) {
          //     return; //不会跳出循环
          //   }
          //   console.log(val); //5,4,2
          // })


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
