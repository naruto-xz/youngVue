<template>
    <div>
      <div>{{sunTotal}}</div>
      <button @click="change">修改父组件</button>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          sunTotal: 1
        }
      },
      methods: {
        add(){
          this.sunTotal++;
        },
        change(){
          this.$parent.title = "修改vue组件";
        }
      }
    }
</script>

<style scoped>

</style>
