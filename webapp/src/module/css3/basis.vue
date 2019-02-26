<template>
    <div>
      <h5>{{title}}</h5>
      <div>
        <div class="red">颜色</div>
      </div>
      <div>
        <div>布局</div>
        <div class="box">
          <span class="number">123</span>
        </div>

        <div class="content">
          <div>test</div>
          <!--<div>test1</div>-->
          <!--<div class="two">test1</div>-->
        </div>
        <div class="content-font">测试家圣诞节里卡时间段垃圾胜利大街垃圾撒点了卡接收到</div>

      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          title: 'css基础'
        }
      }
    }
</script>

<style lang="less" scoped>
  @import "./basis.less";
  .box{
    /*box-sizing: content-box;*/
    /*box-sizing: border-box;*/
    width: 100px;
    height: 100px;
    margin-left: 50px;
    /*padding: 20px;*/
    /*border: 5px solid blue;*/
    background: red;
    border: 1px solid blue;
    box-shadow: 0 0 10px 1px yellow inset;
    .number{
      margin-top: 10px;
    }
  }
  .one{
    display: inline-block;
    width: 100px;
    height: 100px;
    background: blue;
    /*position: relative;*/
  }
  .two{
    display: inline-block;
    width: 100px;
    height: 100px;
    background: red;
    /*position: relative;*/
  }
  .content{
    width: 500px;
    height: 200px;
    line-height: 200px;
    background: red;
  }
  .content-font{
    width: 500px;
    height: 200px;
    background: url("./test.jpg") no-repeat;
    background-size: 500px 200px;
  }
</style>
