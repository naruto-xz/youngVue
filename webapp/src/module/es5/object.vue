<template>
    <div>
      <h5>{{title}}</h5>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          title: "对象",
        }
      },
      methods:{
        operator(){
          var obj = {
            name :  "zhangsan",
            age : 22,
          };
          // obj.sex = "男";　　obj.eat = function () {}; //增
          // delete obj.age; //删
          // obj.age = 23; //改
          // obj.name;   obj[name]; // 查
          // var other = obj;　other.age = 24;　console.log(obj.age)//24　　//引用 o和other指向的是同一个对象。

          //遍历对象
          //对象的属性没有顺序，因此for-in循环出的属性名的顺序是不可预测的.
          // for(var key in obj){
          //   console.log(key); //name age
          //   console.log(obj[key]); //zhangsan 22
          // }

          //属性的遍历
          console.log(Object.keys(obj)); //[name,age]
          console.log(Object.values(obj)); //[name,age]

        }
      },
      mounted() {
        this.operator();
      }
    }
</script>

<style scoped>
</style>
