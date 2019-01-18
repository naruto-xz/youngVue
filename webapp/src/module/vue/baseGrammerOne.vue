<template>
    <div>
      <h5>{{title}}</h5>
      <div>
        <span>单数：{{number}}</span>
        <span>总数：{{total}}</span>
        <button @click="add">增加</button>
      </div>
      <div>
        <span>数组:{{arr}}</span>
        <button @click="change">改变数组</button>
      </div>
      <div>
        <span>计算属性</span>
        <span>{{priceTotal}}</span>
      </div>
    </div>
</template>

<script>
    export default {
      data(){
          return {
            title: "vue基础语法一:实例对象配置",
            number: 0,
            total: 10,
            person:{
              name: "zhangsan",
              age: 22
            },
            arr: [1,2,3,4],
            price: 100,
          }
      },
      methods:{
        //注意，不应该使用箭头函数来定义 method 函数 (例如 add: () => this.number++)。
        // 理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this将是 undefined。
        // add:()=>{this.number++;}   //错误
        add(){
          this.number++;
          this.person.age++;
        },
        change(){
          // this.arr[0] = 5; //无效
          this.$set(this.arr,0,5); //[5,2,3,4];
        }
      },
      computed:{
        //绝大多数情况下，我们只会用默认的getter 方法来读取一个计算属性，在业务中很少用到setter,所以在声明一个计算属性时，可以直接使用默认的写法，不必将getter 和setter 都声明。
        sum(){
          return this.total+=this.number;
        },
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
        priceTotal(){
          return this.price+this.sum;
        }
      },
      watch: {
        // number(val,oldVal){
        //   console.log(val);
        //   console.log(oldVal);
        //   console.log("监听数据变化");
        // },
        // number:{
        //   handler(val,oldVal){
        //     console.log(val); //0
        //     console.log(oldVal);  //undefined
        //     console.log("一开始就监听数据变化");
        //   },
        //   immediate:true
        // }
        // person:{
        //   handler(val,oldVal){
        //     console.log(val.age); //23
        //     console.log(oldVal.age);  //23
        //     console.log("深度监听数据变化");  //深度监听
        //   },
        //   deep: true
        // }
        // sum(val,oldVal){
        //   console.log(val); //11
        //   console.log(oldVal);  //10
        //   console.log("监听计算属性函数");
        // }
        // arr(val,oldVal){
        //   console.log(val);
        //   console.log(oldVal);
        //   console.log("监听数组变化，不用深度监听");
        // }
      }
    }
</script>

<style scoped>

</style>
