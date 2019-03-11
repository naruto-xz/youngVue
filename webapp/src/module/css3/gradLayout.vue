<template>
  <div>
    <div class="box">
      <div class="a" :style="{color:color}">1</div>
      <div class="b">2</div>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          color: 'red'
        }
      }
    }
</script>

<style lang="less" scoped>
  .box{
    width: 300px;
    height: 300px;
    background: red;
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
