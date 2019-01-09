<template>
  <!--<div>{{getId}}</div>-->
  <div>
    <div>{{title}}</div>
    <button v-for="item in data" @click="change(item.value)">{{item.text}}</button>
    <router-view></router-view>
  </div>
</template>

<script>
  import modulesw from "../router/router.js"
  console.log(modulesw);
    export default {
      data(){
        return {
          title: "父路由",
          data: [
            {
              text: "苹果",
              value: "apple"
            },
            {
              text: "橘子",
              value: "orange"
            }
          ]
        }
      },
      methods: {
        change(value){
          this.$route.push(value)
        }
      },
      computed:{
        getId(){
          return this.$route.params.id
        }
      }
    }
</script>

<style scoped>

</style>
