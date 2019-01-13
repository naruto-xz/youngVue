<template>
  <!--<div>{{getId}}</div>-->
  <div>
    <div>{{title}}</div>
    <button v-for="item in data" @click="change(item)">{{item.text}}</button>
    <button @click="goBack">返回上一级页面</button>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          title: "父路由",
          bananaId: 3,
          passId: 4,
          data: [
            {
              name: "apple",
              text: "苹果",
              value: "/route/apple"
            },
            {
              name: "orange",
              text: "橘子",
              alias: "/route/o",
              value: "/route/orange"
            },
            {
              name: "banana",
              text: "香蕉",
              value: "/route/banana"
            },
            {
              name: "pass",
              text: "路由组件传参",
              value: "/route/pass"
            }
          ]
        }
      },
      methods: {
        change(item){
          if(item.text == "香蕉"){
            this.$router.push({path: `${item.value}/${this.bananaId}`})
            // this.$router.push({name: item.name, params: {id : this.id}}) //命名路由
          }else if(item.text == "橘子"){
            this.$router.push(item.alias) //别名
          }else if(item.text == "路由组件传参"){
            this.$router.push({path: `${item.value}/${this.passId}`})
          }else{
            this.$router.push(item.value)
            // this.$router.push({name: item.name})
          }
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
