<template>
  <div class="scss">
    <div class="a">a</div>
    <div class="b">
      <div class="b0"></div>
      <div class="b1"></div>
      <div class="b2"></div>
      <div class="b3"></div>
    </div>
    <div class="c">
      <div class="c0"></div>
      <div class="c1"></div>
    </div>
    <div class="d">d</div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
  $color: red;  //1.变量
  .scss{
    .a{
      color: $color;
    }
    .b{
      $bgList: (0, red),(1, green),(2, yellow),(3, orange);
      @each $key, $bg in $bgList{ //遍历
        .b#{$key}{
          width: 40px;
          height: 40px;
          background: $bg;
        }
      }
    }
  }
</style>
