<template>
    <div>
      <h5>{{title}}</h5>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          title: 'async函数',
        }
      },
      methods:{
        operate(){

          // function a(){
          //   var x = new Promise((resolve)=>{
          //     setTimeout(()=>{
          //       resolve('a');
          //     },5000)
          //   });
          //   console.log(x);
          // }
          // function b(){
          //   var y =  new Promise((resolve)=>{
          //     setTimeout(()=>{
          //       resolve('b');
          //     },8000)
          //   });
          //   console.log(y);
          // }
          // function c(){
          //   return 'c';
          // }
          // async function eat() {
          //   // var x = await a();
          //   // var y = await b(x);
          //   // return c(y);
          //   // await a();
          //   // await b();
          //   // return c();
          //
          //   var x = await  new Promise((resolve)=>{
          //     setTimeout(()=>{
          //       resolve(1);
          //     },3000)
          //   });
          //   console.log(x);
          //   var y = await  new Promise((resolve)=>{
          //     setTimeout(()=>{
          //       resolve(2);
          //     },5000)
          //   });
          //   console.log(y);
          //
          // }
          // eat();
          // var promise = eat();  //Promise{<pending>}
          // console.log(promise);
          // promise.then(res=>{
          //   console.log(res); //orange
          // })


          async function print(value,ms) {
            await new Promise((resolve)=>{
              setTimeout(()=>{
                resolve(1);
              },ms)
            });
            console.log(value); //5秒后执行输出hello
            return value;
          }
          print('hello',5000).then(res=>{
            console.log(res); //5秒后拿到返回结果输出hello
          })
        }
      },
      mounted() {
        this.operate();
      }

    }
</script>

<style scoped>

</style>
