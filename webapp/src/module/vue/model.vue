<template>
    <div>
      <!--其实v-model是个语法糖-->
      <input type="text" :value="message" @input="message1 = $event.target.value">
      {{message}}
      {{message1}}
      <!--<input type="text" v-model="message">-->
      <!--{{message}}-->
    </div>
</template>

<script>
    export default {
      data(){
        return {
          message: "",
          message1: "",
        }
      },
      // watch:{
      //   message(){
      //     this.message = 2;
      //   }
      // }
    }
</script>

<style scoped>

</style>
