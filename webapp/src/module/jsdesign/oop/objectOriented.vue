<template>
    <div>
      <h3>第二章 写的都是看到的——面向对象编程</h3>
    </div>
</template>

<script>
    export default {
      methods:{
        package(){
          //封装(属性和方法都封装在一个类里面) 构造函数+原型 利用构造函数封装稀有属性，利用原型绑定公共方法
          var Book = function (id, name, price) {
            this.id = id;
            this.name = name;
            this.price = price;
          };
          Book.prototype = {
            getName: function (name) {
              console.log(name)
            }
          };
          var book = new Book(1, '语文', 10);
          console.log(book.id);
          console.log(book.name);
          console.log(book.price);
          book.getName(book.name);
        },
        inherit(){
          //1.类式继承 (通过子类的原型prototype对父类实例话来实现的) （缺点：属性为引用类型时，会互相影响）
          // var Father = function () {
          //     this.name = '张三';
          //     this.friend = [1,2,3]
          // };
          // Father.prototype.getValue = function () {
          //   console.log(this.name);
          //   console.log(this.friend);
          // };
          // var Sun = function () {
          //   this.age = 23;
          // };
          // Sun.prototype = new Father();
          //
          // var sun = new Sun();
          // console.log(sun.name);
          // console.log(sun.getValue());

          //2.构造函数继承 (通过在子类的构造函数作用域中执行一次父类的构造函数)
          var Father = function (name) {
            this.name = '张三';
            this.friend = [1,2,3]
          };
          Father.prototype.getValue = function () {
            console.log(this.name);
            console.log(this.friend);
          };
          var Sun = function (name) {
            Father.call(this, name);
            this.age = 23;
          };
          var sun = new Sun('张三');
          console.log(sun.name);
          console.log(sun.getValue());


        }
      },
      mounted() {
        // this.package();
        this.inherit();
      }
    }
</script>

<style scoped>

</style>
