<template>
    <div>
      <div>其实v-model是个语法糖</div>
      <input type="text" :value="message" @input="message = $event.target.value">
      {{message}}
      <div>绑定对象,在组件上的应用</div>
      <model-form v-model="person"></model-form>
      {{person.age}}
    </div>
</template>

<script>
    import modelForm from './modelForm';
    export default {
      components: {
        modelForm
      },
      data(){
        return {
          message: "",
          person: {
            name: '张三',
            age: '23'
          }
        }
      },
    }
</script>

<style scoped>

</style>
