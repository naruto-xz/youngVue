<template>
  <div>
    <todo-header></todo-header>
    <todo-center></todo-center>
  </div>
</template>

<script>
    import todoHeader from './todoHeader.vue'
    import todoCenter from  './todoCenter.vue'
    export default {
        name: "index",
        components:{
          todoHeader,
          todoCenter
        }
    }
</script>

<style>

</style>


<!--<template>-->
  <!--<div>-->
    <!--<div>-->
      <!--<input type="text" v-model="message">-->
      <!--<button @click="submit">提交</button>-->
    <!--</div>-->
    <!--<todo-item v-for="(item,index) in list" :key="index" :content="item" :index="index" @delete="deleteItem"></todo-item>-->
    <!--&lt;!&ndash;<div>&ndash;&gt;-->
      <!--&lt;!&ndash;<ul>&ndash;&gt;-->
        <!--&lt;!&ndash;<li v-for="(item,index) in list" :key="index">{{item}}</li>&ndash;&gt;-->
      <!--&lt;!&ndash;</ul>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import todoItem from "./item.vue"-->
  <!--export default {  //es6 导出模块-->
    <!--components:{-->
      <!--todoItem-->
    <!--},-->
    <!--data () {   //必须是函数，因为要return给外面用-->
      <!--return {-->
        <!--message: '',-->
        <!--list: []-->
      <!--}-->
    <!--},-->
    <!--methods: {-->
      <!--submit(){-->
        <!--this.list.push(this.message);-->
        <!--this.message = "";-->
      <!--},-->
      <!--deleteItem(index){-->
        <!--this.list.splice(index,1)-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style>-->

<!--</style>-->
