<template>
  <div>
    <div class="box">
      <div class="a">a</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
  .box{
    width: 400px;
    height: 200px;
    background: red;
  }
  //屏幕尺寸小于320px
  @media screen and (max-width: 320px){
    .a{
      width: 100px;
      height: 100%;
      background: blue;
    }
  }
  //屏幕尺寸大于321px
  @media screen and (min-width: 320px){
    .a{
      width: 200px;
      height: 100%;
      background: aquamarine;
    }
  }
  /*<link rel="stylesheet" type="text/css" href="styleB.css"  media="screen and (min-width: 600px) and (max-width: 800px)">*/
</style>
