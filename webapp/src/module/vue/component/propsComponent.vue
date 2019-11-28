<template>
    <div>
      <p>{{msg1}}</p>
      <p>{{msg2.name}}</p>
      <p>{{message1}}</p>
    </div>
</template>

<script>
    export default {
        props:['msg1','msg2'],
      // props: {
      //   text: {
      //     type: String,
      //     required: true ,  //是否必须传，传入为null时报错
      //     default: "默认参数值"  //传承为undefined时生效
      //   },
      //   count: {
      //     type: Number
      //   },
      //   msg: {
      //     type: Object
      //   }
      // },
      data(){
        return {
          title: "props传递数据",
          message1: this.msg1,
        }
      },
      methods: {

      },
      mounted() {
      }
    }
</script>

<style scoped>

</style>
