<template>
    <div>
      <h4>{{title}}</h4>
      <!--生命周期-->
      <!--<life-cycle></life-cycle>-->
      <!--基础语法一 实例对象配置-->
      <!--<base-grammer-one></base-grammer-one>-->
      <!--基础语法二 DOM相关操作-->
      <!--<base-grammer-two></base-grammer-two>-->
      <!--高级语法 v-model-->
      <!--<model></model>-->
      <!--高级语法 表单应用-->
      <!--<vue-form></vue-form>-->
      <!--组件-->
      <!--<vue-component></vue-component>-->
      <!--过渡-->
      <transition></transition>
      <!--混入-->
      <!--<mixins></mixins>-->
      <!--自定义指令-->
      <!--<directive></directive>-->
      <!--render函数-->
      <!--<render></render>-->
      <!--JSX-->
      <!--<jsx></jsx>-->
    </div>
</template>

<script>
    import lifeCycle from "./lifeCycle.vue"
    import baseGrammerOne from "./baseGrammerOne.vue"
    import baseGrammerTwo from "./baseGrammerTwo.vue"
    import model from "./model.vue"
    import vueForm from "./vueForm.vue"
    import vueComponent from "./component/vueComponent.vue"
    import transition from "./transition/transition.vue"
    import mixins from "./mixins/mixins.vue"
    import directive from "./directive/directive.vue"
    import render from "./render/render.vue"
    import jsx from "./jsx/jsx.vue"
    export default {
      components:{
        lifeCycle,
        baseGrammerOne,
        baseGrammerTwo,
        model,
        vueForm,
        vueComponent,
        transition,
        mixins,
        directive,
        render,
        jsx
      },
      data(){
        return {
          title: "vue知识库",
        }
      },
    }
</script>

<style scoped>

</style>
