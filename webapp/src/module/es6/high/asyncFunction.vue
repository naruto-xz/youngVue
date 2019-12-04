<template>

</template>

<script>
    import promise from "../promise";

    export default {

      methods:{
        operate(){

          async function print(value,ms) {
            var result = await new Promise((resolve)=>{
              setTimeout(()=>{
                resolve(1);
              },ms)
            });
            console.log(result); //5秒后执行输出1
            return result;
          }
          print('hello',5000).then(res=>{
            console.log(res); //5秒后拿到返回结果输出hello
          })

          // async函数的的并行调用
          // function a(){
          //   return new Promise((resolve)=>{
          //     setTimeout(()=>{resolve(1)},2000)
          //   })
          // }
          // function b(){
          //   return new Promise((resolve)=>{
          //     setTimeout(()=>{resolve(2)},5000)
          //   })
          // }
          // async function print() {
          //   return await Promise.all(
          //     [
          //       a(),
          //       b()
          //     ]
          //   )
          // }
          // print().then(res=>{
          //   console.log(res); //并行执行，5秒回返回[1,2]
          // });


        },
        operate1 () {
          // function eat() {
          //   return new Promise((resolve, reject) => {
          //     setTimeout(()=>{
          //       resolve('eat');
          //     },3000);
          //   })
          // }
          // async function drink() {
          //   let res = await eat();
          //   // let res = await 1; //会立即执行，返回一个promise对象
          //   console.log(123); //3秒后等返回res才会执行 //123
          //   return res;
          // }
          // drink().then(res=>{
          //   console.log(res); //eat
          // });

          //捕捉错误
          async function play() {
            let res = await new Promise((resolve, reject) => {
              reject(1);
            });
            console.log(456); //不会执行
            return res;
          }
          play().catch(error=>{
            console.log(error); //1
          });
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
