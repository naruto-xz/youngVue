<template>
    <div>
      <div>{{title}}</div>
      <div>
        <span>单数：{{number}}</span>
        <span>总数：{{total}}</span>
        <button @click="add">增加</button>
        <button @click="count">调用计算函数求和</button>
      </div>
    </div>
</template>

<script>
    export default {
      name: "baseGrammer",
      data(){
          return {
            title: "vue基础语法",
            number: 0,
            total: 10
          }
      },
      methods:{
        //注意，不应该使用箭头函数来定义 method 函数 (例如 add: () => this.number++)。
        // 理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this将是 undefined。
        // add:()=>{this.number++;}   //错误
        add(){
          this.number++;
        },
        count(){
          // this.sum = 100;
          this.sum;
        }
      },
      computed:{
        //绝大多数情况下，我们只会用默认的getter 方法来读取一个计算属性，在业务中很少用到setter,所以在声明一个计算属性时，可以直接使用默认的写法，不必将getter 和setter 都声明。
        sum(){
          return this.total+=this.number;
        }
        //读取和设置
        // 在你需要时，也可以提供一个setter 函数， 当手动修改计算属性的值就像修改一个普通数据那样时，就会触发setter 函数.执行一些自定义的操作
        // sum:{
        //   get(){
        //     return this.total;
        //   },
        //   set(v){
        //     this.total = v-1;
        //   }
        // }
      },
      watch: {
        // number(){
        //   console.log(1111);
        // },
        add(){
          console.log(222);
        }
      }
    }
</script>

<style scoped>

</style>
