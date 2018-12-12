<!--<template>-->
  <!--<div id="app">-->
    <!--<img src="./image/logo.png">-->
    <!--<router-view/>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->

<!--</script>-->

<!--<style>-->
<!--#app {-->
  <!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
    <!-- -webkit-font-smoothing: antialiased;-->
    <!-- -moz-osx-font-smoothing: grayscale;-->
  <!--text-align: center;-->
  <!--color: #2c3e50;-->
  <!--margin-top: 60px;-->
<!--}-->
<!--</style>-->



//慕课webpack
<template>
  <div>
    <header-tab></header-tab>
    <!--<load></load>-->
    <router-view></router-view>
    <footer-tab></footer-tab>
    <button-demo></button-demo>
    <input-demo></input-demo>
    <radio-demo></radio-demo>
    <checkbox-demo></checkbox-demo>
    <select-demo></select-demo>

  </div>
</template>

<script>
  import headerTab from './components/headerTab.vue'
  import footerTab from './components/footerTab.vue'

  import buttonDemo from './web-component/src/components/base/button/demo/demo1.vue'
  import inputDemo from './web-component/src/components/base/input/demo/demo1.vue'
  import radioDemo from './web-component/src/components/base/radio/demo/demo1.vue'
  import checkboxDemo from './web-component/src/components/base/checkbox/demo/demo1.vue'
  import selectDemo from './web-component/src/components/base/select/demo/demo1.vue'
  // import demoOne from './web-component/src/components/composite/form/demo/demo1.vue'

  export default {
    name: 'app',
    components: {
      headerTab,
      footerTab,
      buttonDemo,
      inputDemo,
      radioDemo,
      checkboxDemo,
      selectDemo
    }
  }
</script>


<style></style>
