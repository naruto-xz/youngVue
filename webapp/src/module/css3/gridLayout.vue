<template>
    <div class="box">
      <div class="a">1</div>
      <!--<div class="b">2</div>-->
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
  .box{
    width: 300px;
    height: 300px;
    background: red;
    display: grid;
    /*grid-template-rows: 200px 100px;*/
    /*grid-template-columns: 100px 100px;*/
    .a{
      width: 100px;
      height: 100px;
      background: yellow;
    }
    .b{
      width: 100px;
      height: 100px;
      background: green;
    }
  }
</style>
