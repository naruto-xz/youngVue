<template>
  <div></div>
</template>

<script>
    export default {
      methods:{
        operate(){

          // js语言中，生成实例对象的传统方法就是通过构造函数
          // function Test(x,y) {
          //    this.x =x;
          //    this.y =y;
          // }
          // Test.prototype.toString = function () {
          //   return '('+this.x+','+this.y+')'
          // };
          // var p =new Test(1,2);
          // console.log(p.toString());

          // 这种面向对象和（Java、c++）差别很大，让人感到困惑;
          // ES6提供了class（类）这个概念，作为对象的模板,通过class关键字，可以定义类；

          // ES6中的class可以看做只是一个语法糖（可以看做是ES5构造函数的另一种写法），它的绝大部分功能ES5都可以做到，新的class写法只是让对象的原型的写法更加清晰，更像面向对象的编程语法而已。
          // typeOf Test // 'function' 类的数据类型就是函数,类本身就执行构造函数。
          // 构造函数的prototype属性在类上继续存在，事实上，类所有的方法都定义在类的prototype属性上,在类的实例上调用方法，其实就是调用原型上的方法。

          // 注意：1.前面不需要加function这个保留字，直接写函数名就行。
          //       2.方法直接不需要逗号分隔,家里会报错。
          //       3.类内部定义的所有方法时不可枚举的，ES5的构造函数式原型上的方法时可以的。


          // 与ES5一样，实例的属性除非显示定义在其本身(即this对象上)，否则都是定义在原型上（即point._proto_）
          // Test.hasOwnProperty('x'); //true
          // Test.hasOwnProperty('y'); //true
          // Test.hasOwnProperty('toString'); //false
          // Test._proto_.hasOwnProperty('toString'); //true
          // 与ES5一样, 类的所有实例都共享一个原型对象。
          // var t1 = new Test(1,2);
          // var t2 = new Test(3,4);
          // t1._proto_ == t2._proto_;
          // class Test {
          //   //构造方法,是类的默认方法，
          //   // 1.通过new命令生成对象实例时会自动调用该方法，必须有，如果没有显示定义，则被默认为constructor(){}
          //   // 2.constructor方法默认返回实例对象(即this),不过也可以指定返回另外一个对象。
          //   // 3.类必须使用new来调用，否则会报错。
          //   constructor(x,y){
          //     this.x = x;
          //     this.y = y;
          //   }
          //   toString(){
          //     return '('+this.x+','+this.y+')'
          //   }
          // }
          // var p = new Test(1,2);
          // console.log(p);
          // console.log(p.toString());

          //class表达式
          var Test = class{
            constructor(x,y){
              this.x = x;
              this.y = y;

            }
            toString(){
              return '('+this.x+','+this.y+')'
            }
            eat() {
              console.log(123);
            }
          };
          var p = new Test(1,2);
          console.log(p.x);

          //不在变量提升
         // new Test();
         // class Tess{};  //报错

          // Class 的静态方法
          // 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
          // 1.如果静态方法包含this关键字，这个this指的是类，而不是实例。
          // 2.父类的静态方法，可以被子类继承。(静态方法也是可以从super对象上调用的。)
          // class myClass{
          //   static eat(){
          //     console.log("苹果")
          //     this.x = 1;
          //   }
          // }
          // // var p = new myClass();
          // // p.eat(); //报错
          //
          // myClass.eat();  //苹果
          // console.log(myClass.x); //1
          //
          // class sun extends myClass{}
          // sun.eat();  //苹果

          // Class 的静态属性和实例属性
          // 静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。

          // 1.类的实例属性
          // 类的实例属性可以用等式，写入类的定义之中
          // 2.类的静态属性
          // 只需要在实例属性前面加static关键字就可以了
          // class myClass{
          //   a = 1;
          //   static b = 2;
          // }
          // var p = new myClass();
          // console.log(p.a); //1
          // console.log(myClass.b); //2

        },
        operate1 () {
          // function Person1() {
          //   this.name = 'ls';
          //   this.getName = function () {
          //     return this.name;
          //   }
          // }
          // let person1 = new Person1();
          // console.log(person1); //Person1 {name: "ls", getName: ƒ}
          // console.log(person1.name);  //ls
          // console.log(person1.getName()); //ls


          class Person {    //可以看做是es5构造函数的另一种写法
            constructor(name, age){
              this.name = name;
              this.age = age;
            }
            getName(){    //方法其实就绑在类的原型上
              return this.name;
            }
            static sex = '男';
            static getNumber(){
              this.num = 10;
            }
          }
          let person = new Person('zs', 23);
          console.log(person);  //Person {name: "zs", age: 23}  而getName是在Person对象的prototype原型上
          console.log(person.age);  //23
          let name = person.getName();
          console.log(name);  //'zs'

          console.log(Person.hasOwnProperty('name')); //true
          console.log(Person.hasOwnProperty('getName')); //false

          console.log(Person.sex);  //'男'
          Person.getNumber(); //在静态方法中绑定属性
          console.log(Person.num);  //10

        }
      },
      mounted() {
        // this.operate();
        this.operate1();
      }
    }
</script>

<style scoped>

</style>
