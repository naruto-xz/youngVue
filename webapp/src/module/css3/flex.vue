<template>
    <div>
      <!--<div class="box">-->
        <!--&lt;!&ndash;<div class="item">1</div>&ndash;&gt;-->
        <!--<div class="a">111</div>-->
        <!--<div class="b">222</div>-->
      <!--</div>-->

      <div class="InputAddOn">
        <span class="InputAddOn-item">213123123</span>
        <input class="InputAddOn-field">
        <button class="InputAddOn-item">2313</button>
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
    width: 200px;
    height: 100px;
    background: red;
    display: flex;
    /*flex-direction: row;*/
    /*flex-wrap: nowrap;*/
    /*flex-flow: row wrap;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    .item{
      width: 40px;
      height: 40px;
      background: green;
    }
    .a{
      width:40px;
      height: 20px;
      background: yellow;
      /*flex-grow: 1;*/
      /*flex-shrink: 0;*/
      /*flex-basis: 100px;*/
      /*flex: 1;*/
      /*align-self: center;*/

    }
    .b{
      width: 40px;
      height: 20px;
      background: green;
      /*flex: 1;*/
      /*flex-grow: 1;*/
      /*flex-shrink: 1;*/
    }

    /*.InputAddOn {*/
      /*display: flex;*/
    /*}*/

    /*.InputAddOn-field {*/
      /*flex: 1;*/
    /*}*/

  }
</style>
