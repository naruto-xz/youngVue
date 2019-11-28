<template>
    <div>
      <div>{{title}}</div>
      <div>
        <span>{{number}}</span>
        <button @click="add">增加</button>
      </div>
    </div>
</template>

<script>
    export default {
      data(){
          return {
            title: "生命周期",
            number: 1
          }
      },
      methods: {
        add(){
          this.number++;
        }
      },
      beforeCreate: function () {
        console.log('beforeCreate 钩子执行...');
        console.log(this.$el)  //undefined
        console.log(this.number)  //undefined
      },
      created: function () {
        console.log('cteated 钩子执行...');
        console.log(this.$el)  //undefined
        console.log(this.number)  //1
      },
      beforeMount: function () {
        console.log('beforeMount 钩子执行...');
        console.log(this.number)
      },
      mounted: function () {
        console.log('mounted 钩子执行...'); //完成替换
        console.log(this.number)
      },
      beforeUpdate: function () {
        console.log('beforeUpdate 钩子执行...');
        console.log(this.number);  //2
      },
      updated: function () {
        console.log('updated 钩子执行...');
        console.log(this.number);  //2
      },
      beforeDestroy: function () {
        console.log('beforeDestroy 钩子执行...');
        console.log(this.number)
      },
      destroyed: function () {
        console.log('destroyed 钩子执行...');
        console.log(this.number)
      }
    }
</script>

<style scoped>

</style>
