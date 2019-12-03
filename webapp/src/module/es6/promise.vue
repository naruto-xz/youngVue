<template>

</template>

<script>
    export default {
      data(){
        return {
          count: 1
        }
      },
      methods:{
        operate(){
          // 1.什么是Promise
          // Promise是异步编程的一种解决方案，Promise是对象，代表了一个函数最终可能的返回值或抛出的异常。
          // Promise是一个构造函数，自己身上有all、reject、resolve这几个异步方式处理值的方法，原型上有then、catch等同样很眼熟的方法。


          // Promise对象有以下两个特点：
          // 1.对象的状态不受外界影响。
          // Promise对象代表一个异步操作，有三种状态：Pending(进行中)、Resolved(已完成)和Rejected(已失败)。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
          // 2.一旦状态改变，就不会再变，任何时候都可以得到这个结果。
          // Promise对象的状态改变，只有两种可能：从Pending变为Resolved；从Pending变为Rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。

          //Promise新建后就会立即执行
          // var promise = new Promise((resolve)=>{
          //   console.log("立刻执行");
          //   resolve();
          // });
          // promise.then(()=>{
          //   console.log("然后执行");
          // });
          // 结果为： 1.立刻执行 2.然后执行

          // 2.常用用法
          /**
           * 对象方法 (在Promise中，定义了三种状态：等待状态，完成状态，拒绝状态。)
           * resolve(value)：在声明resolve()处，表明promise对象由pending状态转变为resolve。
           * reject(value)：在声明resolve()处，表明promise对象由pending状态转变为rejected。
           * then(res)：用来监听一个Promise的不同状态,一般用来做第一个resolve成功状态后的处理，第二个是reject（可选）状态的回调函数。
           * catch(error)：用于指定发生错误时的回调函数,then方法中运行的错误，也会被catch捕获。
           * done(): 它总是位于回调链的尾端，保证抛出任何可能出现的错误。
           * finally()：无论最后状态如何都会执行的操作，接受一个普通的回调函数作为参数。
           *
           * Promise.all()：用于并行执行多个异步操作，all接收一个数组参数，等到它们都执行完后才会进到then里面，返回一个值也是一个数组，包含了所有的返回结果。
           * Promise.race()：用于并行执行多个异步操作，race接收一个数组参数，其中一个率先完成就会进到then里面，返回率先完成的这个结果。
           *
           */

          // this.count--;
          var promise = new Promise((resolve,reject)=>{
            if(this.count>1){
              resolve("接受");
            }
            if(this.count<=1){
              reject("拒绝");
            }
          });
          promise.then(res=>{
            console.log(res); //接受
          }).catch(res=>{
            console.log(res); //拒绝
          });

          promise.finally(()=>{
            console.log("无论如何都会执行");  //无论如何都会执行
          })


          // function a(){
          //   return 1;
          // }
          // function b(){
          //   return 2;
          // }
          // Promise.all([
          //   a(),
          //   b()
          // ]).then(res=>{
          //   console.log(res); //[1,2]
          // })
          // Promise.race([
          //   a(),
          //   b()
          // ]).then(res=>{
          //   console.log(res); //1
          // })


        },
        operate1 () {
          let promise = new Promise((resolve, reject)=>{
            console.log(1); //1 立即执行
            resolve(2);
            // reject(3);
          });
          // promise.then(res => {
          //   console.log(res); //2
          // });
          // promise.catch(error => {
          //   console.log(error); //3
          // });


          // 链式调用
          promise.then(res => {
            console.log(res); //2
            return 3;
          }).then(res => {
            console.log(res); //3
          }).finally(()=>{
            console.log('finish');
          });

          //并发请求
          Promise.all(
            [
              a(),
              b()
            ]

          ).then(res => {
            console.log(res); //[1,2]
          });
          function a() {
            return 1;
          }
          function b() {
            return 2;
          }

          //谁先执行完，先返回谁
          Promise.race([
            b(),
            a()
          ]).then(res => {
            console.log(res); //2
          })

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
