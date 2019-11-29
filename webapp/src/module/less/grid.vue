<template>
  <template>
    <!--<div>gridLyout</div>-->
    <div class="box">
      <div class="a">
        <div class="a1">a1</div>
        <div class="a2">a2</div>
      </div>
      <div class="b">2</div>
      <div class="c">3</div>
    </div>
  </template>

  <script>
    export default {
      data(){
        return {

        }
      }
    }
  </script>

  <style scoped lang="less">
    .box{
      width: 100%;
      height: 600px;
      /*background: red;*/
      .a{
        width: 100%;
        height: 200px;
        background: yellow;
        .a1{
          width: 200px;
          height: 200px;
          /*background: #0055aa;*/
          background: url("../../image/logo.png");
          /*display: inline-block;*/
          float: left;
        }
        .a2{
          width: 300px;
          height: 200px;
          background: orangered;
          /*display: inline-block;*/
          float: left;
          padding: 10px;
          margin-left: 50px;
        }
      }
      .b{
        width: 100%;
        height: 200px;
        background: rosybrown;
      }
      .c{
        width: 100%;
        height: 200px;
        background: blue;
      }
    }
  </style>

</template>

<script>
    export default {
        name: "grid"
    }
</script>

<style lang="less" scoped>
  //1.变量
  @color: red;
  //2.mixin
     .font{
       font-size: 16px;
     }
  //3.函数
     .bg(@bg-color:green){
    background: @bg-color;
  }
  .box{
  //4.嵌套
     .content{
       color: @color;
     .font;
     .bg();
     //.bg(yellow);
  //5.一些颜色操作函数
  &:hover{
     cursor: pointer;
   //color: lighten(red,5%);  //亮度增加 10%
   //color: darken(red,5%); // 亮度降低 10%
   //background:fadein(green, 10%); // 透明度增加 10%
   //background:fadeout(green, 10%); // 透明度降低 10%
   //background:fade(green, 50%); // 设定透明度为 50%
   }
  }
  }
</style>
