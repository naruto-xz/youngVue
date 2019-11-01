<template>
  <input type="text" v-model="person.age">
</template>

<script>
export default {
  props: ['person'],
  model: {
    prop: 'person'
  }
}
</script>

<style scoped>

</style>
