<template>
    <div>
      <div class="select">
        <div>选择器</div>
        <p class="a">伪类选择器</p>
        <p class="b">伪元素选择器</p>
        <p class="c">相邻选择器</p>
        <p attr="d">属性选择器</p>
      </div>
      <div class="box">盒子模型</div>
      <div class="style">
        <div>样式</div>
        <div class="border">边框</div>
      </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
  //1.选择器：常用：类、id、 标签、子级、后代、相邻、伪类、伪元素  //不常用：属性选择器 p[attr] 通用选择器 *
  .select{
    .a{
      &:hover{
        cursor: pointer;
        color: green;
      }
    }
    .b{
      &:before{
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        background: red;
      }
      &+p{
        color: aquamarine;
      }
    }
    p[attr]{
      color: red;
    }
  }
  .box{
    width: 100px;
    height: 100px;
    padding: 10px;
    margin: 10px;
    border: 1px solid green;
    background: orange;
    /*box-sizing: content-box;*/
    /*box-sizing: border-box;*/
  }
  .style{
    .border{
      width: 100px;
      height: 100px;
      border: 1px dotted red;
    }
  }
</style>
