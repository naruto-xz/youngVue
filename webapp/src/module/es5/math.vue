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
      methods:{
        operate(){
          //1.保留小数点后两位
          let number = 3.14159;
          number.toFixed(2);  //四舍五入返回字符串 '3.14'
          //2.将字符串转换转换为整数或小数，不会四舍五入
          parseInt("3.14"); //返回整数3
          parseFloat("3.14"); //返回小数3.14
          Number('3.14'); //转换为数字 3.14
          //3.是否非数值
          let a = '10';
          let b = 10;
          let c = 'www';
          isNaN(a);  //可以转换为数值10 false
          isNaN(b);  //false
          isNaN(c);  //true
          //4.Math对象
          Math.ceil(3.14); //向上取最大值 4
          Math.floor(3.14); //向小去最小值3
          var arr = [3,6,2];
          Math.max(...arr);  //求最大值 6
          Math.min(...arr);  //求最小值 2
          Math.round(3.5415); //四舍五入为最近的整数4
          Math.random();  //0~1之前的随机数
        }
      },
      mounted() {
        this.operate();
      }
    }
</script>

<style scoped>

</style>
