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
          //1.原型链继承(缺点：父类一变，所有继承的子类都会被影响)
          function Father() {}
          Father.prototype = {
            name: 'zs',
            age: '66'
          };
          function Sun() {}
          Sun.prototype = new Father();
          let sun1 = new Sun();
          console.log(sun1.name); //zs
          console.log(sun1.age);  //66
          Father.prototype.age = 88;
          let sun2 = new Sun();
          console.log(sun2.name); //zs
          console.log(sun2.age);  //88


          //2.构造继承(缺点：无法复用父类原型上的方法)
          function Father1(name, age) {
            this.name = name;
            this.age = age;
          }
          Father1.prototype.getAge = function () {
            return this.age;
          };
          function Sun1(sex) {
            Father1.apply(this, ['ls', 68]);
            this.sex = sex;
          }
          let obj1 = new Sun1('男');
          console.log(obj1.name); //ls
          console.log(obj1.age);  //68
          // console.log(obj1.getAge());  //会报错

          //3.构造+原型组合继承(1.解决了原型修改影响的问题，2.实现了原型方法共用的问题)
          function Father2(name, age) {
            this.name = name;
            this.age = age;
          }
          Father2.prototype.getAge = function () {
            return this.age;
          };
          function Sun2(sex) {
            Father2.apply(this, ['wf', 70]);
            this.sex = sex;
          }
          Sun2.prototype = new Father2();
          let obj2 = new Sun2('男');
          console.log(obj2.name); //wf
          console.log(obj2.age);  //70
          console.log(obj2.getAge());  //70


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
