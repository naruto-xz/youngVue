<template>
    <!--<transition name="multiple-fade">-->
        <!--<slot></slot>-->
    <!--</transition>-->
  <transition :name="type">
    <slot></slot>
  </transition>
</template>

<script>
    export default {
      props:['type'],
    }
</script>

<style lang="less" scoped>
  .multiple-enter,.multiple-leave-to{
    opacity: 0;
  }
  .multiple-enter-active,.multiple-leave-active{
    transition: opacity 1s;
  }
  .time-enter,.time-leave-to{
    opacity: 0;
  }
  .time-enter-active,.time-leave-active{
    transition: opacity 5s;
  }

</style>
