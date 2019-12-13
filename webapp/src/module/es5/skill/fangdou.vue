<template>
  <div>
    <Button @click="operate">debounce</Button>
    <Button @click="operate1">throttle</Button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      delay: null,
      delay1: null
    }
  },
  methods: {
    operate () {
      this.delay(4,5);
    },
    operate1 () {
      this.delay1(8,5);
    },
    sum(a,b){
      console.log(a+b);
    },
    reduce (c,d) {
      console.log(c-d);
    }
  },
  mounted () {
    this.delay = $toolkit.debounce(this.sum);
    this.delay1 = $toolkit.throttle(this.reduce);
  }
}
</script>

<style scoped>

</style>
