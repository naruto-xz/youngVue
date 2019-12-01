<template>

</template>

<script>
    export default {
      methods: {
        operator() {
          // 原型
          function Person(name) {
            this.name = name;
          }

          Person.prototype.age = 23;
          let person = new Person('zs');
          console.log(person.name);
          console.log(person.age);

          console.log(person.hasOwnProperty('name'));  //true
          console.log(person.hasOwnProperty('age'));   //false

          console.log(Person.prototype.isPrototypeOf(person));  //true  实例对象是否存在于另一个对象的原型链中
        },
        operator1() {
          function Person() {
          }

          Person.prototype = {
            age: 24,
            friend: [1, 2, 3]
          };
          let person = new Person();
          let person1 = new Person();
          console.log(person.age);  //24
          console.log(person.friend); //[1,2,3]
          person.age = 25;  //修改基础数据类型，是给自己新增属性
          person.friend.push(4);  //修改引用类型，是修改的原型上的属性
          console.log(person1.age); //24
          console.log(person1.friend);  //[1,2,3,4]
        },
        operator2() {
          function Father() {
            this.sex = '男';
          }
          Father.prototype = {
            name: 'zhang',
            age: 66
          };
          function Sun() {}
          Sun.prototype = new Father(); //不仅会继承函数定义的属性还会继承函数的原型
          let sun = new Sun();
          console.log(sun.name);  //zhang
          console.log(sun.age);  //66
          console.log(sun.sex);  //男
        }
      },

      mounted () {
        // this.operator();
        // this.operator1();
        this.operator2();
      }
    }
</script>

<style scoped>

</style>
