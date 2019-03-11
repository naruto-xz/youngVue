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


          //继承

        //   1.子类必须在constructor方法中调用super方法， 否则新建实例时会报错。 这是因为子类没有自己的this对象， 而是继承父类的this对象， 然后对其进行加工。 如果不调用super方法， 子类就得不到this对象。
        //   2.如果子类没有定义constructor方法， 这个方法会被默认添加。也就是说， 不管有没有显式定义， 任何一个子类都有constructor方法。
        //   3.super这个关键字， 有两种用法， 含义不同。
        // (1) 作为函数调用时（ 即super(...args)）， super代表父类的构造函数。 (super虽然代表父类的构造函数，但返回的是子类的实例，及super()内部的this指向子类)
        // (2) 作为对象调用时（ 即super.method()）， 普通方法中super指向父类的原型对象。 (只能调用原型上的属性和方法，无法调用对象实例上的属性和方法)    静态方法中指向父类(Class)
        //   class Point{
        //     age = 23;
        //     static sex = '男';
        //     constructor(x,y){
        //       this.x = x;
        //       this.y = y;
        //     }
        //     toString(){
        //       return 3;
        //     }
        //   }
        //   class ColorPoint extends Point{
        //     constructor(x,y,color){
        //       super(x,y); // 代表父类的构造函数
        //       this.color = color;
        //     }
        //     toString(){
        //       return this.color + '' + super.toString();  //super指向父类的原型对象
        //       // console.log(super.age); //undefined   访问不到实例上的age,只能访问原型上的属性和方法
        //     }
        //     static getValue(){
        //       console.log(super.sex); //男   静态方法中指向父类(Class)
        //     }
        //   }
        //   var p = new ColorPoint(1,2,'red');
        //   console.log(p.x); //1
        //   console.log(p.y); //2
        //   console.log(p.color); //red
        //   console.log(p.toString());  //red3
        //   ColorPoint.getValue();  //男



        }
      },
      mounted() {
        this.operate();
      }
    }
</script>

<style scoped>

</style>
