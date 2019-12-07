<template>
    <div class="a">transform</div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="less">
  .a{
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
    background: orange;
    transform: translateX(200px);
    /*transform: rotate(45deg);*/
    /*transform: skew(45deg);*/
    /*transform: scale(2,2);*/
  }

/*  .a{
    width:100px;
    height:100px;
    background-color:yellow;
    margin-left: 200px;
    transform:translate(100px,0px);  !* translate偏移*!
    !*transform:rotate(45deg);    rotate旋转*!
    !*transform: skew(45deg);   skew倾斜*!
    !*transform: scale(2,2);    scale倍数缩放*!
  }*/
</style>
