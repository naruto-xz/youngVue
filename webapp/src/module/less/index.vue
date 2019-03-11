<template>
    <div>
      <h5>{{title}}</h5>
      <div class="box">
        <div class="content">test</div>
      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          title: 'less'
        }
      }
    }
</script>

<style scoped lang="less">
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
