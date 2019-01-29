<template>
    <div>
      <p>{{title}}</p>  <!--混入-->
      <p>{{text}}</p>   <!--混入数据-->
    </div>
</template>

<script>
    import mixinOne from "./mixinOne.js"
    export default {
      myOption: 'hello!',
      mixins:[mixinOne],
      data(){
        return {
          title: "混入",  //字段相同时原数据优先
        }
      },
      methods: {
        eat(){
          console.log("吃苹果")  //字段相同时原数据优先
        }
      },
      mounted() {
        this.eat(); //吃苹果
        this.drink(); //喝饮料
      },
      created(){
        console.log("再调用原组件的钩子函数");
      }
    }
</script>

<style scoped>

</style>
