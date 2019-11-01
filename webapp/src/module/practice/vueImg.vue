<template>
  <div>
    <div class="one">
      <span>方式一</span>
      <img src="./error.png" alt="">
    </div>
    <div class="two">
      <span>方式二</span>
      <div class="error"></div>
    </div>
    <div class="three">
      <span>方式三</span>
      <img :src="src" alt="">
    </div>
  </div>
</template>

<script>
import error from './error.png'
export default {
  name: "vueImg",
  data () {
    return {
      src: error
      // src: require('./error.png')
      // src: '/static/image/error.png'
    }
  }
}
</script>

<style scoped lang="scss">
  .one{
    width: 100px;
    height: 100px;
  }
  .two{
    margin-top: 100px;
    .error{
      width: 200px;
      height: 160px;
      background: url("./error.png");
    }
  }
  .three{
    .error{
      width: 200px;
      height: 160px;
    }
  }
</style>
