<template>
<!--      <div class="one"></div>-->
<!--      <div class="two">-->
<!--        <li>1</li>-->
<!--        <li>2</li>-->
<!--        <li>3</li>-->
<!--      </div>-->
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
  </div>
</template>

<script>
export default {
    name: "other"
}
</script>

<style scoped lang="less">
  .one {
    width: 100px;
    height: 100px;
    border:10px solid #ddd;
    border-image: linear-gradient(red,yellow) 30 30;
  }
  .two{
    /*li{*/
    /*  width: 100px;*/
    /*  height: 100px;*/
    /*  &:not(:last-child){*/
    /*    border: 1px solid green;*/
    /*  }*/
    /*}*/
    li{
      width: 100px;
      height: 100px;
      &:first-child ~ li {border: 1px solid #666; }
    }
  }
  .box {
    width: 500px;
    height: 100px;
    overflow: auto;
    .father{
      height: 150px;
      white-space: nowrap;
      .sun{
        display: inline-block;
        width: 200px;
        height: 100%;
        border: 1px solid red;
      }
    }
  }
</style>
