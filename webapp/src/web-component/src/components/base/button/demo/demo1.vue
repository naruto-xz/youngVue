<template>
  <div>
    <np-button @click="btn">默认按钮</np-button>
    <np-button @click="btn" label="默认A" color="primary" size="mini">按钮A</np-button>
    <np-button @click="btn" label="默认B" color="success" size="small">按钮B</np-button>
    <np-button @click="btn" label="默认C" color="danger" size="normal">按钮C</np-button>
    <np-button @click="btn" label="默认D" color="warning" size="big">按钮D</np-button>
    <np-button @click="btn" label="默认E" color="warning" size="big" :disabled="true">禁用按钮E</np-button>
  </div>
</template>

<script>
  import npButton from "../index.vue"
  export default {
    name: "npbutton",
    components: {
      npButton
    },
    data() {
      return {
        options: {}
      };
    },
    methods: {
      btn() {
        console.log("btn")
      }
    }
  };
</script>

<style lang="scss" scoped>
/*  .xui-btn-style{
    color: red;
  }*/
</style>
