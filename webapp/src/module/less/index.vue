<template>
  <div class="less">
    <div class="a">a</div>
    <div class="b">b</div>
    <div class="c">c</div>
    <div class="d">d</div>
  </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="less">
  @color: red;  //1.变量
  .bg(@bgColor:green){  //2.函数
    background: @bgColor; //3.混入
  }
  .font{
    font-size: 16px;
  }
  .less{
    .a{ //4.嵌套
      color: @color;
    }
    .b{
      width: 20px;
      height: 20px;
      .bg();
      /*.bg(@color: orange);*/
    }
    .c{
      .font;
    }
    .d{
      width: 100px;
      height: 100px;
      background: green;
      &:hover{
        /*background: lighten(aquamarine, 10%);*/
        /*background: darken(aquamarine, 10%);*/
        /*background: fade(aquamarine, 80%);*/  //设定透明度为 80%
        /*background: fadein(green, 100%);  //透明度增加 10%(当透明度小于1时才生效)*/
        /*background: fadeout(aquamarine, 80%); //透明度降低 10%*/
      }
    }
  }
</style>
