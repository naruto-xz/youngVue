<template>
    <div>
      <h5>{{title}}</h5>
    </div>
</template>

<script>
    import {name,obj} from './a.js'
    import b from './b.js'
    export default {
      data(){
        return{
          title: 'webpack打包'
        }
      },
      mounted() {
        console.log(name);  //张三
        console.log(obj); //{age: 23}
      }
    }
</script>

<style scoped>

</style>
