<template>
    <div>
      <button @click="add">增加</button>
      <div>{{total}}</div>
    </div>
</template>

<script>
    export default {
      props:["value"],
      data(){
        return {
          total:0,
          count: 0
        }
      },
      methods:{
        // add(){
        //   this.count++;
        //   this.$emit("add",this.count)
        // }
        add(){
          this.total = ++this.count;
          this.$emit("input",this.total)
        }
      },
      mounted() {
        this.total = this.value;
      }
    }
</script>

<style scoped>

</style>
