<template>
    <!--<div>{{title}}</div>-->
  <div>
    <!--<div class="box">-->
      <!--<div class="a"></div>-->
      <!--<div class="b"></div>-->
      <!--<div class="c"></div>-->
    <!--</div>-->
    <!--<button @click="go">go</button>-->

  </div>
</template>

<script>
    export default {
      data(){
        return {
          title: "practice"
        }
      },
      methods:{
        operate(){
          // 1.考虑以下程序输出的结果：
          // var x='a';
          // function printX(){
          //   console.log(x); //undefined
          //   var x='b';
          //   console.log(x); //b
          // }
          // printX();
          //
          // var y='c';
          // function printY(){
          //   console.log(y); //c
          //   y='d';
          //   console.log(y); //d
          // }
          // printY();

          // 2.请选择结果为真的表达式： B
// 　　      A null instanceof Object　　B null==undefined　　C NaN==NaN　　D false==undefined

          // 3.下面代码的执行结果是哪个？  ['hello','bye']
// 　　　　  function foo(a){
//              var a;
//              return a;
//           }
//           function bar(a){
//             var a = 'bye';
//             return a;
//           }
//           console.log([foo('hello'),bar('hello')]);

          // 命名参数可以理解成此函数运行时的局部变量
          // 上面的函数相当于
          // function foo() {
          //   var a;
          //   var a;  //仅声明，未赋值。不影响原值。
          //   a = 'hello';
          //   return a;
          // }
          // function bar(a){
          //   var a;
          //   var a;
          //   a = 'hello';
          //   a = 'bye';
          //   return a;
          // }

          // 4.下面哪些是ES6的新特性？  A,B,C
// 　　      A var[a,b]=[1,2];     　　B const a={};
//           C var a='foo${a}bar';　　D [1,2,3].map(function(item){return item<3;});  [true,true,false]

          // 5.下面哪些是HTML5新标签？ A,D
         //  A audio　　B address　　C optgroup　　D progress(进度)

          // 6.通常HTML标签都需要特别的书写来闭合，例如<a>标签的闭合就是</a>，那么下列哪些标签不需要类似的闭合？ A,B,D
          //简单来说就是无内容元素（Void Elements）不需要闭合
          // A <br>　　B <hr>　　C <command>　　D <meta>

//           9.通过代码或伪代码实现如下要求：
// 　　     已知x="3.14159267006..."（圆周率前10万位），查询你手机号码后4位在“x”字符串中所在的位置。尽可能提升查询效率，可以优化原始数据的数据结构，让重复查询效率提高。
//             var x = "3.14159267217900635454545217965656";
//             var res = [];
//             function getIndex(value,from){
//               var index = x.indexOf(value,from);
//               if(index!=-1){
//                 res.push(index);
//                 from = index+1;
//                 getIndex(value,from);
//               }
//             }
//             getIndex('2179',0);
//             console.log(res);

          // 10.判断一个字符串中出现最多的字母及次数
          // var str = "3.141592670061";
          // var obj = {};
          // for(var i = 0; i<str.length; i++){
          //   var s = str.charAt(i);
          //   obj[s] ? obj[s]++ : obj[s] = 1;
          // }
          // console.log(obj);
          //
          // var count = 0;
          // var k = '';
          // for(var key in obj){
          //   if(obj[key]>count){
          //     k = key;
          //     count = obj[key];
          //   }
          // }
          // console.log(`出现最多的值为${k},出现了${count}次`);


          // var xArr = x.split('');
          // var yArr = y.split('');
          // for(var j = 0; j<yArr.length; j++){
          //   for(var i = 0; i<xArr.length; i++){
          //     if(yArr[j]==xArr[i]){
          //       obj[]
          //       console.log(i);
          //     }
          //   }
          // }

          // 11.请先阅读如下代码：
          // function fn(input){
          //   input=parseInt(input,10);
          //   return isPrime(input)?"is prime":"not prime";
          // }
          // // 请实现上面代码中调用的isPrime这个函数，判断传入参数是否为质数（也叫素数）。
          // function isPrime(num) {
          //   if(num<=3){
          //     return num>1
          //   }
          //   if(num>3){
          //     for(var i = 2; i<=Math.sqrt(num); i++){
          //       if(num%i == 0){
          //         return false;
          //       }
          //     }
          //     return true;
          //   }
          // }
          // console.log(fn(111));


          // 12
          // function Animal() {
          //
          // }
          // Animal.prototype.count = 0;
          // Animal.prototype.add = function () {
          //   return this.count++;
          // };
          // var test1 = new Animal();
          // var res1 = test1.add();
          // console.log(res1); //0
          // var res2 = test1.add();
          // console.log(res2); //1
          // var test3 = new Animal();
          // var res3 = test3.add();
          // console.log(res3); //0

          // 13.
          // var a = 1;
          // function f1() {
          //   var a = 2;
          //   c = 3;
          //   return function () {
          //     console.log(a++);
          //     console.log(b++);
          //     console.log(c++);
          //   }
          // }
          // console.log(a); //1
          // console.log(b); //undefined
          // // console.log(c); //3
          // var g = f1();
          // var b = 1;
          // g();
          // console.log(a);
          // console.log(b);
          // console.log(c);

          // 14.
          // var time = new Date().getTime()+10000;
          // function run() {
          //   while (time>Date.now()){
          //     console.log('跑');
          //   }
          //   setTimeout(run(),10000)
          // }
          // run();




          //1.debounce 方法
          // function debounce(fn, delay){
          //   var timer;
          //   return function(){
          //     var context = this;
          //     var args = arguments;
          //     //下面这句是核心作用，就是就清除定时器，以保证不执行 fn，从而起到函数防抖的作用；我们项目中时常用函数节流的方式，声明一个变量当标志位，判断是否执行，然后直接return掉。
          //     clearTimeout(timer);
          //     timer = setTimeout(function () {
          //       fn.apply(context, args)
          //     }, delay)
          //
          //   }
          // }


          // 2.实现类的继承
          // 实现 Animal 类，具备 `sleep` 方法
          // 实现 Person 类继承自 Animal, 具备 `sayHello` 方法

          //直接先用es6的class类写了，比es5继承写起来要顺手的多。（一：子类可以继承父类的静态方法;二：父类的属性和方法没有显示声明，其实都是定义在了原型上）
          // class Animal {
          //   sleep(){
          //     console.log('Sleep Zzz~');
          //   }
          //   static sayHello(){
          //     console.log('Hello, I\'m John, I\'m 18 ages old.');
          //   }
          // }
          // class Person extends Animal{};
          // var person = new Person();
          // person.sleep();
          // Person.sayHello();
          // console.log(person instanceof Animal);
          // console.log(person instanceof Person);


          // 3.编写一个简单的事件监听处理器  (这个直接想，暂时没想出来，下来花半个小时琢磨研究一下)
          // 1. 具备 on 方法绑定事件
          // 2. 具备 off 方法解绑事件
          // function EventEmitter () {
          //   this.handlers = {};
          // }
          // EventEmitter.prototype.on = function(type, handler){
          //   this.handlers[type] = handler;
          // };
          // EventEmitter.prototype.off = function(type, handler){
          //   this.handlers[type] = null;
          // };
          // EventEmitter.prototype.emit = function(type,value){
          //   if(this.handlers[type]){
          //     this.handlers[type](value);
          //   }
          // };
          //
          // var emitter = new EventEmitter();
          // emitter.on('foo', function (e) {
          //   console.log('foo event: ', e);
          // });
          // emitter.on('*', function (e, type) {
          //   console.log('some event: ', e, type);
          // });
          // function onBar (e) {
          //   console.log('bar event: ', e);
          // }
          // emitter.on('bar', onBar);
          // emitter.emit('foo', { name: 'John' });
          // emitter.emit('bar', { name: 'John' });
          // emitter.off('bar', onBar);
          // emitter.emit('foo', { name: 'John' });
          // emitter.emit('bar', { name: 'John' });


          // 4.请写出快速排序  (第一个想到的就是冒泡排序，所以快快的写了一个冒泡排序，最早了解java算法的时候还有插入排序，选择排序，二分查找等)

          //冒泡排序
          // function quick(arr) {
          //   for(var i=0; i<arr.length-1; i++){
          //     for(var j=i+1;j<arr.length;j++){
          //       if(arr[i]>arr[j]){
          //         var temp=arr[i];
          //         arr[i]=arr[j];
          //         arr[j]=temp;
          //       }
          //     }
          //   }
          //   return arr;
          // }
          // var arr = [4, 7, 87, 34, 56, 69, 19, 26, 7, 9, 33];
          // var res = quick(arr);
          // console.log(res);
          //
          // //快速排序
          // function quicksort(arr) {
          //   if (arr.length <= 1){
          //     return arr;
          //   }
          //   var index = Math.floor(arr.length / 2);
          //   var flag = arr.splice(index,1)[0]; //找基准这步很重要
          //   var left = [];
          //   var right = [];
          //   for (var i = 0; i < arr.length; i++) {
          //     if (arr[i] <= flag) {
          //       left.push(arr[i]);
          //     } else {
          //       right.push(arr[i]);
          //     }
          //   }
          //   return quicksort(left).concat([flag], quicksort(right));
          // }
          // var array = [4, 7, 87, 34, 56, 69, 19, 26, 7, 9, 33];
          // var result = quicksort(array);
          // console.log(result);


          // Function.prototype.a = 'a';
          // Object.prototype.b = 'b';
          // function Person(){};
          // var p = new Person();
          // debugger;
          // console.log('p.a: '+ p.a);  //'p.a:a'
          // console.log('p.b: '+ p.b);  //'p.b:b'


          // Object.prototype.age = 23;
          // var arr = [];
          // console.log(arr.age);
          // var date = new Date();
          // console.log(date.age);


          // const person = {
          //   namea: 'menglinghua',
          //   say: function (){
          //     return function (){
          //       console.log(this.namea);  //匿名函数的执行环境具有全局性
          //     };
          //   }
          // };
          // person.say()(); //undefined
          // const person = {
          //   namea: 'menglinghua',
          //   say: function (){
          //     return () => {
          //       console.log(this.namea);
          //     };
          //   }
          // };
          // person.say()(); //menglinghua

          // setTimeout(() => console.log('a'), 0); //5 a
          // var p = new Promise((resolve) => {
          //   console.log('b'); //1 b
          //   resolve();
          // });
          //
          // p.then(() => console.log('c')); //3 c
          // p.then(() => console.log('d')); //4 d
          // console.log('e'); //2 e

          //b e c d a //promise的回调>setTimeout

          // async function async1() {
          //   console.log("a"); //2 a
          //   await  async2();
          //   console.log("b"); //6 b
          //
          // }
          // async function async2() {
          //   console.log( 'c');  //3 c
          // }
          // console.log("d"); //1 d
          // setTimeout(function () {
          //   console.log("e"); //8 e
          // },0);
          // async1();
          // new Promise(function (resolve) {
          //   console.log("f"); //4 f
          //   resolve();
          // }).then(function () {
          //   console.log("g"); //7 g
          // });
          // console.log('h'); //5. h


          //d a c  f h  b g e


          // setTimeout(function(){
          //   console.log(a); //4. 1
          // },0);
          // var a = 1;
          // console.log(b); //1. undefined
          // var b = 2;
          // var c = 3;
          // var d = 4;
          // var e = 5;
          // function fx(c){
          //   console.log(c); //3. 3
          // }
          // function fn(e,d){
          //   console.log(d); //2. 4
          //   setTimeout(function(){
          //     console.log(e); //5. 5
          //   },10);
          // }
          // setTimeout(function(){
          //   console.log(b); //6 2
          // },20);
          // fn(e,d);
          // fx(c);
          // //undefined 4 3 1 5 2

          // if (typeof Function.prototype.bind === "undefined"){
          //   Function.prototype.bind = function (thisArgs){
          //     var fn = this,
          //     args = Array.prototype.slice.call(arguments, 1);
          //     return function (){
          //       return fn.apply(thisArgs, args.concat(Array.prototype.slice.call(arguments)));
          //     }
          //   }
          // }

          // 实现 vue 中的 on,emit,off,once，手写代码。
          var EventEmiter = function (){
            this._events = {};
          };
          EventEmiter.prototype.on = function (event,cb) {
            (this._events[event] || (this._events[event] = [])).push(cb);
          };
          EventEmiter.prototype.emit = function (event){
            let cbs = this._events[event];
            let args = Array.prototype.slice.call(arguments, 1);
            for(let i = 0; i<cbs.length; i++){
              cbs[i].apply(this,args);
            }
          };
          EventEmiter.prototype.off = function (event,cb) {
            if(!arguments.length){
              this._events = {};
            }
            if(!cb){
              this._events[event] = [];
            }
            if(cb){
              let cbs = this._events[event];
              for(let i = 0; i<cbs.length; i++){
                if(cbs[i] == cb){
                  cbs.splice(i,1);
                }
              }
            }
          };
          EventEmiter.prototype.once = function (event,cb) {
            if(!this._events[event+'once']){
              this._events[event+'once'] = cb;
              this._events[event+'once']();
            }
          };
          var event = new EventEmiter();
          event.on('open',(data)=>{
            console.log(data);
          });
          event.emit('open',123);
          event.emit('open',456);
          event.off('open');
          event.emit('open',789);
          event.once('close',()=>{
            console.log(123);
          });
          event.once('close',()=>{
            console.log(456);
          });







          // Object.prototype.operate = {};
          // Object.prototype.on = function (type,fn) {
          //   this.operate[type] = fn;
          // };
          // Object.prototype.emit = function (type,data) {
          //   if(this.operate[type]){
          //     this.operate[type](data)
          //   }
          // };
          // Object.prototype.off = function (type) {
          //   this.operate[type] = null;
          // };
          // this.on('open',function (data) {
          //   console.log(data);
          // });
          // this.emit('open','123');
          // this.off('open');
          // this.emit('open','345');




        },
        go(){
          console.log('输出');
        }
      },
      mounted() {
        this.operate();
      }
    }
</script>

<style lang="less" scoped>
  .box{
    width: 240px;
    height: 200px;
    border: 2px solid #ccc;
    position: relative;
    .a{
      width: 30px;
      height: 30px;
      background: #ccc;
      position: absolute;
      right: 30px;
      top: 30px;
    }
    .b{
      border: 70px solid transparent;
      border-bottom: 70px solid #ccc;
      position: absolute;
      top: 30px;
      left: 20px;
    }
    .c{
      border: 50px solid transparent;
      border-bottom: 50px solid #ccc;
      position: absolute;
      top: 70px;
      left: 100px;
    }
  }
</style>
