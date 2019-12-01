<template>

</template>

<script>
    export default {
      methods: {
        operate(){
          // //下面的扩展的这些新方法都返回一个新的值
          //
          // var arr = [1,2,3,4,5];
          // find  用于找出第一个符合条件的数组成员
          // 接受三个参数，第一是值，第二个下标，第三个原数组
          // var result = arr.find(item=>item>2);
          // console.log(result);  //3
          //
          // findIndex 返回一个符合条件的成员的位置
          // var result = arr.findIndex(item=>item>2);
          // console.log(result);  //2
          //
          // findIndex与indexOf很像
          // var result = arr.indexOf(3);
          // console.log(result);  //2
          //
          // entries、keys、values  它们都会返回一个遍历器对象Array Iterator {}
          //  keys()是对键名的遍历
          //  values()是对值的遍历
          //  entries() 是对键值对的遍历
          //  var arr1 = ["a","b","c"];
          // for(var key of arr1.keys()){
          //   console.log(key);  //0,1,2
          // }
          // for(var value of arr1.values()){
          //   console.log(value);  //"a","b","c"
          // }
          // for (var [key,value] of arr1.entries()) {
          //   console.log(key);  //0,1,2
          //   console.log(value);//"a","b","c"
          // }
          //
          // includes 表示某个数组是否包含特定的值
          // 允许传入一个表示搜索的起始位置，默认为0
          // var result = arr.includes(3);  console.log(result);  //true
          // var result =  arr.includes(6);  console.log(result)  //false
          // var result = arr.includes(3,3);  console.log(result);  //false
          //
          // includes与indexOf有相通之处
          // if(arr.includes(3)>-1){
          //   console.log(true);  //true
          // }
          //
          // copyWithin 在当前数组内部将指定位置的成员复制到其它位置（会覆盖原有成员），直接改变当前数组。
          // 三个参数，从什么位置开始替换，start从该位置开始读取数据，end到该位置停止读取数据。
          // arr.copyWithin(0,3,4);
          // console.log(arr); //[4,2,3,4,5]
          //
          // fill 给定值填充一个数组,已有数据会被全部替换
          // 三个参数，替换的值，start开始位置，end结束位置
          // arr.fill(7);
          // console.log(arr); //[7,7,7,7,7]
          //
          // arr.fill(7,2,3);
          // console.log(arr); //[1,2,7,4,5]
          // fill的抹去填充功能和splice有相同作用之处
          // arr.splice(2,1,7);
          // console.log(arr); //[1,2,7,4,5]

          // Array.of() 将一组数值转化为数组
          // Array.of(3); //[3]
          // Array.of(1,2,3);  //[1,2,3]

          // Array.from() 将两对象转换为真正的数组(1.类数组对象；2.可遍历对象iterable) 还可以将字符串转换为数组
          // var obj = {
          //   0: "a", //key值必须为数字,顺序必须对
          //   1: "b",
          //   2: "c",
          //   length: 3 //必须有length
          // };
          // Array.from(obj);
          // Array.from("hello") //["h", "e", "l", "l", "o"]


          //扩展运算符
          // var arr = [1,2,3];
          // console.log(...arr);  //1,2,3
          // console.log(5,...arr,4);  //5,1,2,3,4
          //
          // //1.主要用于函数调用
          // function add(x,y) {
          //   return x+y
          // }
          // var result = add(...[1,2]);
          // console.log(result);  //3
          //
          // 2.替代数组的apply方法
          // 2.1事例一
          // var arr = [1,2,3];
          // es5写法
          // function sum(x,y,z) {
          //   return x+y+z;
          // }
          // var result = sum.apply(this,arr);
          // console.log(result);  //6
          // //es6写法
          // var result = sum(...arr);
          // console.log(result);  //6
          //
          // 2.2事例二
          // var arr = [1,2,3];
          // es5写法
          // var result =Math.max(1,2,3); //3
          // var result =Math.max.apply(Math,arr); //3
          // console.log(result);
          // es6写法
          // var result =Math.max(...arr);
          // console.log(result);  //3
          //
          // 2.3事例三
          // var arr1 = [1,2];
          // var arr2 = [3,4];
          // es5写法
          // arr1.push.apply(arr1,arr2);
          // console.log(arr1);  //[1,2,3,4]
          // es6写法
          // arr1.push(...arr2);
          // console.log(arr1);  //[1,2,3,4]
          //
          // 3.合并数组
          // es5
          // var arr1 = [1,2];
          // var arr2 = [3,4];
          // var result = arr1.concat(arr2);
          // console.log(result);  //[1,2,3,4]
          // es6
          // var result = [...arr1,...arr2];
          // console.log(result);  //[1,2,3,4]
          //
          // 4.将字符串转变成真正的数组
          // es5
          // var str = "hello";
          // var arr = str.split("");
          // console.log(arr); //["h", "e", "l", "l", "o"]
          // e56
          // var arr = [...str];
          // console.log(arr); //["h", "e", "l", "l", "o"]


        },
        operate1 () {
          let arr = [1,2,2,3,3,4,5,8,10];
          console.log(new Set(arr));
          console.log(Array.from(new Set(arr)));
          console.log([...new Set(arr)]);

          let res1 = arr.includes(2); console.log(res1);  //true
          let res2 = arr.find(item => item > 5); console.log(res2); //8
          let res3 = arr.findIndex(item => item > 1); console.log(res3);  //1

          let arr1 = [{name: 'zs', age: 20}, {name: 'ls', age: 21}, {name: 'wf', age: 22}];
          for(let item of arr1.values()){
            console.log(item.age);  //20, 21, 22
          }

          let str = '123';
          console.log(Array.of(str)); //['123']
          console.log(str.split()); //['123']


          //扩展运算符(将数组转化为参数序列)
          let arr2 = [1,2,3];
          console.log(...arr2); //1 2 3

          //1.主要用于函数调用
          function add(a, b, c) {
            console.log(a);
            console.log(b);
            console.log(c);
            console.log(a + b + c);
          }
          // add(...arr2);  //6

          //2.替代函数的apply方法
          add.apply(this,arr2);
          // add(...arr2);
          let max = Math.max.apply(this, arr2); console.log(max); //3
          let max1 = Math.max(...arr2); console.log(max1);  //3

          //3.在现有数组的基础上创建一个新的数组或复制数组
          let a = [1,2];
          let b = [6, ...a, 7];
          console.log(b); //[6,1,2,7]
          let c = [1,2];
          let d = [3,4];
          let f = c.concat(d);  console.log(f); //[1,2,3,4]
          let j = [...c, ...d];  console.log(j); //[1,2,3,4]

          //4.将字符串转换成正真的数组
          let str1 = 'hello';
          let strArr = [...str1];  console.log(strArr)  //['h','e','l','l','o']

          //5.用于数组的解构赋值
          let [a1, ...rest] = arr2;
          console.log(a1);  //1
          console.log(rest);  //2,3

        }
      },
      mounted() {
        this.operate();
        this.operate1();
      }
    }
</script>

<style scoped>

</style>
