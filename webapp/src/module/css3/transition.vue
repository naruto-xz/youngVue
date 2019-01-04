<template>
    <div class="transition-module">
      <h4>transition</h4>
      <div class="demo1"></div>
    </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
    .transition-module{
      .demo1{
        width:100px;
        height:100px;
        background:blue;
        transition: width 2s;
      }
      .demo1:hover{
        width: 300px;
      }
    }
</style>
