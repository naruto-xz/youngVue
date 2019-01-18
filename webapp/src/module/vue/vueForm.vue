<template>
    <div>
      <!--其实v-model是个语法糖-->
      <!--<input type="text" :value="message" @input="message = $event.target.value">-->
      <div>
        <input type="text" v-model="message1">
        {{message1}}
      </div>
      <div>
        <textarea  cols="30" rows="10" v-model="message2"></textarea>
        {{message2}}
      </div>
      <div>
        <input type="radio" :checked="ckecked">单个是否选中
        <input type="radio"  value="男" v-model="sex">男
        <input type="radio"  value="女" v-model="sex">女
        {{sex}}
      </div>
      <div>
        <input type="checkbox"  value="Jack" v-model="checkedNames">Jack
        <input type="checkbox"  value="John" v-model="checkedNames">John
        <input type="checkbox"  value="Mike" v-model="checkedNames">Mike
        {{checkedNames}}
      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          message1: "",
          message2: "",
          ckecked: true,
          sex: "",
          checkedNames:[] //多选框必须为数组
        }
      }
    }
</script>

<style scoped>

</style>
