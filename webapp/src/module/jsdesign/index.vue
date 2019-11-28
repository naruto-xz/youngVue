<template>
    <div>
<!--      <h3>jsDesign</h3>-->
<!--      <div>-->
<!--        <h2>面向对象编程</h2>-->
<!--        <flex-language></flex-language>-->
<!--        <object-oriented></object-oriented>-->
<!--      </div>-->
      <div>
        <h2 @click="test">创建型设计模式</h2>
        <simple-factory-mode>
          <template slot-scope="a" slot="age">
            <div>{{a.age}}</div>
          </template>
        </simple-factory-mode>
        <factory-method-mode :num="num"></factory-method-mode>
        <div class="agess" v-if="show">{{age}}</div>
      </div>
    </div>
</template>

<script>
    import flexLanguage from "./oop/flexLanguage.vue"
    import objectOriented from "./oop/objectOriented.vue"
    import simpleFactoryMode from "./createdDesignMode/simpleFactoryMode.vue"
    import factoryMethodMode from "./createdDesignMode/factoryMethodMode.vue"
    export default {
      components:{
        flexLanguage,
        objectOriented,
        simpleFactoryMode,
        factoryMethodMode
      },
      data(){
        return {
          show: false,
          age: '',
          // num: undefined
        }
      },
      methods: {
        test(){
          this.show = true;
          this.age = 23;
        }
      },
      mounted() {

      }
    }
</script>

<style scoped>

</style>
