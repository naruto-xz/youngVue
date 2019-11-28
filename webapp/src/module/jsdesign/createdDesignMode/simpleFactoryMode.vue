<template>
    <div>
      <h3>简单工厂模式</h3>
      <p>优点：</p>
      <p>1。特别适用于一类对象的场景（关注需求中的公共方法或类，如果相似点很多，就可以考虑用一个对象的简单工厂模式来做或者对外只提供一个简单工厂函数）</p>
      <p>2。通过简单工厂模式来创建一些对象，可以让这些对象共用一些资源，又有自己的一些私有资源，是一种很不错的实践。</p>
      <p>缺点：</p>
      <p>1。违背“开放 - 关闭原则”，一旦添加新产品就不得不修改工厂类的逻辑，这样就会造成工厂逻辑过于复杂。</p>
      <p>2。简单工厂模式由于使用了静态工厂方法，静态方法不能被继承和重写，会造成工厂角色无法形成基于继承的等级结构</p>
      <slot name="age" age="28"></slot>
    </div>
</template>

<script>
    export default {
      methods:{
        test1(){
          //优点：通过简单工厂创建一些对象，可以让这些对象共用一些资源而又私有一些资源，是一种很不错的实践。
          //缺点：1。无法识别对象类型，因为创建对象都是使用Object的原生构造函数来完成的。 2。每次创建的个体都是一个新的对象，如果继承父类，则父类上的方法就不能共用了。
          let Factory = function (name, age) {
            let o = new Object();
            o.name = name;
            o.age = age;
            o.getValue =  function () {
              return this.age;
            };
            if(age == 1){
              o.type = '苹果树';
            }
            if(age == 2){
              o.type = '橘子树';
            }
            return o;
          };
          let apple = new Factory('苹果', 1);
          console.log(apple.name);
          console.log(apple.getValue());
          console.log(apple.type);

          let orange = new Factory('橘子', 2);
          console.log(orange.name);
          console.log(orange.getValue());
          console.log(orange.type);
        },
        test2(){
          let Apple = function (name) {
            this.name = name;
          };
          Apple.prototype.getValue = function () {
            return this.name;
          };
          let Orange = function (name) {
            this.name = name;
          };
          Orange.prototype.getValue = function () {
            return this.name;
          };
          let apple = new Apple('苹果');
          console.log(apple.name);
          console.log(apple.getValue());

          let orange = new Orange('橘子');
          console.log(orange.name);
          console.log(orange.getValue());

          //整合为简单工厂模式,这些类继承同一个父类，他们父类上的方法是可以共用的
          let Factory = function (name) {
            switch (name) {
              case '苹果': return new Apple(name);
              case '橘子': return new Orange(name);
            }
          };
          let apple1 =  new Factory('苹果');
          console.log(apple1.name);
          console.log(apple1.getValue());

          let orange1 = new Factory('橘子');
          console.log(orange1.name);
          console.log(orange1.getValue());

        },

      },
      mounted() {
        // this.test1();
        // this.test2();
      }
    }
</script>

<style scoped>

</style>
