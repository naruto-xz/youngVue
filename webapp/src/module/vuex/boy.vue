<template>
    <div>
      <div>{{count}}男孩</div>
      <button @click="add">增加</button>
      <button @click="cut">减少</button>
      <button @click="asyncAdd">异步增加</button>
    </div>
</template>

<script>
    export default {
      computed: {
        count(){
          // return this.$store.state.count;
          return this.$store.state.boy.count;
        }
      },
      methods: {
        add(){
          //通过this.$store.commit来执行mutations里面的方法，看起来很像javascript的观察者模式
          //1.提交一个事件名
          //2.可以接受第二个参数：可以是数字、字符串或对象等类型。
          this.$store.commit("increment",2);
        },
        cut(){
          this.$store.commit("decrease");
        },
        asyncAdd(){
          //异步事件通过this.$store.dispatch来执行actions里面的方法,可以拿到异步执行后的结果
          this.$store.dispatch("asyncIncrement").then(()=>{
            console.log(this.$store.state.count);
          });
        }
      }
    }
</script>

<style scoped>

</style>
