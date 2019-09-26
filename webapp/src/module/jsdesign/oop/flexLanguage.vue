<template>
    <div>
      <h3>第一章 灵活的语言——javascript</h3>
    </div>
</template>

<script>
    export default {
      methods:{
        test(){
          // 1.1  函数声明
          function checkName() {

          };
          // 1.2 函数表达式
          var checkName =  function () {

          };
          //上面这两种容易被覆盖。

          // 1.3 对象字面量收编函数
          var checkObject = {
            checkName : function () {

            }
          };
          // 1.4 函数也是对象   //这种大家共用的是一份，无法复制.
          var checkObject1 = function () {};
          checkObject1.checkName = function () {

          };
          //上面这两种使用对象形式，但大家用的是同一份对象，无法复制。

          // 1.5 模块模式 为单例创建私有变量和特权方法，公开一些能够访问这些私有数据的方法
          // 每次返回新的对象，每个人使用时互不影响。
          var checkObject2 = function () {
            return {
              checkName : function () {

              }
            }
          };
          var a = checkObject2();
          a.checkName();

          // 1.6 类的概念 (构造函数的形式) 每次返回新的对象，每个人使用时互不影响。
          // 创建多个实例时，会重复调用new Function();创建多个函数实例，这些函数实例还不是一个作用域中，当然这一般不会有错，但这会造成内存浪费。
          var CheckObject = function () {
            this.checkName = function () {

            }
          };
          var a = new CheckObject();
          a.checkName;

          //1.7 原型模式优化
          var CheckObject = function () {};
          // CheckObject.prototype.checkName = function () {
          //
          // };
          CheckObject.prototype = {
            checkName: function () {

            }
          };
          var a = new CheckObject();
          a.checkName();

          //1.8 函数的祖先Function (每一个函数实际上都是Function类型的一个实例，函数通常是使用函数声明语法定义的)
          //每一个函数都有一些默认的属性和方法； 如内部属性(arguments和this) 自身属性(length和prototype) (prototype 下面有两个方法call(),apply())
          Function.prototype.addMethod = function (name, fn) {
            this[name] = fn;
          };
          var a = new Function();
          a.addMethod('checkName', function () {});
          a.checkName();



        }
      }

    }
</script>

<style scoped>

</style>
