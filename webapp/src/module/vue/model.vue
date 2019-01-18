<template>
    <div>
      <!--其实v-model是个语法糖-->
      <!--<input type="text" :value="message" @input="message = $event.target.value">-->
      <input type="text" v-model="message">
      {{message}}
    </div>
</template>

<script>
    export default {
      data(){
        return {
          message: ""
        }
      }
    }
</script>

<style scoped>

</style>
