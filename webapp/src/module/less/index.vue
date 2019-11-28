<template>
  <div class="grid">
    <div class="content">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return {

        }
      }
    }
</script>

<style scoped lang="less">
  .grid{
    width: 1000px;
    height: 800px;
    border: 1px solid;
    padding: 200px;
    .content{
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      background: red;
    }
    /*.a{*/
      /*border: 1px solid red;*/
    /*}*/
    /*.b{*/
      /*border: 1px solid yellow;*/
      /*display: grid;*/
      /*grid-template-rows: repeat(2, 1fr);*/
      /*grid-template-columns: 100px repeat(2, 1fr);*/
      /*.b1{*/
        /*border: 1px solid;*/
      /*}*/
      /*.b2{*/
        /*border: 1px solid;*/
      /*}*/
      /*.b3{*/
        /*border: 1px solid;*/
      /*}*/
    /*}*/
    /*.c{*/
      /*border: 1px solid orange;*/
    /*}*/
  }
</style>
