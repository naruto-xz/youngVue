<template>
    <!--<div>{{title}}</div>-->
  <div>
    <!--<div class="box">-->
      <!--<div class="a"></div>-->
      <!--<div class="b"></div>-->
      <!--<div class="c"></div>-->
    <!--</div>-->


  </div>
</template>

<script>
    export default {
      data(){
        return {
          title: "practice"
        }
      },
      methods:{
        operate(){
          // 1.考虑以下程序输出的结果：
          // var x='a';
          // function printX(){
          //   console.log(x); //undefined
          //   var x='b';
          //   console.log(x); //b
          // }
          // printX();
          //
          // var y='c';
          // function printY(){
          //   console.log(y); //c
          //   y='d';
          //   console.log(y); //d
          // }
          // printY();

          // 2.请选择结果为真的表达式： B
// 　　      A null instanceof Object　　B null==undefined　　C NaN==NaN　　D false==undefined

          // 3.下面代码的执行结果是哪个？  ['hello','bye']
// 　　　　  function foo(a){
//              var a;
//              return a;
//           }
//           function bar(a){
//             var a = 'bye';
//             return a;
//           }
//           console.log([foo('hello'),bar('hello')]);

          // 命名参数可以理解成此函数运行时的局部变量
          // 上面的函数相当于
          // function foo() {
          //   var a;
          //   var a;  //仅声明，未赋值。不影响原值。
          //   a = 'hello';
          //   return a;
          // }
          // function bar(a){
          //   var a;
          //   var a;
          //   a = 'hello';
          //   a = 'bye';
          //   return a;
          // }

          // 4.下面哪些是ES6的新特性？  A,B,C
// 　　      A var[a,b]=[1,2];     　　B const a={};
//           C var a='foo${a}bar';　　D [1,2,3].map(function(item){return item<3;});  [true,true,false]

          // 5.下面哪些是HTML5新标签？ A,D
         //  A audio　　B address　　C optgroup　　D progress(进度)

          // 6.通常HTML标签都需要特别的书写来闭合，例如<a>标签的闭合就是</a>，那么下列哪些标签不需要类似的闭合？ A,B,D
          //简单来说就是无内容元素（Void Elements）不需要闭合
          // A <br>　　B <hr>　　C <command>　　D <meta>

//           9.通过代码或伪代码实现如下要求：
// 　　     已知x="3.14159267006..."（圆周率前10万位），查询你手机号码后4位在“x”字符串中所在的位置。尽可能提升查询效率，可以优化原始数据的数据结构，让重复查询效率提高。
//             var x = "3.14159267217900635454545217965656";
//             var res = [];
//             function getIndex(value,from){
//               var index = x.indexOf(value,from);
//               if(index!=-1){
//                 res.push(index);
//                 from = index+1;
//                 getIndex(value,from);
//               }
//             }
//             getIndex('2179',0);
//             console.log(res);

          // 10.判断一个字符串中出现最多的字母及次数
          // var str = "3.141592670061";
          // var obj = {};
          // for(var i = 0; i<str.length; i++){
          //   var s = str.charAt(i);
          //   obj[s] ? obj[s]++ : obj[s] = 1;
          // }
          // console.log(obj);
          //
          // var count = 0;
          // var k = '';
          // for(var key in obj){
          //   if(obj[key]>count){
          //     k = key;
          //     count = obj[key];
          //   }
          // }
          // console.log(`出现最多的值为${k},出现了${count}次`);


          // var xArr = x.split('');
          // var yArr = y.split('');
          // for(var j = 0; j<yArr.length; j++){
          //   for(var i = 0; i<xArr.length; i++){
          //     if(yArr[j]==xArr[i]){
          //       obj[]
          //       console.log(i);
          //     }
          //   }
          // }

          // 11.请先阅读如下代码：
          // function fn(input){
          //   input=parseInt(input,10);
          //   return isPrime(input)?"is prime":"not prime";
          // }
          // // 请实现上面代码中调用的isPrime这个函数，判断传入参数是否为质数（也叫素数）。
          // function isPrime(num) {
          //   if(num<=3){
          //     return num>1
          //   }
          //   if(num>3){
          //     for(var i = 2; i<=Math.sqrt(num); i++){
          //       if(num%i == 0){
          //         return false;
          //       }
          //     }
          //     return true;
          //   }
          // }
          // console.log(fn(111));

          


        }
      },
      mounted() {
        this.operate();
      }
    }
</script>

<style lang="less" scoped>
  .box{
    width: 240px;
    height: 200px;
    border: 2px solid #ccc;
    position: relative;
    .a{
      width: 30px;
      height: 30px;
      background: #ccc;
      position: absolute;
      right: 30px;
      top: 30px;
    }
    .b{
      border: 70px solid transparent;
      border-bottom: 70px solid #ccc;
      position: absolute;
      top: 30px;
      left: 20px;
    }
    .c{
      border: 50px solid transparent;
      border-bottom: 50px solid #ccc;
      position: absolute;
      top: 70px;
      left: 100px;
    }
  }
</style>
