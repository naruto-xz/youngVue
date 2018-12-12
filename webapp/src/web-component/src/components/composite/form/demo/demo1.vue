<template>
  <xui-form :options="options"></xui-form>
</template>

<script>
    import xuiForm from "../index.vue"
    export default {
      name: "demo1",
      components:{
        xuiForm
      },
      data(){
        return {
          options: {
            fields: [
              {
                label: "文本框",
                widget: "input",
                name: "inputname"
              }
            ]
          }
        }
      }
    }
</script>

<style scoped>

</style>
