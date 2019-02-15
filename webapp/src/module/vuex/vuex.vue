<template>
    <div>
      <h5>{{title}}</h5>
      <boy></boy>
      <boy1></boy1>
      <girl></girl>
      <girl1></girl1>
    </div>
</template>

<script>
  import boy from './boy.vue'
  import boy1 from './boy1.vue'
  import girl from './girl.vue'
  import girl1 from './girl1.vue'
  export default {
    components: {
      boy,
      boy1,
      girl,
      girl1,
    },
    data(){
      return {
        title: 'vuex'
      }
    }
  }
</script>

<style scoped>

</style>
