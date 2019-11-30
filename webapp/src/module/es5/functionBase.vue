<template>
    <div>

    </div>
</template>

<script>
    export default {
      data(){
        return {

        }
      },
      methods: {
        operator(){
          // 1.函数是对象，函数名是指针
          //  function add(x,y) {
          //   console.log(x+y)
          // };
          // add(1,2); //3
          //
          // var another = add;
          // add = null;
          // another(1,2)  //3

          // 2.作为值得函数
          // function total(someFunction,argument) {
          //   return someFunction(argument);
          // }
          // function add(x) {
          //   return x+10;
          // }
          // var result = total(add,10);
          // console.log(result);  //20

          // 3.函数属性和方法
          // function add(x,y) {
          //   return x+y;
          // }
          // console.log(add.length);  //2

          //4,模块模式
          // var single = function(){
          //   var name = 'zhangsan';
          //   var age = 23;
          //   return {
          //     name: name,
          //     getAge: function () {
          //       return age;
          //     }
          //   }
          // };
          // console.log(single().name);
          // console.log(single().getAge());

        },
        operator1 () {
          //变量提升 函数提升 this指针 作用域对象
          console.log(typeof a);  //undefined
          console.log(typeof b);  //boolean
          console.log(typeof c);  //function
          var a = function () {
            return true;
          };
          window.b = function () {
            return true;
          };
          console.log(a()&&b()&&c());   //true
          function c() {
            return true;
          }
          var o = {
            a:1,
            f:function() {
              return this.a;
            }
          };
          console.log(o.f()); //1
          var o1 = o;
          console.log(o1.f());  //1
          var o2 = o.f;
          console.log(o2);  //function(){return this.a;}
          o['a'] = 5;
          console.log(o1.f());  //5
          var o3 = {a:6};
          console.log(o.f.call(o3));  //6
        },
        operator2 () {
          //递归  prototype(call、apply)
          function sum(num) {
            if (num <= 1) {
              return num;
            } else {
              // return num * sum(num - 1);
              return num * arguments.callee(num - 1);
            }
          }
          // let another = sum;
          // sum = null;
          // let res = another(5);
          // console.log(res);
          let res = sum(5);
          console.log(res);


          // function sum1 (num1, num2) {
          //   return num1 + num2;
          // }
          // let res1 = sum1.apply(this,[10,20]);
          // var result = sum.call(this,10,20);
        },
        operator3 () {
          //函数的调用方式
          function f() {
            console.log(123);
          }
          f();
          let obj = {
            add () {
              console.log(456);
            }
          };
          obj.add();
          function f1() {
            console.log(789);
          }
          f1.call(this);
          function F2 (age) {
            this.age = age;
          }
          let f2 = new F2(23);
          console.log(f2.age);
        }

      },
      mounted() {
        // this.operator();
        // this.operator1();
        // this.operator2();
        this.operator3();
      }
    }
</script>

<style scoped>

</style>
