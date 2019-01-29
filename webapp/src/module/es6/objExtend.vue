<template>
    <div>
      <h5>{{title}}</h5>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          title: '对象扩展'
        }
      },
      methods:{
        operator(){
          // var obj = {
          //   name: "zhangsan",
          //   age: 23
          // };
          // var obj1 = {
          //   sex: "男"
          // };
          // var obj2 = {age:30};
          // //Object.assign  合并对象
          // //1.第一个是目标对象，后面都是要合并的对象
          // //2.如果目标对象不加{}，则不会克隆出一个断开引用的新对象，原来的对象共同指向了新的引用对象.
          // //3.Object.assign()是一个浅复制。
          // //4.Object.assign()的处理方法是替换，而不是添加。
          // var newObj = Object.assign({},obj,obj1);
          // console.log(newObj);  //{name: "zhangsan", age: 23, sex: "男"}
          //
          // var newObj = Object.assign({},obj,obj2);
          // console.log(newObj);  //{name: "zhangsan", age: 30}
          //
          //
          // 常见用途
          // 1.克隆对象
          // var newObj = Object.assign({},obj);  //克隆出一个新的obj对象，和原来的对象断开引用连接
          // 2.合并对象
          // var newObj = Object.assign(obj,obj1);    //合并一个新对象，没有断开连接
          // var newObj = Object.assign({},obj,obj1);  //合并一个新对象,断开连接
          // 3.为属性指定默认值
          // const defaultOption = {
          //   name: "zhangsan",
          //   age: 23
          // };
          // function content(option) {
          //   var options =  Object.assign({},defaultOption,option);
          //   console.log(options);
          // }
          // content();

          // //Object.keys(),Object.values(),Object.entries()   //获取键，值，键值对
          // var result = Object.keys(obj);
          // console.log(result);  //["name", "age"]
          // var result = Object.values(obj);
          // console.log(result);  // ["zhangsan", 23]
          // var result = Object.entries(obj);
          // console.log(result);  // ["name","zhangsan"], ["age",23]

          // Object.is() 它用来比较两个值是否相等，与严格预算符号（===）的行为基本一致
          // Object.is('foo','foo');  //true
          // Object.is({},{});   //false
          // Object.is(NaN,NaN)  //true  在es5中 NaN == NaN 为false   NaN非数值 isNaN()是否非数值

          //扩展运算符 (1.克隆对象； 2.复制对象)  和Object.assign是一样的
          // var obj1= {name: "张三"};
          // var obj2= {age: 23};
          // var obj3 = {...obj1,...obj2}; //等同于Object.assign({},obj1,obj2) 合并出的是一个新的对象，已断开连接
          // console.log(obj3);  //{name: "张三", age: 23}

        },
        base(){
          // // 1.属性的简介表示法
          // //es6允许直接写入变量和函数作为对象的属性和方法。
          // var age = 23;
          // var eat = function () {
          //   console.log("吃饭")
          // };
          // var obj = {age,eat};
          // console.log(obj); //{age: 23,eat:function(){}}
          //
          // //es6允许对象只写属性名，不写属性值，那么属性值就等于属性名所代表的变量
          // function add(x,y) {
          //   return {x,y};
          // }
          // var obj = add(1,2);
          // console.log(obj); //{x: 1, y: 2}
          //
          // //对象内部方法简写
          // var obj = {
          //   eat: function () {
          //     console.log("吃")
          //   }
          // };
          // var obj = {
          //   eat(){
          //     console.log("吃")
          //   }
          // }
          //
          // //2.属性名表达式  （es6允许在对象子面量中定义属性名表达式）
          // var obj = {
          //   ['a'+'b']: 2
          // };
          // console.log(obj); //{ab: 2}
          //
          // //3. 对象方法的 name 属性 (函数的name属性返回函数名，对象的方法也是函数，因此也有name属性)
          // var obj = {
          //   eat(){
          //     console.log("吃")
          //   }
          // };
          // console.log(obj.eat.name) //eat
        },
        empty(){
         //  //Null传导运算符
         //  //在编程中，如果读取对象内部的某个属性，往往需要判断该属性是否存在，但层层判断又太麻烦，所以引入Null传导运算符
         // var person = {
         //   info: {
         //     name: 'zhangsan'
         //   }
         // };
         // console.log(person && person.info && person.info.name);
         // console.log(person?.info?.name);
        }
      },
      mounted() {
        this.operator();
        this.base();
        this.empty();
      }
    }
</script>

<style scoped>

</style>
