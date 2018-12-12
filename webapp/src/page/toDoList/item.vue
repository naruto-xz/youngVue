<template>
  <div>
    <input type="checkbox" v-model="todo.completed"/>
    <label>{{todo.content}}</label>
    <button @click="deleteTodo">delete</button>
  </div>
</template>

<script>
    export default {
        name: "item",
        props: {
          todo: {
            type: Object,
            required: true
          }
        },
        methods: {
          deleteTodo: function () {

          }
        }
    }
</script>

<style>

</style>

<!--<template>-->
  <!--<div>-->
    <!--<ul>-->
      <!--<li @click="handleDelete">{{content}}</li>-->
    <!--</ul>-->
  <!--</div>-->
<!--</template>-->
<!--<script>-->
  <!--export default {-->
    <!--props:["content","index"],-->
    <!--methods:{-->
      <!--handleDelete(){-->
        <!--this.$emit("delete",this.index)-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->
<!--<style>-->

<!--</style>-->
