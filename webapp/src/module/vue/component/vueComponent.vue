<template>
    <div>
      <h5>{{title}}</h5>
      <div>
        <p>使用一个全局组件</p>
        <global-component></global-component>
      </div>
      <div>
        <p>使用一个局部组件</p>
        <part-component></part-component>
      </div>
      <div>
        <p>使用props传递数据</p>
        <props-component :msg1="message1" :msg2="message2"></props-component>
        <!--传递对象校验-->
        <!--<props-component :text="text" :count="count" :msg="message3"></props-component>-->
      </div>
    </div>
</template>

<script>
    import partComponent from "./partComponent.vue"
    import propsComponent from "./propsComponent.vue"
    export default {
      components:{
        partComponent,
        propsComponent
      },
      data(){
        return{
          title: "vue组件",
          message1: "传递字符串",
          message2: {
            name: "传递对象",
          },
          text: "传参校验",
          count: 3,
          message3: {
            name: "传递对象校验",
            checked: true
          }
        }
      }
    }
</script>

<style scoped>

</style>
