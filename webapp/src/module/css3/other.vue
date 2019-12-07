<template>
  <div class="box">
    <div class="father">
      <div class="sun">1</div>
      <div class="sun">2</div>
      <div class="sun">3</div>
      <div class="sun">4</div>
      <div class="sun">5</div>
      <div class="sun">6</div>
      <div class="sun">7</div>
      <div class="sun">8</div>
    </div>
    <div class="a"></div>
    <div class="b"></div>
    <div class="c"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="less">
  .box {
    .father{
      height: 150px;
      width: 500px;
      overflow: auto;
      white-space: nowrap;
      .sun{
        display: inline-block;
        width: 200px;
        height: 100%;
        border: 1px solid red;
      }
    }
  }
  .a {
    width: 100px;
    height: 100px;
    border:10px solid #ddd;
    border-image: linear-gradient(red,yellow) 30 30;
  }
  .b{
    width: 200px;
    height: 200px;
    background: orange url("./test.jpg") bottom right no-repeat;
    background-size: 100px 100px;
  }
  .c{
    width: 200px;
    height: 200px;
    background-image: linear-gradient(to right, #e66465, #9198e5);
  }
</style>
