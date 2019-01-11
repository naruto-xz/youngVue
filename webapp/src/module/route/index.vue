<template>
  <!--<div>{{getId}}</div>-->
  <div>
    <div>{{title}}</div>
    <button v-for="item in data" @click="change(item.value)">{{item.text}}</button>
    <button @click="goBack">返回上一级页面</button>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          title: "父路由",
          data: [
            {
              text: "苹果",
              value: "/route/apple"
            },
            {
              text: "橘子",
              value: "/route/orange"
            }
          ]
        }
      },
      methods: {
        change(value){
          this.$router.push(value)
        },
        goBack(){
         this.$router.go(-1);
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
