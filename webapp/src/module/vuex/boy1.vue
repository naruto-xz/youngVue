<template>
    <div>
      <div>{{count}}男孩</div>
      <button @click="add">增加</button>
      <button @click="cut">减少</button>
      <button @click="asyncAdd">异步增加</button>
    </div>
</template>

<script>
    export default {
      computed: {
        count(){
          return this.$store.state.boy.count;
        }
      },
      methods: {
        add(){
          this.$store.commit("increment",2);
        },
        cut(){
          this.$store.commit("decrease");
        },
        asyncAdd(){
          this.$store.dispatch("asyncIncrement").then(()=>{
            console.log(this.$store.state.count);
          });
        }
      }
    }
</script>

<style scoped>

</style>
