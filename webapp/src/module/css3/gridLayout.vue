<template>
  <div>
    <!--父容器属性-->
    <div class="box">
      <div class="a">a</div>
      <div class="b">b</div>
    </div>
    <!--子元素属性-->
    <div class="box1">
      <div class="c">c</div>
      <div class="d">d</div>
    </div>
  </div>
</template>

<script>
    export default {
    }
</script>

<style lang="less" scoped>
  .box{
    width: 500px;
    height: 200px;
    margin-bottom: 20px;
    background: orange;
    display: grid;
    /*grid-template-columns: 20% auto;*/
    /*grid-template-columns: repeat(2,1fr);*/
    /*grid-template-rows: 30% auto;*/
    justify-items: center;
    align-items: center;
    .a{
      width: 100px;
      height: 40px;
      background: yellow;
    }
    .b{
      width: 100px;
      height: 40px;
      background: green;
    }
  }
  .box1{
    width: 500px;
    height: 200px;
    background: orange;
    display: grid;
    justify-items: center;
    align-items: center;
    .c{
      justify-self: flex-end;
      background: yellow;
    }
    .d{
      align-self: flex-start;
      background: green;
    }
  }
</style>
