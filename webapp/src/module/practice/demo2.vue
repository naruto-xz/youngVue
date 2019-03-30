<template>
  <div>
    <div class="number">123</div>
  </div>
</template>

<script>
    export default {
      methods:{
        operate(){
          // var arr = [1,2,2,4];
          // var obj = {};
          // var arr1 = [];
          // arr.forEach(value=>{
          //   if(!obj[value]){
          //     obj[value] = true;
          //     arr1.push(value);
          //   }
          // });
          // console.log(arr1);

          // var arr = [1,2,2,4];
          // var arr1 = [];
          // arr.forEach(value=>{
          //   if(arr1.indexOf(value) == -1){
          //     arr1.push(value);
          //   }
          // });
          // console.log(arr1);


          // function Father() {
          //   this.age = 23;
          // }
          // Father.prototype.eat = function () {
          //   console.log('eat');
          // };
          // function Sun() {
          //   this.name = 'zhangsan';
          // }
          // Sun.prototype = new Father();
          // Sun.prototype.drink = function () {
          //   console.log('drink');
          // };
          // var sun = new Sun();
          // console.log(sun);  //实例的原型上有复制过来的属性和复制过来的父类的原型,
          // console.log(sun.age);
          // console.log(sun.eat());


          // function Father() {
          //   this.age = 23;
          // }
          // Father.prototype.eat = function () {
          //   console.log('eat');
          // };
          // function Sun() {
          //   Father.call(this);
          // }
          // var sun = new Sun();
          // console.log(sun);  //实例上有复制过来的属性，但没有复制过来的父类原型
          // debugger;
          // console.log(sun.age);
          // console.log(sun.eat()); //报错,因为没有继承到eat函数


          // function Father() {
          //   this.age = 23;
          // }
          // Father.prototype.eat = function () {
          //   console.log('eat');
          // };
          // function Sun() {
          //   Father.call(this);
          // }
          // Sun.prototype = new Father();
          // var sun = new Sun();
          // console.log(sun); //实例上有复制过来的属性，实例的原型上也有复制过来的原型和复制过来的父类原型
          // console.log(sun.age);
          // console.log(sun.eat());


          // class Father{
          //   static age = 23;
          //   static eat = function () {
          //     console.log('eat');
          //   };
          //   drink() {
          //     console.log('drink');
          //   }
          // }
          // class Sun extends Father{}
          // console.log(Sun.age); //子类可以继承父类的静态属性及方法；
          // console.log(Sun.eat());
          //
          // var sun = new Sun();
          // console.log(sun.drink());






        }
      },
      mounted() {
        this.operate();
      }
    }
</script>

<style scoped lang="less">
  .number{

  }
</style>
