<template>
  <div>
      <input type="text" placeholder="接下去做什么" @keyup.enter="addTodo"/>
      <item :todo="todo" v-for="todo in todos" :key="todo.id"></item>
      <tabs></tabs>
  </div>
</template>

<script>
    import Item from "../toDoList/item.vue";
    import Tabs from "../toDoList/tabs.vue";
    export default {
      name: "todoCenter",
      data: function(){
        return {
          id: 0,
          todos: []
        }
      },
      components: {Tabs, Item},
      methods: {
          addTodo: function (e) {
            this.todos.unshift({
              id: this.id++,
              content: e.target.value,
              completed: false
            });
            e.target.value = ''
          }
        }
    }
</script>

<style>

</style>
