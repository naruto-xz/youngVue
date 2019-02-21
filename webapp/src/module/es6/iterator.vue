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



        }
      },
      mounted() {
        this.operate();
      }
    }
</script>

<style scoped>

</style>
