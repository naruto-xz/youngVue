<template>
    <div>

    </div>
</template>

<script>
    export default {
      data(){
        return {

        }
      },
      methods: {
        operator(){
          //创建对象

          //1.工厂模式
          // function createPerson(name,age) {
          //   var o = new Object();
          //   o.name = name;
          //   o.age = age;
          //   return o;
          // }
          // var result = createPerson('zhangsan',23);
          // console.log(result);

          //2.构造函数模式
          // function Person(name,age) {
          //   this.name = name;
          //   this.age = age;
          // }
          // var  result = new Person('zhangsan',23);
          // console.log(result);

          //3、原型模式
          // function Person(name,age) {
          //   this.name = name;
          //   this.age = age;
          // }
          // Person.prototype.eat = function () {
          //   return 1;
          // };
          // var result = new Person('zhangsan',23);
          // console.log(result.eat());

          //4、组合使用构造函数模式及原型模式
          // function Person(name,age) {
          //   this.name = name;
          //   this.age = age;
          // };
          // Person.prototype = {
          //   constructor: Person,  //原型字面量形式会将对象的constructor变Object，此外强制指回Person；
          //   getAge : function () {
          //     return this.age;
          //   }
          // };
          // var result = new Person('zhangsan',23);
          // console.log(result.getAge());

          //实现继承的几种方式

          // 1.原型链继承
          // function Person() {
          //   this.name = 'zhangsan';
          // }
          // function Parent(age) {
          //   this.age = age;
          // }
          // Parent.prototype = new Person();
          // var result = new Parent(23);
          // console.log(result.name);

          //2.构造继承




        },
        operator1 () {
          // 原型
          function Person(name) {
            this.name = name;
          }
          Person.prototype.age = 23;
          let person = new Person('zs');
          console.log(person.name);
          console.log(person.age);

          console.log(Person.isPrototypeOf(Person.name));  //false
          console.log(Person.isPrototypeOf(Person.age));   //true


        }
      },
      mounted() {
        // this.operator();
        this.operator1();
      }
    }
</script>

<style scoped>

</style>
