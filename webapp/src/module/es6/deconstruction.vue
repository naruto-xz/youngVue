<template>
    <div></div>
</template>

<script>
    export default {
      methods:{
        operator(){

          //es56允许按照一定的模式从数组和对象中提取值，然后对变量进行赋值，这被称为解构赋值。

          // 1.数组的解构赋值
          // let [a,b,c] = [1,2,3];
          // console.log(a,b,c); //1,2,3

          //2.对象的解构赋值
          // 1.对象解构赋值的内部机制是先找到同名属性，然后在赋值给对应的变量。真正被赋值的是后者。
          // 2.数组的元素是依次排列的，变量的取值是由它的位置决定的；而对象的属性没有次序，变量必须与属性同名才能取到正确的值。
          // let {name,age} = {name:'zhangsan',age:23};
          // console.log(name);   //zhangsan
          // console.log(age);   //23
          // // 上面实际是对下面的简写
          // let {name:name,age:age} = {name:'zhangsan',age:23};

          //3.函数的解构赋值 (函数的参数可用使用解构赋值)
          // function add([x,y]) {
          //   return x+y;
          // }
          // add([1,2]); //3

          //4.字符串的解构赋值
          // const [a,b,c,d,e] = 'hello';
          // a // 'h'
          // b // 'e'
          // c // 'l'
          // d // 'l'
          // e // 'o'

          //用途
          // 1.函数参数的定义  (解构赋值可以方便的将一组参数与变量名对应起来)
          // function f([x,y,z]) {}
          // f([1,2,3]);
          // //2.从函数中返回对个值
          // function example() {
          //   return [1,2,3];
          // }
          // let [a,b,c] = example();
          //
          // function example() {
          //   return {
          //     foo: 1,
          //     bar: 2
          //   }
          // }
          // let {foo,bar} = example();
          // //3.提取JSON数据
          // let jsonData = {
          //   name: 'zhangsan',
          //   age: 23,
          //   data: [10,12]
          // };
          // let {name,age,data:number} = jsonData;
          // console.log(name,age,number); //'zhangsan',23,[10,12]
          // //4. 输出模块的指定方法
          // const {moduleA,moduleB} = require("source");
        },
        operator1 () {
          //1.对象的解构赋值 (注意变量必须与属性同名才能取到正确的值)
          // let {name, age} = {name: '张三', age: 23};
          // console.log(name);
          // console.log(age);

          // 嵌套的解构赋值
          let {data: {name, age}} = {data: {name: '张三', age: 23}}
          console.log(name);
          console.log(age);

          //2.数组的解构赋值
          // let [a, b, c] = [1, 2, 3];
          // console.log(a, b, c);


          //3.函数的解构赋值
          // function test([x,y]) {
          //   console.log(x);
          //   console.log(y);
          // }
          // test([1,2])

        }
      },
      mounted() {
        // this.operator();
        this.operator1();
      }
    }
</script>

<style scoped>

</style>
