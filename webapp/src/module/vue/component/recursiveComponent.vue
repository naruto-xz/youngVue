<template>
  <div class="dataBaseTree">
    <div v-for="(item , index) in list" :key="index" class="content">
      <p class="label" @click="showChildren(item)">{{item.label}}</p>
      <recursive-component :list="item.children" v-if="item.children && item.show"></recursive-component>
    </div>
  </div>
</template>

<script>
export default {
  name: "recursiveComponent",
  props: {
    list: {
      required: true,
      type: Array
    }
  },
  methods: {
    showChildren (item) {
      item.show = !item.show;
    }
  }
}
</script>

<style lang="less">
  .dataBaseTree{
    padding-left:20px;
    .content{
      line-height: 40px;
      .label{
        &:hover{
          cursor: pointer;
          color: orange;
        }
      }
    }
  }
</style>
