<template>
  <div>
    <!--<Slider v-model="value" range></Slider>-->
    <Input v-model="value" size="large" placeholder="large size"  style="width: 200px" @on-focus="getValue"/>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          // value: [20,50]
          value: 10
        }
      },
      methods:{
        getValue(){
          console.log(1111);
        }
      }
    }
</script>

<style scoped lang="less">
</style>
