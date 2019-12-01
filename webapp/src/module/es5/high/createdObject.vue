<template>

</template>

<script>
    export default {
      methods: {
        operator(){
          //1.工厂模式(缺点：未指明对象类型，都是基于Object创建的)
          function person(name, age, sex, friend) {
            let o = {};
            o.name = name;
            o.age = age;
            o.sex = sex;
            o.friend = friend;
            return o;
          }
          let obj1 = person('zs', 23, '男', [1,2,3]);
          let obj2 = person('ls', 24, '男', [4,5,6]);
          console.log(obj1);  //{name: "zs", age: 23, sex: "男", friend: [1,2,3]}
          console.log(obj2);  //{name: "ls", age: 24, sex: "男", friend: [4,5,6]}

          //2.构造函数模式(缺点：当有方法时，会重复创建多个函数,造成内存浪费)
          function Person(name, age) {
            this.name = name;
            this.age = age;
            this.getAge = function () {
              return this.age;
            }
          }
          let obj3 = new Person('zs', 23);
          let obj4 = new Person('ls', 25);
          console.log(obj3);  //Person {name: "zs", age: 23}
          console.log(obj4);  //Person {name: "zs", age: 23}
          console.log(obj3.getAge());  //23
          console.log(obj4.getAge());  //25

          //3.原型模式(缺点，引用类型数据修改时会影响其它对象)
          function Father() {}
          Father.prototype = {
            name: 'zs',
            age: 66
          };
          let obj5 =  new Father();
          console.log(obj5.name); //zs
          console.log(obj5.age);  //66

          //4.构造函数加原型模式(解决1.对象类型不明确和2.重复创建函数的问题还有3.引用类型被串改影响的问题)
          function Sun(name, age) {
            this.name = name;
            this.age = age;
          }
          Sun.prototype = {
            getAge(){
              return this.age;
            }
          };
          let obj6 = new Sun('wf', 28);
          let obj7 = new Sun('lf', 29);
          console.log(obj6);  //{name: "wf", age: 28}
          console.log(obj7);  //{name: "lf", age: 29}
          console.log(obj6.getAge()); //28
          console.log(obj7.getAge()); //29
          console.log(obj7 instanceof Sun); //true
        }
      },
      mounted () {
        this.operator();
      }
    }
</script>

<style scoped>

</style>
