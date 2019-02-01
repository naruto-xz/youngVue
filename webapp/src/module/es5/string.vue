<template>
    <div></div>
</template>

<script>
    export default {
      methods:{
        operate(){
          var str = 'abcde';
          //1.截取
          str.slice(1,3); //'bc'
          //2.转化为数组
          str.split('');  //["a", "b", "c", "d", "e"]
          //3.是否包含另一个字符串
          str.indexOf('c'); //2
          //4.具体位置字符为
          str.charAt(2);  //'c'
          //5.删除、替换
          str.replace('c','');  //"abde"
          str.replace('c','f');  //"abfde"
          //6.去前后空格
          str.trim();
          //7.转换大小写
          str.toUpperCase();
          str.toLowerCase();
          //8.转化为字符串
          var age = 23;
          age.toString(); //'23'

        }
      },
      mounted() {
        this.operate();
      }
    }
</script>

<style scoped>

</style>
