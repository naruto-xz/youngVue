<template>
  <div>
    <div>{{count}}女孩</div>
    <button @click="add">增加</button>
    <button @click="cut">减少</button>
  </div>
</template>

<script>
    export default {
      computed: {
        count(){
          return this.$store.state.girl.count;
        }
      },
      methods: {
        add(){
          this.$store.commit("increment1");
        },
        cut(){
          this.$store.commit("decrease1");
        }
      }
    }
</script>

<style scoped>

</style>
