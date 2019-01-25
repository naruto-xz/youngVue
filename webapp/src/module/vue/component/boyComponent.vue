<template>
    <div>
      <button @click="add">传递数据</button>
      <div>{{card}}</div>
    </div>
</template>

<script>
    import bus from "./bus.js"
    export default {
      data(){
        return {
          card: 1
        }
      },
      methods: {
        add(){
          this.card++;
          bus.$emit("card",this.card)
        }
      }
    }
</script>

<style scoped>

</style>
