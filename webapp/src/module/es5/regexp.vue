<template>
    <div></div>
</template>

<script>
    export default {
      methods: {
        operate () {
          //去除全部空格
          let str1 = '  1 23  ';
          str1 = str1.replace(/\s/g, '');
          console.log(str1);  //123
          console.log(str1.length); //3

          //去除字符串首尾空白符的函数
          let str = '  1 23  ';
          str = str.replace(/(^\s*)|(\s*$)/g, '');
          console.log(str); //1 23
          console.log(str.length);  //4

          //去除连续的空格（长度大于2）
          let str2 = '12   3 4  56';
          // str2 = str2.replace(/\s{2,}/g, '');
          str2 = str2.replace(/\s?/g, '');
          console.log(str2);  //123 456

        },
        operate1 () {
          // let str = ' abc de ';
          // let str1 = str.replace(/(^\s*)|(\s*$)/g, ''); console.log(str1);  //abc de
          // let str2 =  str.replace(/\s/g, ''); console.log(str2);  //abcde
          // let reg = /ab/g;
          // let flag = reg.test(str); console.log(flag);  //true
          // let reg1 = new RegExp('ab', 'g');
          // let flag1 = reg1.test(str); console.log(flag1); //true

          let reg3 = /[0-9A-Z]{3,5}/g;
          let str3 = 'A999';
          console.log(reg3.test(str3));
        }
      },
      mounted() {
        // var expression = /pattern/flags;
        // 一个正则表达式就是一个模式与一个标志的组合体。
        // flag标志有：
        // g 表示全局模式,即模式被应用于所有字符串;
        // i 表示不区分大小写模式,即在确定匹配项时忽略大小写;
        // m 表示多行模式,即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项

        //字面量模式
        // var pattern = /at/g;
        // pattern.test('cat');  //true

        //表达式模式 (两个参数：一个字符串，一个标志)
        // var pattern =  new RegExp('at','g');
        // pattern.test('cat');

        // test是正则表达式的一个实例方法，用来检测是否与模式匹配

        this.operate();
        // this.operate1();


      }
    }
</script>

<style scoped>

</style>
