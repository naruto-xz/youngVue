<template>
    <div>

    </div>
</template>

<script>
    export default {
      methods:{
        operator(){
          //1.判断是否为整数
          Number.isInteger(3); //true
          Number.isInteger(3.0); //true
          Number.isInteger(-3); //true
          Number.isInteger(3.14); //false

          //2.将字符串数字转换成整数或小数 与es5的parseInt()与parseFloat()是一样的，只是移到了Number对象上
          Number.parseInt('3.54');  //3
          Number.parseInt(3.54);  //3
          Number.parseInt(-3.54);  //-3
          Number.parseFloat('3.54');  //3.54

          //3.es6在Math对象的基础上增加了17个与数学相关的方法,但大多数我们不会用到，举一个可能会用到的
          Math.trunc(3.14); //3   Math.trunc()方法去除一个数字的小数部分，返回整数部分，与parseInt作用一样.
        },
        operator1 () {
          console.log(Number.isInteger(3.14)); //false
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
