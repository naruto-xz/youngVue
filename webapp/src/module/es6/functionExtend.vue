<template>
    <div></div>
</template>

<script>
    export default {
      methods:{
        operator(){
          // 1.函数参数的默认值
          // ES6允许为函数的参数设置默认值，即直接写在参数定义的后面
          /**
           *注意
           * 1.参数变量是默认声明的，不能用let或const再次声明
           * 2.使用函数默认值时，函数不能有同名参数
           * 3.默认值得参数应该在函数参数的尾部，如果非尾部，这个参数是无法忽略的
           * 4.使用参数默认值后，函数的length属性会失真，一般会返回没有定义默认值的参数个数
           */
          function add(x,y=2) {
            return x+y;
          }
          var result = add(1);
          console.log(result);  //3

          //2.rest参数
          var sum = (...values)=>values;
          var result = sum(1,2,3);
          console.log(result);  //[1,2,3]

          //3.name属性
          var foo = function () {};
          console.log(foo.name);  //foo

          //4.箭头函数

          /**
           * 语法注意：
           * 1.如果箭头函数使用()代表参数部分，参数只有一个，可以去掉()，参数没有或多个，不能去掉;
           * 2.如果箭头函数中的代码只有一句我们可以去掉{}，如果多于一句就要使用{}，并且使用return;
           */
          var test1 = (x,y)=>x+y;
          console.log(test1(5,6));

          //1.箭头函数没有自己的this，函数体内部写的this,会顺着作用域去找最近真实存在的this。
          // function a(){
          //   this.b=1;
          //   setTimeout(()=>{
          //     this.b=2;
          //     console.log(this.b);     //2
          //   });
          // }
          // a();

          //2.箭头函数内部的this是定义时所在的对象，而不是使用时所在的对象，并且不会改变。
          //es5
          var obj = {
            x:100,
            show(){
              setTimeout(
                function(){
                  console.log(this.x);
                },
                500
              );
            }
          };
          obj.show();   //undefined

          //es6
          var obj = {
            x:100,
            show(){
              setTimeout(
                ()=>{
                  console.log(this.x);
                },
                500
              );
            }
          };
          obj.show();   //100



        },
        operator1 () {
          let arr = [1,2,3];
          let arr1 = arr.map(item=>item*2); console.log(arr1);  //[2,4,6]

          function test() {
            this.a = 1;
            setTimeout(()=>{
              this.a = 2;
              console.log(this.a);  //2
            })
          }
          test();

          function add(x,y = 2) {
            console.log(x + y);
          }
          add(1);

          function add1(x,...rest) {
            console.log(x); //1
            console.log(rest);  //[2,3]
          }
          add1(1,2,3);
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
