<template>
    <div></div>
</template>

<script>
    export default {
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

      }
    }
</script>

<style scoped>

</style>
