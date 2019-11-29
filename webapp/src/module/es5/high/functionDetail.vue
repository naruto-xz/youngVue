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
          console.log(a);  //undefined
          console.log(b);  //undefined
          var a = 1;
          let b = 2;
          if (true) {
            console.log(c);
            console.log(d);
            var c = 3;
            const d = 4;
          }
        }
      },
      mounted() {
        // this.operator();
        // this.operator1();
        this.operator2();
      }
    }
</script>

<style scoped>

</style>
