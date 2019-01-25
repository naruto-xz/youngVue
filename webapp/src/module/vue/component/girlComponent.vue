<template>
    <div>
      <p>接收数据</p>
      <div>{{newCard}}</div>
    </div>
</template>

<script>
    import bus from "./bus.js"
    export default {
      data(){
        return {
          newCard: 0
        }
      },
      methods: {

      },
      mounted() {
        bus.$on("card",(data)=>{
          this.newCard = data;
        })
      }
    }
</script>

<style scoped>

</style>
