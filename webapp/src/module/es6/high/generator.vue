<template>
    <div>
      <h5>{{title}}</h5>
    </div>
</template>

<script>
    import promise from "../promise";

    export default {
      data(){
        return {
          title: 'generator函数'
        }
      },
      methods: {
        operate() {
          //基础用法
          // function* eat() {
          //   yield "apple";
          //   yield "banana";
          //   return "orange";
          // }
          // var obj = eat();
          // console.log(obj); //Generator{_invoke: ƒ}   generator遍历器对象
          // console.log(obj.next());  //{value: "apple", done: false}
          // console.log(obj.next());  //{value: "banana", done: false}
          // console.log(obj.next());  //{value: "orange", done: true}
          // console.log(obj.next());  //{value: undefined, done: true}

          //next()传参
          // console.log(a.next());  //{value: 6, done: false}
          // console.log(a.next(12));  //{value: 8, done: false}
          // console.log(a.next(13));  //{value: 42, done: true}
          // a.next(); //6
          // a.next(12); //24/3 = 8
          // a.next(13); //5+24+13 = 42

          //for..of
          // function* eat() {
          //   yield "apple";
          //   yield "banana";
          //   return "orange";
          // }
          // var obj = eat();
          // for (let item of obj){
          //   console.log(item);  //apple,banana
          // }

          // Generator.prototype.throw()
          // function* eat() {
          //   try {
          //     yield "apple";
          //     yield "banana";
          //     return "orange";
          //   } catch (e) {
          //     console.log("内部捕获错误" +e); //内部捕获错误a
          //   }
          // }
          // var obj = eat();
          // obj.next();
          // obj.throw('a')

          //Generator.prototype.return()
          // function* eat() {
          //   yield "apple";
          //   yield "banana";
          //   return "orange";
          // }
          // var obj = eat();
          // obj.next(); //{ value: apple, done: false }
          // obj.return('a');  //{ value: a, done: true }

          // yield* 语句
          // function* one() {
          //   yield 1;
          //   yield 2;
          // }
          // function* two() {
          //   yield* one();
          //   yield 3;
          //   yield 4;
          // }
          // for (let item of two()){
          //   console.log(item);  //1,2,3,4
          // }

          //作为对象属性的Generator函数
          // var obj = {
          //   * eat(){
          //       yield "apple";
          //       yield "banana";
          //       return "orange";
          //   }
          // };
          // var a = obj.eat();
          // console.log(a.next());

          //应用场景
          // 1.异步操作的同步化表达
          // promise.resolve(step1)
          //   .then(step2)
          //   .then(step3)
          //   .then(step4)

          // 改为Generator函数
          // function* load(value1) {
          //   var value2 = yield step1(value1);
          //   var value3 = yield step1(value2);
          //   var value4 = yield step1(value3);
          // }
          // var obj = load(1);
          // obj.next();


        },
      },
      mounted() {
        this.operate();
      }
    }
</script>

<style scoped>

</style>
