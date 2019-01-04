<template>
    <div class="one">hello</div>
</template>

<script>
    export default {
        name: "transform"
    }
</script>

<style scoped>
  .one{
    width:100px;
    height:100px;
    background-color:yellow;
    margin-left: 200px;
    transform:translate(100px,0px);  /* translate偏移*/

    /*transform:rotate(45deg);    rotate旋转*/
    /*transform: skew(45deg);   skew倾斜*/
    /*transform: scale(2,2);    scale倍数缩放*/
  }
</style>
