<template>
    <div>
      <div class="box">
        <div class="a">111</div>
        <div class="b">222</div>
      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return{

        }
      },
      methods:{

      },
      mounted() {

      }
    }
</script>

<style lang="less" scoped>
  .box{
    width: 100px;
    height: 100px;
    background: red;
    display: flex;
    /*flex-direction: row;*/
    /*flex-wrap: nowrap;*/
    /*flex-flow: row wrap;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    .a{
      width: 60px;
      height: 20px;
      background: yellow;
    }
    .b{
      width: 60px;
      height: 20px;
      background: green;
    }
  }
</style>
