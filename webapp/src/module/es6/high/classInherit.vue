<template>

</template>

<script>
export default {
  methods: {
    operator () {
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

    },
    operator1 () {
      class Father {
        constructor(name, age){
          this.name = name;
          this.age = age;
        }
        static address = 'beijing';
        static play(){
          console.log('玩');
        }
      }
      let father = new Father('ls', 66);
      console.log(father);  //Father {name: "ls", age: 66}

      // ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。
      // ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。
      class Sun extends Father{
        constructor(x,y,sex){
          super(x,y); //先需要把继承的this拿过来，在进行赋值
          this.sex = sex;
        }
        static getAddress(){
          return super.address;
        }
      }
      let sun =  new Sun('zs', 23, '男');
      console.log(sun); //Sun {name: "zs", age: 23, sex: "男"}

      console.log(Sun.getAddress());  //beijing

      console.log(Sun.address); //beijing
      Sun.play(); //玩
    }
  },
  mounted () {
    // this.operator();
    this.operator1();
  }
}
</script>

<style scoped>

</style>
