<template>
    <div>
      <h5>{{title}}</h5>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          title: 'generator函数'
        }
      },
      methods:{
        operate(){
          function* eat() {
            yield "apple";
            yield "banana";
            yield "orange";
            return;
          }
          var obj = eat();
          console.log(obj); //Generator{_invoke: ƒ}   generator遍历器对象
          console.log(obj.next());  //{value: "apple", done: false}
          console.log(obj.next());  //{value: "banana", done: false}
          console.log(obj.next());  //{value: "orange", done: false}
          console.log(obj.next());  //{value: undefined, done: true}
        }
      },
      mounted() {
        this.operate();
      }
    }
</script>

<style scoped>

</style>
