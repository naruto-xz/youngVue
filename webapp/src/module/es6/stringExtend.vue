<template>

</template>

<script>
    export default {
      methods: {
        operator(){
          // //一、常用方法
          // // 1.includes,startWith,endWith （可以传入第二个参数，表示字符串搜索的位置）
          // var str = 'hello word';
          // str.includes('e');  //true 判断一个字符创是否包含某个字符串 等同于 str.indexOf('e')>-1
          // str.startsWith('h');  //true  判断一个字符串的起始字符是否正确
          // str.endsWith('d'); //true 判断一个字符串的结束字符是否正确
          //
          // str.includes('h',0);  //true
          // str.startsWith('0',4);  //true
          // str.endsWith('r',9);  //true  endWith它是针对前N个字符，其它两种是从第n个字符开始
          //
          // //2.repeat方法返回一个新字符串，表示原字符串被重复了n次
          // var str = 'ab';
          // str.repeat(2);  //'abab'
          // str.repeat(0);  //''
          //
          // //3.es6中字符串扩展了iterator遍历器你接口，使得字符串可以使用for...of遍历
          // var str = 'abc';
          // for(var i of str){
          //   console.log(i); //a b c
          // }

          //二、模板字符串
          var str1 = 'hello';
          var str2 = 'word';

          // 1.当做普通字符串使用
          var str = `hello`;
          console.log(str); //hello
          // 2.定义多行字符串  (可以在多行中写字符串,所以的空格和缩进都会被保留在输出中)
          var str = `hello
          word`;
          console.log(str); //hello word
          //3.字符串中嵌入变量  (1.需要将变量名写在${}中,2.{}中可以放入任意的js表达式,3.{}中可以调用函数,4.模板字符串还能嵌套)
          var name = 'word';
          var str = `hello${name}`;
          console.log(str); //helloword

          var str = `hello${1+1}`;
          console.log(str); //hello2

          function add(x,y) {
            return x+y;
          }
          var str = `hello${add(2,3)}`;
          console.log(str); //hello5

          var str = `<div>
                       ${`aaa`}
                    </div>`;
          console.log(str); //aaa

        }
      },
      mounted(){
        this.operator();
      },
    }
</script>

<style scoped>

</style>
