<template>
    <div>
      <h5 class="webpack-title">{{title}}</h5>
    </div>
</template>

<script>
    import {name,obj} from './a.js'
    // import b from './b.js'
    export default {
      data(){
        return{
          title: 'webpack打包1'
        }
      },
      methods:{
        operator(){
          console.log(name);  //张三
          console.log(obj); //{age: 23}
          // console.log(b); //{title: "默认导出"}
          // console.log(b(1,2)); //3
        }
      },
      mounted() {
        this.operator();
      }
    }
</script>

<style scoped>
  .webpack-title{
    color: green;
  }
</style>
