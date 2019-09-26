<template>
  <div>
    <h3>工厂方法模式</h3>
    <p>通过定义工厂父类负责定义创建对象的公共接口，而子类则负责生成具体的对象。</p>
    <p>优点：</p>
    <p>对于创建多类对象，简单难工厂模式就不太适用了，当然这也是工厂方法模式的价值所在。</p>
    <p>通过工厂模式我们可以轻松创建多个类的实例对象，用户不用关心创建对象的具体类，只需调用工厂方法即可</p>
    <p>安全的工厂模式可以避免使用错误造成的this指向全局对象的情况</p>
    {{num}}
  </div>
</template>

<script>
    export default {
      props:{
        num:{
          type: String,
          default: '123'
        }
      },
      methods:{
        test1(){
          let Factory = function (type, content) {
            //new Function()创建函数的语法
            // let func = new Function ([arg1[, arg2[, ...argN]],] functionBody)  //参数为字符串，最后一句为执行体
            // let sum = new Function('a', 'b', 'return a + b');
            // alert( sum(1, 2) ); // 3
            //这个方式与其他方式最主要的不同点在于，函数是由在运行时传入的字符串创建的。

            //加入安全模式
            if(this instanceof Factory){
              let result = new this[type](content);
              return result;
            }else{
              return new Factory(type, content);
            }
          };
          Factory.prototype = {
            Eat: function (content) {
              this.content = content;
              console.log('吃个苹果');
            },
            Drink(content){
              this.content = content;
              console.log('喝个可乐');
            },
            Play(content){
              this.content = content;
              this.name = `${content}97`;
              console.log('玩个游戏');
            }
          };
          let eat = new Factory('Eat', '苹果');
          // let eat = Factory('Eat', '苹果');
          console.log(eat.content);
          let drink = new Factory('Drink', '可乐');
          console.log(drink.content);
          let play = new Factory('Play', '拳皇');
          console.log(play.content);
          console.log(play.name);
        }
      },
      mounted() {
        console.log(this.num);
        debugger;
        this.test1();
      }
    }
</script>

<style scoped>

</style>
