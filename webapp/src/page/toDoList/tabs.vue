<template>
    <div>
      <div class="block">2 item left</div>
      <button v-for="state in states" :key="state" @click="toggle(state)">
          {{state}}
      </button>
      <div class="block" @click="clear">clear completed</div>
    </div>
</template>

<script>
    export default {
        name: "tabs",
        data: function(){
          return {
            states: ['all', 'active', 'completed']
          }
        },
        methods: {
          clear: function () {

          },
          toggle: function () {

          }
        }
    }
</script>

<style>
    .block{
      display: inline-block;
    }
</style>
