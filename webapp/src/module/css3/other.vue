<template>
    <div>
      <div class="one"></div>
      <div class="two">
        <li>1</li>
        <li>2</li>
        <li>3</li>
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
</style>
