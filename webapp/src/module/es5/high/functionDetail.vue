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

        }
      },
      mounted() {
        this.operator();
      }
    }
</script>

<style scoped>

</style>
