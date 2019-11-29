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

        },
        operate1 () {
          let str = 'a bcde b';
          let str1 = str.slice(2,4); console.log(str1); //bc
          let str2 = str.split(); console.log(str2);  //['a bcde b']

          let str3 = str.replace('b', 'f'); console.log(str3);  //a fcde b
          let str4 = str.replace('b', ''); console.log(str4);  //a cde b
          let str5 = str.replace(/\s/g, ''); console.log(str5); //abcdeb

          let str6 = str.charAt(3); console.log(str6);  //c
          let str7 = str.trim(); console.log(str7);  //a bcde b
          let index = str.indexOf('b');  console.log(index); //2
          let str8 = str.toUpperCase(); console.log(str8);  //A BCDE B
          let str9 = str.toLowerCase(); console.log(str9);  //a bcde b
          let str10 = String(10); console.log(str10); //'10'

        }
      },
      mounted() {
        // this.operate();
        this.operate1();
      }
    }
</script>

<style scoped>

</style>
