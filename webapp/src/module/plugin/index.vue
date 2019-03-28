<template>
  <div>
    <codemirror ref="myCm" class="code" v-model="content" :options="cmOptions"></codemirror>
  </div>
</template>

<script>
  import {codemirror} from 'vue-codemirror'
  import 'codemirror/lib/codemirror.css'
    export default {
      components:{
        codemirror
      },
      data(){
        return{
          content: '',
          cmOptions:{
            lineNumbers: true,
          },

        }
      },
      methods:{

      },
      mounted() {
        new Promise((resolve)=>{
          if(true){
            resolve('success');
          }
        }).then(res=>{
          if(res){
            this.content = '123';
          }
        })
      }
    }
</script>

<style scoped>

</style>
