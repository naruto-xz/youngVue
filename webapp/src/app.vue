<template>
  <div>
    <!--<header-tab></header-tab>-->
    <!--<load></load>-->
      <router-view></router-view>
    <!--<footer-tab></footer-tab>-->

  </div>
</template>
<script>
  import headerTab from './components/headerTab.vue'
  import footerTab from './components/footerTab.vue'
  export default {
    name: 'app',
    components: {
      headerTab,
      footerTab,
    }
  }
</script>


<style lang="less">

</style>
