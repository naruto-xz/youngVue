<template>
    <div>
      <div>{{title}}</div>
      <div>
        <count-to :start="start" :end="end" :duration="3"></count-to>
      </div>
    </div>

</template>

<script>
    import countTo from "./count-to/index.vue"
    export default {
      components:{
        countTo
      },
      data(){
          return {
            title: "组件系列",
            start: 0,
            end: 2019
          }
      },
      methods:{
        count(){
          this.end++;
        }
      },
      mounted() {
        setInterval(()=>{
          this.count();
        },10000)
      }
    }
</script>

<style scoped>

</style>
